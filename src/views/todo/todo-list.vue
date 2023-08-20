<template>
  <section class="todo-warpper">
    <div class="todo-header">代办清单</div>
    <section class="todo-inner">
      <div class="todo-date">2023-08-13</div>
      <div class="todo-list">
        <div v-for="(item, index) in todoItem" :key="index" class="todo-item">
          <div class="todo-checkbox-warp">
            <!-- <input type="checkbox" :checked="item.checked" class="todo-checkbox"> -->
            <el-checkbox v-model="item.checked" size="large" />
          </div>
          <div class="todo-content-warp" @click="handleToDoItemFocus(item)">
            <span v-if="item.todo && !item.focus" class="todo-content-text">{{ item.todo }}</span>
            <input
              v-if="item.focus"
              v-model="item.todo"
              v-focus
              :autofocus="item.focus"
              type="textarea"
              row="1"
              class="todo-content-textarea"
              @keyup.enter.native="handleToDoItem(item)">
          </div>
          <div v-if="todoItem.length > 1" class="todo-delete-warp">
            <el-button type="danger" :icon="Delete" circle @click="handleToDoItemDelete(item, index)" />
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script lang="ts" setup>
import { Delete } from '@element-plus/icons-vue'
import { computed, defineComponent, nextTick, onMounted, reactive, ref, toRefs } from 'vue'
import Database from '@/utils/indexdb'
interface ToDoItem {
  id: string | number,
  checked: boolean,
  focus: boolean,
  todo: string
}
const todoItem = ref([{
  id: Date.now(),
  checked: false,
  focus: true,
  todo: ''
}])
// 必须以v开头的指令才能起效
const vFocus = {
  mounted: (el: HTMLInputElement) => el.focus()
}
const database = new Database()
database.connect('database', 1).then(res => {
  if (database.hasObjectStoreNames('todo')) {
    const request = database.db.transaction(['todo']).objectStore('todo').getAll()
    request.onsuccess = function () {
      todoItem.value = request.result.length > 0 ? request.result : [{
        id: Date.now(),
        checked: false,
        focus: true,
        todo: ''
      }]
    }
  } else {
    const initTodoTable = [
      { name: 'id', unique: false },
      { name: 'checked', unique: false },
      { name: 'focus', unique: false },
      { name: 'todo', unique: false },
      { name: 'state', unique: false },
      { name: 'date', unique: false }
    ]
    database.create('todo', initTodoTable, { keyPath: 'id' })
  }
})
const handleToDoItem = (item: ToDoItem) => {
  if (!item.todo) return
  todoItem.value.forEach(item => {
    item.focus = false
    database.add('todo', {...item, state: item.checked ? 2 : 1, date: new Date().toLocaleString()})
  })
  todoItem.value.push({
    id: Date.now(),
    checked: false,
    focus: true,
    todo: ''
  })
}
const handleToDoItemFocus = (data: ToDoItem) => {
  todoItem.value.forEach(item => {
    if (item.id === data.id) {
      item.focus = true
    } else {
      item.focus = false
    }
  })
}
const handleToDoItemDelete = (data: ToDoItem, index: number) => {
  todoItem.value.splice(index, 1)
}
</script>

<style lang="scss" scoped>
.todo-warpper {
  width: 100%;
}
.todo-header {
  padding: 10px;
}
.todo-inner {
  width: 100%;
  padding: 10px 20px;
  border: 1px solid #eaeaea;
  border-radius: 5px;
}
.todo-date {
  padding: 15px 0;
  width: 100%;
  border-bottom: 1px solid #eaeaea;
}
.todo-item {
  display: flex;
}
.todo-checkbox-warp {
  width: 60px;
  padding: 10px;
  text-align: center;
}
.todo-checkbox {
  width: 24px;
  height: 24px;
}
.todo-content-warp {
  width: calc(100% - 100px);
  padding: 10px 0;
  border-bottom: 1px solid #eaeaea;
}
.todo-content-textarea {
  width: 100%;
  line-height: 2;
  font-size: 20px;
  border: 1px solid transparent;
  outline: none;
}
.todo-content-text {
  width: 100%;
  line-height: 2;
  font-size: 20px;
}
.todo-delete-warp {
  padding: 10px 0;
}
</style>
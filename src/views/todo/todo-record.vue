<template>
  <section class="todo-warpper">
    <el-table :data="tableData">
      <el-table-column type="index" label="序号" align="center" width="80px"></el-table-column>
      <el-table-column prop="todo" label="代办事项" align="center"></el-table-column>
      <el-table-column prop="state" label="完成状态" align="center"></el-table-column>
      <el-table-column prop="date" label="完成时间" align="center"></el-table-column>
    </el-table>
  </section>
</template>

<script lang="ts" setup>
import Database from '@/utils/indexdb';
import { reactive, ref } from 'vue';

interface ToDoItem {
  id: string | number,
  checked: boolean,
  focus: boolean,
  state: number,
  todo: string
}
let tableData = ref([])
const database = new Database()
database.connect('database', 1).then(res => {
  if (database.hasObjectStoreNames('todo')) {
    const request = database.db.transaction(['todo']).objectStore('todo').getAll()
    request.onsuccess = function () {
      tableData.value = request.result
    }
  }
})
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
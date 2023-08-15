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
interface ToDoItem {
  id: string | number,
  state: number,
  date: string,
  todo: string
}
const tableData: ToDoItem[] = []
tableData.push({
  id: 1,
  state: 1,
  date: '2023-08-15',
  todo: '这是一个代办事项'
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
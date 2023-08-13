# 变更日志

> 2023-08-13

- 在 ts 中使用 vuex 时，存在的问题
  - `const store = useStore()` store 是 undefined
  - 使用 modules 模块，`store.state.user.username`, user 不存在
- 在 ts 中使用 computed 时存在的问题
  - `const username = computed(() => ...mapState('user', ['username']))` 写法报错
- `npx update-browserslist-db@latest`命令不能随便使用，它会把项目所有依赖包更新到最新版本，会导致项目崩坏

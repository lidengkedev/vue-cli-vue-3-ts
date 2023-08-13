<template>
  <div class="login-warpper">
    <el-form ref="loginFormRef" :model="form" :rules="rules" @submit.prevent label-width="120px" class="login-form" size="large">
      <h1>后台管理系统</h1>
      <el-form-item label="用户名：" prop="username">
        <el-input
          v-model="form.username" placeholder="请输入用户名"
          prefix-icon="UserFilled"
          @keyup.enter="handleLogin(loginFormRef)" />
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input
          v-model="form.password" type="password" placeholder="请输入密码"
          prefix-icon="Lock"
          @keyup.enter="handleLogin(loginFormRef)" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="login-btn" @click="handleLogin(loginFormRef)">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { login } from '@/api/user'
import { FormInstance } from 'element-plus'
import { defineComponent, reactive, ref, toRefs } from 'vue'
import { InitForm } from '../types/login'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus/lib/components'
import { setToken } from '@/utils/auth'
import { UserFilled, Lock } from '@element-plus/icons-vue'
import store from '@/store'

export default defineComponent({
  setup() {
    const form = reactive(new InitForm())
    form.form.username = 'admin'
    form.form.password = '123456'
    const router = useRouter()
    console.log(store)
    
    const rules = reactive({
      username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 4, max: 24, message: '用户名长度在4~24之间', trigger: 'blur' }
      ],
      password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 4, max: 24, message: '用户名长度在4~24之间', trigger: 'blur' }
      ]
    })
    const handleLogin = (ref: FormInstance | undefined) => {
      ref?.validate((valid) => {
        if (valid) {
          login(form.form).then(res => {
            console.log(store)
            store.dispatch('username', form.form.username)
            console.log('登录成功')
            ElMessage.success('登录成功')
            setToken(res.data.token)
            router.push('/')
          }).catch(err => {
            ElMessage.error('登录失败')
          })
        } else {
          ElMessage.error('用户名或密码不正确')
        }
      })
    }
    return {
      ...toRefs(form),
      rules,
      handleLogin
    }
  }
})
</script>


<style lang="scss" scoped>
.login-warpper {
  height: 100vh;
  overflow: hidden;
  background-color: #409eff;
}
.login-form {
  width: 450px;
  padding: 20px;
  margin: 0 auto;
  margin-top: 30vh;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  background-color: #FFFFFF;
  h1 {
    text-align: center;
    // margin: 20px auto;
    margin-top: 20px;
    margin-bottom: 40px;
    font-size: 24px;
  }
  .login-btn {
    width: 100%;
  }
}
</style>
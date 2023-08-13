<template>
  <el-container>
    <el-header height="60px">
      <el-row :gutter="20">
        <el-col :span="4">
          <el-button type="text" @click="is_menu_open = !is_menu_open">
            <el-icon v-if="is_menu_open" :size="24" color="#FFFFFF"><expand /></el-icon>
            <el-icon v-else :size="24" color="#FFFFFF"><fold /></el-icon>
          </el-button>
        </el-col>
        <el-col :span="16">
          <h2>后台管理系统</h2>
        </el-col>
        <el-col :span="4" class="header-right">
          <el-button type="text">
            <el-icon :size="20" color="#FFFFFF"><avatar /></el-icon>
            <span class="username">
              {{ username }}
            </span>
          </el-button>
          <el-button type="text" class="logout-btn" @click="handleLogout">
            <el-icon :size="20"><switch-button /></el-icon>
          </el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside :class="{ 'aside-inner': true, 'is-menu-open': is_menu_open }">
        <el-menu
          router
          :default-active="defaultActive"
          :collapse="!is_menu_open"
          text-color="#fff"
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="aside-menu"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><goods /></el-icon>
              <span>商品列表</span>
            </template>
            <el-menu-item
              v-for="(item, index) in menuList"
              :key="index"
              :index="item.path"
            >
              <el-icon><list /></el-icon>
              {{ item.meta.title }}
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { removeToken } from "@/utils/auth";
import { computed, defineComponent, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { SwitchButton, Avatar, Expand, Fold, Goods, List } from '@element-plus/icons-vue'
import { ElMessageBox } from "element-plus";
import { ElMessage } from "element-plus/lib/components";
import { mapState } from "vuex";
import store from "@/store";

export default defineComponent({
  components: {
    SwitchButton,
    Avatar,
    Expand,
    Fold,
    Goods,
    List
  },
  setup() {
    const router = useRouter();
    const route = useRoute()
    const defaultActive = computed(() => route.path)
    const username = computed(() =>  store.state.username)

    const is_menu_open = ref(true)
    
    const menuList = router.getRoutes().filter((item) => item.meta.aside);
    console.log(menuList)
    const handleLogout = () => {
      ElMessageBox.confirm('是否退出登录？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(() => {
        removeToken()
        ElMessage.success('操作成功！')
        router.push("/login");
      }).catch(() => {
        ElMessage.info('您已取消操作！')
      })
    };
    return {
      is_menu_open,
      menuList,
      defaultActive,
      username,
      handleLogout,
    };
  },
});
</script>

<style lang="scss" scoped>
.el-header {
  line-height: 60px;
  background-color: rgba($color: #545c64, $alpha: 1);
}
.logo {
  width: 60px;
  height: 60px;
}
h2 {
  text-align: center;
  color: #ffffff;
}
.header-right {
  text-align: right;
  .logout-btn {
    color: #ffffff;
  }
  .username {
    color: #fff;
  }
}
.aside-menu {
  height: calc(100vh - 60px);
}
.aside-inner {
  width: 64px;
  transition: width 1000ms ease-in-out;
}
.is-menu-open {
  width: 200px;
}
</style>

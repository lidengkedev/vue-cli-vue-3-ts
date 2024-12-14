<template>
    <el-form class="search-warpper" inline>
        <el-form-item label="用户名：" class="search-item">
            <el-input v-model="search.username" clearable class="search-input" placeholder="请输入关键字"></el-input>
        </el-form-item>
        <el-form-item label="手机号：" class="search-item">
            <el-input v-model="search.phone" clearable class="search-input" placeholder="请输入关键字"></el-input>
        </el-form-item>
        <el-form-item label="角色：">
            <el-select v-model="search.role" placeholder="请选择角色">
                <el-option label="全部" :value="0"></el-option>
                <el-option
                    v-for="(item, index) in roles"
                    :key="index"
                    :value="item.roleId"
                    :label="item.roleName"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" class="search-btn" @click="handleSearch">
                <el-icon :size="14"><Search/></el-icon>查询
            </el-button>
        </el-form-item>
    </el-form>
    <el-table :data="userList" border height="76vh" size="small" highlight-current-row empty-text="暂无数据">
        <el-table-column type="index" label="序号" align="center" width="80px"></el-table-column>
        <el-table-column prop="id" label="用户ID" align="center" width="80px"></el-table-column>
        <el-table-column prop="username" label="用户名" align="center" width="100px"></el-table-column>
        <el-table-column prop="phone" label="手机号" align="center" width="120px"></el-table-column>
        <el-table-column prop="email" label="邮箱" align="center"></el-table-column>
        <el-table-column prop="" label="角色" width="350px">
            <template #default="{row}">
                <el-button
                    v-for="(item, index) in row.roles"
                    :key="index"
                    type="text">{{ item.roleName }}</el-button>
            </template>
        </el-table-column>
        <el-table-column prop="" label="操作" width="150px" align="center">
            <template #default="{row, $index}">
                <el-button type="primary" size="small" @click="handleEdit(row)">
                    <el-icon :size="16"><Edit/></el-icon>
                </el-button>
                <el-button type="danger" size="small" @click="handleDelete($index)">
                    <el-icon :size="16"><Delete/></el-icon>
                </el-button>
            </template>
        </el-table-column>
    </el-table>
    <el-dialog v-model="is_show_dialog" title="角色">
        <el-form :mode="form" label-width="100px">
            <el-form-item label="用户名：">
                <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="手机号：">
                <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item label="邮箱：">
                <el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
            </el-form-item>
            <el-form-item label="角色：">
                <el-select v-model="form.roles" multiple placeholder="请选择角色" style="width: 100%">
                    <el-option
                        v-for="(item, index) in roles"
                        :key="index"
                        :value="item.roleId"
                        :label="item.roleName"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="is_show_dialog = false">取消</el-button>
                <el-button type="primary" @click="handleSubmit">确认</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs } from 'vue'
import { Search, Delete, Edit } from '@element-plus/icons-vue'
import { IFormData, InitPage, IRoles, IUserList } from '../../types/user'
import { getUserList, getUserRoles } from '@/api/user'
import { ElMessage } from 'element-plus/lib/components'
import { IRole } from '@/types/role'

export default defineComponent({
    components: {
        Search,
        Delete,
        Edit
    },
    setup() {
        const data = reactive(new InitPage())
        let userListAll: [IUserList][] = []
        onMounted(async () => {
            const { data: { list } } = (await getUserList())
            data.userList = list
            userListAll = list
            data.roles = (await getUserRoles()).data
        })
        const handleSearch = () => {
            const { username, phone, role } = data.search
            let userList = userListAll.map(item => item)
            if (username) {
                userList = userList.filter(item => (item as any).username.includes(username))
            }
            if (phone) {
                userList = userList.filter(item => (item as any).phone.includes(phone))
            }
            if (role !== 0) {
                userList = userList.filter(item => (item as any).roles.map((v: IRole) => v.roleId).includes(role))
            }
            data.userList = userList
        }
        const handleSubmit = () => {
            ElMessage.success('success')
        }
        const handleEdit = (row: IFormData) => {
            data.form = Object.assign({}, row)
            data.form.roles = row.roles.map(item => (item as any).roleId)
            console.log(data.form)
            data.is_show_dialog = true
        }
        const handleDelete = (index: number) => {
            data.userList.splice(index, 1)
        }
        return {
            ...toRefs(data),
            handleSearch,
            handleEdit,
            handleDelete,
            handleSubmit
        }
    },
})
</script>

<style scoped>

</style>

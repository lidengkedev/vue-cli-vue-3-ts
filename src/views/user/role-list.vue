<template>
    <div class="action-warpper">
        <el-button type="primary" class="add-btn" @click="handleAdd">
        <!-- <el-button :disabled="hasPermission('role:add')" type="primary" class="add-btn" @click="handleAdd"> -->
        <!-- <el-button v-permission="'role:add'" type="primary" class="add-btn" @click="handleAdd"> -->
            <el-icon :size="24"><CirclePlus/></el-icon>
        </el-button>
    </div>
    <el-table :data="roleList" border height="76vh" size="small" highlight-current-row empty-text="暂无数据">
        <el-table-column type="index" label="序号" align="center" width="80px"></el-table-column>
        <el-table-column prop="roleId" label="角色ID" align="center" width="80px"></el-table-column>
        <el-table-column prop="roleName" label="角色名称" align="center"></el-table-column>
        <el-table-column prop="" label="操作" width="200px" align="center">
            <template #default="{row, $index}">
                <!-- <el-button type="danger" size="small" @click="handleDelete($index)"> -->
                <!-- <el-button v-permission="'role:delete'" type="danger" size="small" @click="handleDelete($index)"> -->
                <el-button :disabled="hasPermission('role:delete')" type="danger" size="small" @click="handleDelete($index)">
                    <el-icon :size="16"><Delete/></el-icon>
                </el-button>
                <!-- <el-button type="success" size="small" @click="handleAuthority(row)"> -->
                <!-- <el-button v-permission="'role:auth'" type="success" size="small" @click="handleAuthority(row)"> -->
                <el-button :disabled="hasPermission('role:auth')" type="success" size="small" @click="handleAuthority(row)">
                    <el-icon :size="16"><Checked /></el-icon>
                </el-button>
            </template>
        </el-table-column>
    </el-table>
    <el-dialog v-model="is_show_dialog_add" title="新增角色">
        <el-form>
            <el-form-item label="角色名称：">
                <el-input v-model="form.roleName" placeholder="请输入角色名称"></el-input>
            </el-form-item>
        </el-form>
        <template #footer>
            <el-button type="primary" @click="handleAddForm">提交</el-button>
            <el-button @click="is_show_dialog_add = false">取消</el-button>
        </template>
    </el-dialog>
    <el-dialog v-model="is_show_dialog_auth" title="修改权限">
        <el-tree
            ref="treeRef"
            :data="authorityList"
            node-key="roleId"
            :default-checked-keys="authorityIds"
            :props="{label: 'name', children: 'roleList'}"
            show-checkbox
            empty-text="暂无数据"></el-tree>
    </el-dialog>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, onMounted, reactive, ref, toRefs } from 'vue'
import type { ElTree } from 'element-plus'
import { CirclePlus, Delete, Checked } from '@element-plus/icons-vue'
import { getUserAuthority, getUserRoles } from '@/api/user'
import { AuthorityList, InitPage } from '@/types/role'
import { ElMessage } from 'element-plus/lib/components'
import { useStore } from 'vuex'

export default defineComponent({
    components: {
        CirclePlus,
        Delete,
        Checked
    },
    setup() {
        const store = useStore()
        // const authCodeList: Array<string> = computed(() => store.state.permission.authCodeList) || ['role:add']
        // const authCodeList: Array<string> = computed(() => store.getters.authCodeList) || []
        // const authCodeList: [] = store.dispatch('permission/getPermission')
        const authCodeList: string[] = ['role:add']

        const hasPermission = (authCode: string) => {
            return !(authCodeList.length > 0 && authCodeList.includes(authCode)) 
        }

        const data = reactive(new InitPage())
        const authority = reactive(new AuthorityList([]))

        let treeRef = ref<InstanceType<typeof ElTree>>()

        onMounted(async () => {
            data.roleList = (await getUserRoles()).data
            authority.authorityList = (await getUserAuthority()).data
        })

        const handleDelete = (index: number) => {
            data.roleList.splice(index, 1)
        }
        const handleAdd = () => {
            data.is_show_dialog_add = true
        }
        const handleAddForm = () => {
            if (data.form.roleName) {
                data.roleList.unshift({
                    roleId: data.roleList.length,
                    roleName: data.form.roleName,
                    authority: []
                })
                ElMessage.success('success')
                data.is_show_dialog_add = false
            } else {
                ElMessage.error('请填写角色名')
            }
        }
        const handleAuthority = (row: any) => {
            authority.is_show_dialog_auth = true
            console.log(treeRef)
            nextTick(() => {
                (treeRef as any).value.setCheckedKeys(row.authority)
            })
        }
        return {
            ...toRefs(data),
            ...toRefs(authority),
            treeRef,
            authCodeList,
            hasPermission,
            handleDelete,
            handleAdd,
            handleAddForm,
            handleAuthority
        }
    },
})
</script>

<style scoped>
.action-warpper {
    margin-bottom: 15px;
}
</style>

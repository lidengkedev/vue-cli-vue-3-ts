<template>
    <el-form class="search-warpper" inline>
        <el-form-item label="商品标题" class="search-item">
            <el-input v-model="search.title" clearable class="search-input" placeholder="请输入关键字"></el-input>
        </el-form-item>
        <el-form-item label="商品详情" class="search-item">
            <el-input v-model="search.body" clearable class="search-input" placeholder="请输入关键字"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" class="search-btn" @click="handleSearch">
                <el-icon :size="14"><Search/></el-icon>查询
            </el-button>
        </el-form-item>
    </el-form>
    <el-table :data="productList" border height="70vh" size="small" highlight-current-row empty-text="暂无数据">
        <el-table-column prop="userId" label="用户ID" align="center" width="80px"></el-table-column>
        <el-table-column prop="id" label="商品ID" align="center" width="80px"></el-table-column>
        <el-table-column prop="title" label="商品标题" align="center"></el-table-column>
        <el-table-column prop="body" label="商品详情" align="center" show-overflow-tooltip></el-table-column>
    </el-table>
    <el-pagination
        v-model:currentPage="page.page"
        :page-size="page.size"
        :total="page.total"
        size
        background
        layout="total, prev, pager, next, jumper"
        class="table-footer"
        @current-change="handleChangeCurrentPage"></el-pagination>
</template>

<script>
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { InitPage } from '../../types/product'
import { getProductList } from '@/api/product'

export default defineComponent({
    components: {
        Search
    },
    setup() {
        const data = reactive(new InitPage)
        let productListAll = []
        onMounted(async () => {
            const { data: { list } } = await getProductList()
            productListAll = list
            data.page.total = list.length
            setTablePage(list)
        })
        const setTablePage = () => {
            const { page, size } = data.page
            const count = page < 1 ? 0 : (page - 1) * size
            data.productList = productListAll.slice(count, count + size)
        }
        const handleSearch = () => {
            const { title, body } = data.search
            let productListFilter = productListAll.map(item => item)
            if (title) {
                productListFilter = productListFilter.filter(item => item.title.includes(title))
            }
            if (body) {
                productListFilter = productListFilter.filter(item => item.body.includes(body))
            }
            data.productList = productListFilter
        }
        const handleChangeCurrentPage = (value) => {
            data.page.page = value
            setTablePage()
        }
        return {
            ...toRefs(data),
            handleSearch,
            handleChangeCurrentPage
        }
    },
})
</script>

<style scoped>
.table-footer {
    position: absolute;
    right: 10px;
    bottom: 10px;
}
</style>

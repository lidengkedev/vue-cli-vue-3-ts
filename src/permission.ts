import router from './router'
import { getToken } from './utils/auth'

router.beforeEach((to: any, from: any) => {
    document.title = 'VUE-TYPESCRIPT|' + to.meta.title
    console.log({ from: from.path, to: to.path })
    const token: string | null = getToken()
    if (!token && to.path !== '/login') {
        return '/login'
    }
})
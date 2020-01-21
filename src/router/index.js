import Vue from 'vue'
import VueRouter from 'vue-router'
import Hogar from '../views/Hogar.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Hogar',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Hogar.vue')
    },
    {
        path: '/Sobre_mi',
        name: 'Sobre mi',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Sobre_mi.vue')
    },
    {
        path: '/Proyectos',
        name: 'Proyectos',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Proyectos.vue')
    },
    {
        path: '/Galeria',
        name: 'Galeria',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Galeria.vue')
    },
    {
        path: '/Contacto',
        name: 'Contacto',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Contacto.vue')
    }
]

const router = new VueRouter({

    routes
})

export default router
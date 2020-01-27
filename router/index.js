import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Galeria from '../views/Galeria.vue'
// import "bootstrap-social.less"
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Home.vue')
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
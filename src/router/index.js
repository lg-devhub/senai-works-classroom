import {createRouter, createWebHistory} from 'vue-router'

import InicioView from '../views/InicioView.vue'
import CuidadosView from '../views/CuidadosView.vue'
import AnimaisView from '../views/AnimaisView.vue'

const router = createRouter({
    history: createWebHistory(),

    routes:[
        {
            path: '/',
            name: 'Inicio',
            component: InicioView
        },
        {
            path: '/Cuidados',
            name: 'Cuidados',
            component: CuidadosView
        },
        {
            path: '/Animais',
            name: 'Animais',
            component: AnimaisView
        }
    ]
})

export default router
import { RouteConfig } from 'vue-router';

import Test from '@/components/Test.vue';
import Board from '@/components/Board.vue';

export const routes: RouteConfig[] = [
        {
            path: '/',
            name: 'test',
            component: Test,
        },
        {
            path: '/board/:id',
            name: 'board',
            component: Board,
            props: true,
        },
        // {
        //   path: '/about',
        //   name: 'about',
        //   // route level code-splitting
        //   // this generates a separate chunk (about.[hash].js) for this route
        //   // which is lazy-loaded when the route is visited.
        //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
        // },
];

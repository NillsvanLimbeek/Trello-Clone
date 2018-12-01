import { RouteConfig } from 'vue-router';

import Boards from '@views/BoardsPage.vue';
import Board from '@views/Board.vue';

export const routes: RouteConfig[] = [
        {
            path: '/',
            name: 'boards',
            component: Boards,
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

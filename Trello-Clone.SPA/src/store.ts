import Vue from 'vue';
import Vuex from 'vuex';

import { items } from '@store/items';
import { columns } from '@store/columns';
import { sidebar } from '@store/sidebar';
import { boards } from '@store/boards';
import { calendar } from '@store/calendar';

import { IItem } from '@models/index';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        columns,
        items,
        sidebar,
        boards,
        calendar,
    },
});

export default store;

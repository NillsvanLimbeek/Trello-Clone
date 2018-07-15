/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        sidebarStatus: false,
        workspaces: [
            {
                title: 'Workspace 1',
                id: 1,
                color: '#d29034',
                userIds: [1, 2, 3]
            },
            {
                title: 'Workspace 2',
                id: 2,
                color: '#055a8c',
                userIds: 1
            },
            {
                title: 'Workspace 3',
                id: 3,
                color: '#61bd4f',
                userIds: [1, 2, 3, 4]
            }
        ],
        workspace: [
            {
                workspacesIds: [1, 2],
                id: 1
            },
            {
                workspacesIds: [3, 4],
                id: 2
            },
            {
                workspacesIds: [5],
                id: 3
            }
        ],
        columns: [
            {
                title: 'Column 1',
                workspaceIds: [1],
                id: 1
            },
            {
                title: 'Column 2',
                workspaceIds: [2],
                id: 2
            },
            {
                title: 'Column 3',
                workspaceIds: [3],
                id: 3
            }
        ],
        items: [
            {
                title: 'Item 1',
                columnId: 1,
                id: 1
            },
            {
                title: 'Item 2',
                columnId: 2,
                id: 2
            },
            {
                title: 'Item 3',
                columnId: 3,
                id: 3
            },
        ],
        cards: [
            {
                title: 'Card 1',
                itemId: 1,
                id: 1
            },
            {
                title: 'Card 2',
                itemId: 1,
                id: 2
            },
            {
                title: 'Card 3',
                itemId: 2,
                id: 3
            },
        ]
    },
    getters: {
        getColumnTitle: state => {
            return state.columns
        }
    },
    mutations: {
        toggleSidebar(state) {
            state.sidebarStatus = !state.sidebarStatus
        },
        addColumn (state, payload) {
            state.columns.push(payload)
        },
        addItem (state, payload) {
            state.items.push(payload)
        },
        addCard (state, payload) {
            state.cards.push(payload)
        },
        deleteColumn(state, payload) {
            state.columns = state.columns.filter(column => column.id !== payload)
        }
    },
    actions: {
        toggleSidebar({ commit }) {
            commit('toggleSidebar')
        },
    }
})

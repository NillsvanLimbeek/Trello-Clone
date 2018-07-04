<template>
    <div class="workspace">
        <ul class="workspace__list">
            <Column v-for="column in columns"
                    :key="column.id"
                    :columnId="column.id">
                <input class="column__input" type="text" v-model="column.title">
            </Column>
        </ul>

        <div class="workspace__add-button"
             @click="addColumn">
            <i class="fas fa-plus"></i>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    import Column from './Column.vue'

    export default {
        methods: {
            addColumn() {
                this.$store.commit('addColumn', { title: 'Column', id: this.columns.length + 1 })
            }
        },
        computed: {
            ...mapState([
                'columns'
            ])
        },
        components: {
            Column
        }
    }
</script>

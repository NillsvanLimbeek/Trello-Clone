<template>
    <div class="calendar-week">
        <div class="calendar-week__list-header">
            <div
                class="calendar__day-name"
                v-for="name in dayNames"
                :key="name.id">

                {{ name }}

            </div>
        </div>

        <div class="calendar-week__list">
            <div
                class="calendar-week__days"
                v-for="day in weekDays"
                :key="day.id">

                <p
                    class="calendar-week__days-title"
                    :class="{ 'active-day': isSameDay(day) }">
                    {{ day | date('D') }}
                </p>

            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    import moment from 'moment';

    @Component({})

    export default class CalendarWeek extends Vue {
        private weekDays: Date[] = [];
        private dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        private daysInWeek() {
            const dayList: Date[] = [];

            const startOfWeek = moment().startOf('week');
            const endOfWeek = moment().endOf('week');

            while (startOfWeek.diff(endOfWeek) < 0) {
                dayList.push(startOfWeek.clone().toDate());
                startOfWeek.add(1, 'days');
            }

            this.weekDays = dayList;
        }

        private isSameDay(date: Date) {
            const today = moment();

            if (moment(date).isSame(today, 'day')) {
                return true;
            }

            return false;
        }

        private created() {
            this.daysInWeek();
        }
    }
</script>

<style>

</style>

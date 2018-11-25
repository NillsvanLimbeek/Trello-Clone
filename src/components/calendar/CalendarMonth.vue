<template>
    <div class="calendar-month">
        <div class="calendar-month__list-header">
            <div
                class="calendar__day-name"
                v-for="name in dayNames"
                :key="name.id">

                {{ name }}

            </div>
        </div>

        <div class="calendar-month__list">
            <div
                class="calendar-month__days"
                :class="{ inactive: !isSameMonth(day) }"
                v-for="day in monthDays"
                :key="day.id">

                <p
                    class="calendar-month__days-title"
                    :class="{ 'active-day': isSameDay(day) }">
                    {{ day | date('D') }}
                </p>

            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from '@/vue-script';

    import moment from 'moment';

    @Component({})

    export default class CalendarMonth extends Vue {
        private monthDays: Date[] = [];
        private dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

        private daysInMonth() {
            this.monthDays = [];
            const dayList: Date[] = [];

            const startOfMonth = moment().startOf('month').startOf('week');
            const endOfMonth = moment().endOf('month').endOf('week');

            while (startOfMonth.diff(endOfMonth) < 0) {
                dayList.push(startOfMonth.clone().toDate());
                startOfMonth.add(1, 'days');
            }

            this.monthDays = dayList;
        }

        private isSameMonth(date: Date) {
            const today = moment();

            if (moment(date).isSame(today, 'month')) {
                return true;
            }

            return false;
        }

        private isSameDay(date: Date) {
            const today = moment();

            if (moment(date).isSame(today, 'day')) {
                return true;
            }

            return false;
        }

        private created() {
            this.daysInMonth();
        }
    }
</script>

<style>

</style>

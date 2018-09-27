<template>
    <div class="calendar">
        <CalendarHeader />

        <div class="calendar__list">
            <div class="calendar__list-header">

                <div
                    class="calendar__day-name"
                    v-for="name in dayNames"
                    :key="name.id">

                    {{ name }}

                </div>

            </div>

            <div
                class="calendar__week"
                v-if="calendarView === CalendarView.Week">

                Calendar Week

            </div>

            <div
                class="calendar__month"
                v-if="calendarView === CalendarView.Month">

                <div
                    class="calendar__days"
                    :class="{ inactive: !isSameMonth(day) }"
                    v-for="day in monthDays"
                    :key="day.id">

                    <p
                        class="calendar__days-title"
                        :class="{ 'active-day': isSameDay(day) }">
                        {{ day | date('D') }}
                    </p>

                </div>

            </div>

        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';
    import { Getter } from 'vuex-class';

    import { CalendarView } from '@/data/enums/enum';

    import * as moment from 'moment';

    import CalendarHeader from '@/components/CalendarHeader.vue';

    @Component({
        components: {
            CalendarHeader,
        },
    })

    export default class Calendar extends Vue {
        private CalendarView: any = CalendarView;

        @Getter('getCalendarView') private calendarView!: CalendarView;

        private monthDays: Date[] = [];
        private weekDays: Date[] = [];

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

        private created() {
            this.daysInMonth();
            this.daysInWeek();
        }
    }
</script>

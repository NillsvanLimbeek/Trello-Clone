<template>
    <div class="calendar">
        <CalendarHeader />

        <div class="calendar__list">
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
                    v-for="day in monthDays"
                    :key="day.id">

                    <p class="calendar__days-title">
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

    import moment from 'moment';

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

        private daysInMonth() {
            this.monthDays = [];
            const dayList: Date[] = [];

            const startOfMonth = moment().startOf('month');
            const endOfMonth = moment().endOf('month');

            while (startOfMonth.diff(endOfMonth) < 0) {
                dayList.push(startOfMonth.clone().toDate());
                startOfMonth.add(1, 'days');
            }

            this.monthDays = dayList;
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

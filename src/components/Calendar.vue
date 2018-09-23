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

                Calendar Month

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

        private daysInMonth() {
            const dayList: Date[] = [];

            const startOfMonth = moment().startOf('month');
            const endOfMonth = moment().endOf('month');

            while (startOfMonth.diff(endOfMonth) < 0) {
                dayList.push(startOfMonth.clone().toDate());
                startOfMonth.add(1, 'days');
            }

            // console.log(dayList);
        }

        private daysInWeek() {
            const dayList: Date[] = [];

            const startOfWeek = moment().startOf('month');
            const endOfWeek = moment().endOf('month');

            while (startOfWeek.diff(endOfWeek) < 0) {
                dayList.push(startOfWeek.clone().toDate());
                startOfWeek.add(1, 'days');
            }

            // console.log(dayList);
        }

        private created() {

        }
    }
</script>

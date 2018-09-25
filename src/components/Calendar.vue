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

                    <svg height="10" width="10" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <pattern id="diagonal-stripe-1" patternUnits="userSpaceOnUse" width="10" height="10"> <image xlink:href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCc+CiAgPHJlY3Qgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJyBmaWxsPSd3aGl0ZScvPgogIDxwYXRoIGQ9J00tMSwxIGwyLC0yCiAgICAgICAgICAgTTAsMTAgbDEwLC0xMAogICAgICAgICAgIE05LDExIGwyLC0yJyBzdHJva2U9J2JsYWNrJyBzdHJva2Utd2lkdGg9JzEnLz4KPC9zdmc+Cg==" x="0" y="0" width="10" height="10"> </image> </pattern> </defs> </svg>

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

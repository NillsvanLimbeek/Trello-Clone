<template>
    <div class="calendar">
        <CalendarHeader />

        <div class="calendar__list">
            <CalendarWeek v-if="calendarView === CalendarView.Week" />
            <CalendarMonth v-if="calendarView === CalendarView.Month" />
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop, Getter } from '@/vue-script';

    import { CalendarView } from '@enums/index';

    import * as moment from 'moment';

    import CalendarHeader from './CalendarHeader.vue';
    import CalendarMonth from './CalendarMonth.vue';
    import CalendarWeek from './CalendarWeek.vue';

    @Component({
        components: {
            CalendarHeader,
            CalendarMonth,
            CalendarWeek,
        },
    })

    export default class Calendar extends Vue {
        private CalendarView: any = CalendarView;

        @Getter('getCalendarView') private calendarView!: CalendarView;
    }
</script>

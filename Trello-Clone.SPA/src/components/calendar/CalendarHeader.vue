<template>
<div class="calendar-header">
        <div class="calendar-header__left">
            <div
                class="button border-radius-left"
                :class="{ 'button__active': calendarView === CalendarView.Week }"
                @click="changeCalendarView(BoardView.Board)"
                >

                <icon-base
                    viewBox="0 0 385 385"
                    width="15"
                    height="15"
                    :class="{ 'icon-active': calendarView === CalendarView.Week }">

                    <icon-week />
                </icon-base>

                Week
            </div>

            <div
                class="button border-radius-right"
                :class="{ 'button__active': calendarView === CalendarView.Month }"
                @click="changeCalendarView(CalendarView.Month)">

                <icon-base
                    viewBox="0 0 511.6 511.6"
                    width="15"
                    height="15"
                    :class="{ 'icon-active': calendarView === CalendarView.Month }">

                    <icon-month />
                </icon-base>

                Month
            </div>
        </div>

        <div class="calendar-header__month-picker">

            <div class="calendar-header__month">

                <p>{{ currentDate | date('MMMM') }}</p>

                <icon-base
                    viewBox="0 0 42 42"
                    width="10"
                    height="10">

                    <icon-arrow />
                </icon-base>
            </div>

            <p class="calendar-header__year">{{ currentDate | date('YYYY') }}</p>

        </div>

        <div class="calendar-header__right">
            <div
                class="button border-radius-left"
                :class="{ active: currentView === BoardView.Board }"
                @click="changeCurrentView(BoardView.Board)">

                <icon-base
                    viewBox="0 0 385 385"
                    class="button__icon"
                    :class="{ 'icon-active': currentView === BoardView.Board }">

                    <icon-boards />
                </icon-base>

                Boards
            </div>

            <div
                class="button border-radius-right"
                :class="{ active: currentView === BoardView.Calendar }"
                @click="changeCurrentView(BoardView.Calendar)">

                <icon-base
                    viewBox="0 0 511.6 511.6"
                    class="button__icon"
                    :class="{ 'icon-active': currentView === BoardView.Calendar }">

                    <icon-calendar />
                </icon-base>

                Calendar
            </div>
        </div>

    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop, Getter } from '@/vue-script';

    import { IconBase, IconWeek, IconMonth, IconArrow, IconBoards, IconCalendar } from '@components/icons';

    import { BoardView, CalendarView } from '@enums/index';

    import * as moment from 'moment';

    @Component({
        components: {
            IconBase,
            IconWeek,
            IconMonth,
            IconArrow,
            IconCalendar,
        },
    })

    export default class CalendarHeader extends Vue {
        private BoardView: any = BoardView;
        private CalendarView: any = CalendarView;

        @Getter('getCurrentView') private currentView!: BoardView;
        @Getter('getCalendarView') private calendarView!: CalendarView;

        private currentDate = moment.now();

        private changeCurrentView(newView: BoardView) {
            this.$store.dispatch('setCurrentView', newView);
        }

        private changeCalendarView(newCalendar: CalendarView) {
            this.$store.dispatch('setCurrentCalendar', newCalendar);
        }
    }
</script>

import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import * as moment from 'moment';

export type CalendarDay = {
  date: moment.Moment;
  segments: AppointmentSegment[];
  inactiveMonth: boolean;
};

export type Appointment = {
  id: string;
  title: string;
  description: string;
  startDate: moment.Moment;
  endDate: moment.Moment;
};

export type AppointmentSegment = {
  id: string;
  type: SegmentType;
  widthPx: string;
  active: boolean;
};

export enum SegmentType {
  Start = 'Start',
  Between = 'Between',
  End = 'End',
}

export const MAP_SIZE = 42;

@Component({
  selector: 'calendar-example',
  templateUrl: './calendar-example.component.html',
})
export class CalendarExampleComponent implements AfterViewInit {
  @ViewChild('gridContainer', { static: true }) gridContainer!: ElementRef;

  SegmentType = SegmentType;
  monthMap: CalendarDay[] = [];
  appointments: Appointment[] = [
    // {
    //   id: '123',
    //   title: 'Test Appointment1',
    //   description: 'Test Description',
    //   startDate: moment(new Date(2023, 1, 14)),
    //   endDate: moment(new Date(2023, 1, 16)),
    // },
    {
      id: 'gg',
      title: 'gg',
      description: 'Test Description',
      startDate: moment(new Date(2023, 1, 17)),
      endDate: moment(new Date(2023, 1, 19)),
    },
    {
      id: '456',
      title: 'Test Appointment2',
      description: 'Test Description',
      startDate: moment(new Date(2023, 0, 30)),
      endDate: moment(new Date(2023, 2, 12)),
    },
    // {
    //   id: '789',
    //   title: 'Test Appointment3',
    //   description: 'Test Description',
    //   startDate: moment(new Date(2023, 0, 31)),
    //   endDate: moment(new Date(2023, 1, 3)),
    // },
  ];

  constructor() {}

  ngAfterViewInit(): void {
    this.switchMonth(2023, 1);
  }

  switchMonth(year: number, month: number) {
    const firstDayOfMonth = moment(new Date(year, month, 1));
    const daysToFirstMonday = firstDayOfMonth.isoWeekday();
    const firstDayPrevMonth = firstDayOfMonth.add(-daysToFirstMonday, 'days');

    Array.from(Array(MAP_SIZE).keys()).forEach((d) => {
      const day = moment(firstDayPrevMonth.add(1, 'days'));

      const cDay: CalendarDay = {
        date: day,
        segments: this.parseAppointments(day),
        inactiveMonth: false,
      };
      this.monthMap.push(cDay);
    });
  }

  parseAppointments(day: moment.Moment): AppointmentSegment[] {
    const dayAppointments: AppointmentSegment[] = [];
    const itemSize = this.gridContainer.nativeElement.clientWidth / 7;
    dayAppointments.push(
      ...this.appointments
        .filter((ap) => day.isSame(ap.startDate))
        .map(
          (ap) =>
            <AppointmentSegment>{
              id: ap.id,
              type: SegmentType.Start,
              widthPx: `calc(${itemSize}px - 0.75rem)`,
            }
        )
    );
    dayAppointments.push(
      ...this.appointments
        .filter((ap) => day.isBetween(ap.startDate, ap.endDate))
        .map(
          (ap) =>
            <AppointmentSegment>{
              id: ap.id,
              type: SegmentType.Between,
              widthPx: `calc(${itemSize}px - 1.5rem)`,
            }
        )
    );
    dayAppointments.push(
      ...this.appointments
        .filter((ap) => day.isSame(ap.endDate))
        .map(
          (ap) =>
            <AppointmentSegment>{
              id: ap.id,
              type: SegmentType.End,
              widthPx: `calc(${itemSize}px - 0.75rem)`,
            }
        )
    );

    return dayAppointments;
  }

  toggleActive(id: string | undefined) {
    if (!id) return;
    this.monthMap.forEach((m) =>
      m.segments.forEach((s) => {
        if (s.id == id) s.active = !s.active;
        else s.active = false;
      })
    );
  }
}

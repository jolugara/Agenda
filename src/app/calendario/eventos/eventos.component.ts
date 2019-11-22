import { Component, OnInit } from '@angular/core';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  // array donde se guardaran los eventos
  public events: any[];
  public options: any;

  constructor() {
    this.events = [
      {
          title: 'All Day Event',
          start: '2016-01-01',
          end: '2016-01-10'
      },
      {
          title: 'Long Event',
          start: '2016-01-07',
          end: '2016-01-10'
      },
      {
          title: 'Repeating Event',
          start: '2016-01-09T16:00:00'
      },
      {
          title: 'Repeating Event',
          start: '2016-01-16T16:00:00'
      },
      {
          title: 'Conference',
          start: '2016-01-11',
          end: '2016-01-13'
      }
    ];

    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaultDate: new Date(),
      header: {
          left: 'prev,next',
          center: 'title',
          right: 'month,agendaWeek,agendaDay'
      }
    };

   }

  ngOnInit() {
  }
}

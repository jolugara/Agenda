import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CalendarioComponent } from './calendario/calendario.component';
import {FullCalendarModule} from 'primeng/fullcalendar';
import { HeaderComponent } from './header/header.component';
import { EventosComponent } from './calendario/eventos/eventos.component';
import { NextEventsComponent } from './calendario/next-events/next-events.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarioComponent,
    HeaderComponent,
    EventosComponent,
    NextEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DoorStateComponent } from './door-state/door-state.component';
import {HttpService} from "./service/http.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {CommonModule} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import { StopAlarmComponent } from './stop-alarm/stop-alarm.component';
import {MatButtonModule} from "@angular/material/button";
import { AlarmAdminComponent } from './alarm-admin/alarm-admin.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatChipsModule} from "@angular/material/chips";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    DoorStateComponent,
    StopAlarmComponent,
    AlarmAdminComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatChipsModule,
    ReactiveFormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

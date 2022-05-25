import {Component, Input, OnInit} from '@angular/core';
import {AlarmType, ThingspeakApi} from "../model/thingspeak-feed";
import {HttpService} from "../service/http.service";

@Component({
  selector: 'app-stop-alarm',
  templateUrl: './stop-alarm.component.html',
  styleUrls: ['./stop-alarm.component.css']
})
export class StopAlarmComponent implements OnInit {

  @Input()
  public thingspeakData: ThingspeakApi | undefined;

  public readonly ALARM_TYPE_NO = AlarmType.NO;
  public readonly ALARM_TYPE_WARNING = AlarmType.WARNING;
  public readonly ALARM_TYPE_ALARM = AlarmType.ALARM;
  public readonly ALARM_TYPE_OFF = AlarmType.OFF;
  public readonly ALARM_TYPE_EMAIL = AlarmType.EMAIL;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  public switchOffAlarm(sec: number): void {
    this.httpService.switchOffAlarm(sec).subscribe();
  }
}

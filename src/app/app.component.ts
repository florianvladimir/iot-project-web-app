import {Component, OnDestroy, OnInit} from '@angular/core';
import {AlarmType, ThingspeakApi} from "./model/thingspeak-feed";
import {HttpService} from "./service/http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  private apiPollIntervall: number | undefined;
  public thingspeakData: ThingspeakApi | undefined;
  private alertWasSent = false;

  title = 'iot-project';

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.getAipData()
    this.apiPollIntervall = setInterval(() => this.getAipData(), 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.apiPollIntervall);
  }

  private getAipData(): void {
    this.httpService.getDoorState().subscribe(value => {
      this.thingspeakData = value;
      if (value.entries[0].alarmType === AlarmType.EMAIL && !this.alertWasSent) {
        this.alertWasSent = true;
        this.notifyMe();
      }
      if(value.entries[0].alarmType !== AlarmType.EMAIL && !this.alertWasSent){
        this.alertWasSent = false;
      }
    })
  }

  notifyMe() {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }

    // Let's check whether notification permissions have alredy been granted
    else if (Notification.permission === "granted") {
      // If it's okay let's create a notification
      var notification = new Notification("Auchtung! Chuchichäschtli isch no offe");
    }

    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          var notification = new Notification("Auchtung! Chuchichäschtli isch no offe");
        }
      });
    }

  }
}

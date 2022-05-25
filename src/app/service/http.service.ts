import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DoorStateEntry, ThingspeakApi, ThingspeakRaw} from "../model/thingspeak-feed";
import {map, Observable} from "rxjs";

@Injectable()
export class HttpService {

  private readonly thingspeakUrl = 'https://api.thingspeak.com/channels/1720753/feeds.json?api_key=T4WWNKOYKPOCJXLQ&results=1';
  private readonly espBaseUrl = 'http://192.168.178.65/';

  constructor(private http: HttpClient) {
  }


  public getDoorState(): Observable<ThingspeakApi> {
    return this.mapToThingspeakApi(this.http.get<ThingspeakRaw>(`${this.thingspeakUrl}`));
  }

  public getEmails(): Observable<any> {
    return this.http.get<any>(`${this.espBaseUrl}alarm/email`);
  }

  public updateEmails(emails: string): Observable<any> {
    return this.http.post(`${this.espBaseUrl}alarm/email`, emails);
  }

  public switchOffAlarm(sec: number){
    return this.http.post(`${this.espBaseUrl}alarm/off`, sec+'');
  }

  private mapToThingspeakApi(object: Observable<ThingspeakRaw>): Observable<ThingspeakApi> {
    return object.pipe(
      map((value: ThingspeakRaw) => {
        let feeds = value.feeds.map(v => {
          let a: DoorStateEntry = {
            id: v.entry_id,
            createdAt: new Date(v.created_at),
            doorState: Number(v.field1),
            changed: v.field2 === '1',
            alarmType: Number(v.field3)
          }
          return a;
        });
        let o: ThingspeakApi = {
          channel: value.channel,
          entries: feeds
        }
        return o;
      })
    )
  }
}

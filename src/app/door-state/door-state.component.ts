import {Component, Input} from '@angular/core';
import {ThingspeakApi} from "../model/thingspeak-feed";

@Component({
  selector: 'app-door-state',
  templateUrl: './door-state.component.html',
  styleUrls: ['./door-state.component.css']
})
export class DoorStateComponent {

  @Input()
  public thingspeakData: ThingspeakApi | undefined;


  constructor() {
  }

}

export interface ThingspeakRaw {
  channel: ThingspeakChannel;
  feeds: ThingspeakFeed[];
}

interface ThingspeakChannel {
  id: number;
  name: string;
  field1: string;
  field2: string;
  field3: string;
  created_at: string;
  updated_at: string;
  last_entry_id: number
}

interface ThingspeakFeed {
  created_at: string;
  entry_id: number;
  field1: string;
  field2: string;
  field3: string;
}

export interface ThingspeakApi {
  channel: ThingspeakChannel
  entries: DoorStateEntry[]
}

export interface DoorStateEntry {
  id: number;
  createdAt: Date;
  doorState: DoorState;
  changed: boolean;
  alarmType: AlarmType
}

export enum DoorState{
  CLOSED, OPEN
}

export enum AlarmType{
  NO,WARNING, ALARM, EMAIL= 3, OFF=9
}

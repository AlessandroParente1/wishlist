import { Observable, Subject } from "rxjs";

interface EventData {
  eventName: string;
  payload: any;
}

class EventService {
  private subject = new Subject<EventData>();

  emit(eventName: string, payload: any) {
    this.subject.next({ eventName, payload });
  }

  listen(eventName: string, callback: (event: any) => void) {
    return this.subject.asObservable().subscribe((nextObj: EventData) => {
      if (eventName === nextObj.eventName) {
        callback(nextObj.payload);
      }
    });
  }
}

export default new EventService();

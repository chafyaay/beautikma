import { Injectable, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class NotificationService {
  isShowNotifApp = { success: true, show: false, msgType: '' };
  @Input()
  msgType="";
  notifSubject = new BehaviorSubject<object>(this.isShowNotifApp);
  showNotifSubjet = this.notifSubject.asObservable();
  constructor() {}

  showNotifAlert(obj: any) {
    this.notifSubject.next({
      success: obj.success,
      show: true,
      msgType: obj.msgType
    });
    setTimeout(() => {
      this.notifSubject.next({
        success: obj.success,
        show: false,
        msgType: obj.msgType
      });
    }, 1000);
  }
}

import { Component, OnInit, VERSION } from '@angular/core';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  showNotifApp = { success: false, show: false,msgType:'' };
  show=false;
  msgType=""
  constructor(private notService: NotificationService) {}

  ngOnInit() {
    this.notService.notifSubject.subscribe((data: any) => {
      this.showNotifApp = data;
      this.show=data.success;
      this.msgType=data.msgType && '';
    }); 
  }
  showpopup=false
  onpopup() {
    this.showpopup = true;
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from './notification.service';

@Injectable()
export class RouterService {
  constructor(
    private router: Router,
    private notservice: NotificationService
  ) {}
  goToUrl(url: any, params?: any) {
  
    this.router
      .navigate(['/'+url], params || {})
      .then(res => {
        this.notservice.showNotifAlert({
          success: true,
          show: false,
          msgType: ''
        });
      })
      .catch(err => {
         this.notservice.showNotifAlert({
          success: true,
          show: false,
          msgType: ''
        });
      });
  }
}

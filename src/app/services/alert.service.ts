import { Injectable } from '@angular/core';

@Injectable()
export class AlertService {

  show: boolean = false;
  type: string = 'info';
  message: string;
  timer: any;

  alert(message: string, type: string = 'info', autoHide: number = 5000) {
    this.show = true;
    this.type = type;
    this.message = message;
    if (this.timer) {
      clearTimeout(this.timer);
    }
    if (autoHide) {
      this.timer = setTimeout(() => {
        this.close();
      }, autoHide);
    }
  }



  close() {
    this.show = false;
  }
}

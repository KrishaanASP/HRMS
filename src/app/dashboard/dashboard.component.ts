import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  isPopupVisible = false;

  constructor(private commonService: CommonService){

  }
  toggleNotificationPopup() {
    this.isPopupVisible = !this.isPopupVisible;
    console.log("CLicked")
  }

  openNewRequestForm(){
    this.commonService.openNewRequestForm()
    
  }
}

import { Component, Inject } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSidebarOpen:any
  isNewRequestClicked:any
  constructor(private commonService: CommonService){
    this.commonService.sidebarState$.subscribe(state => {
      this.isSidebarOpen = state;
    });


    this.commonService.isNewRequestClicked$.subscribe(state => {
      this.isNewRequestClicked = state;
    });

  }
  
  toggleSidebar() {
    this.commonService.toggleSidebar()
    console.log("Toggled")
  }


  openNewReqestForm(){
    this.commonService.openNewRequestForm()
  }
}

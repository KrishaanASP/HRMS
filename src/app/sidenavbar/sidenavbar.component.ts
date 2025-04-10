import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent {

  isSidebarOpen = false;

  constructor(private commonService: CommonService) {
    this.commonService.sidebarState$.subscribe(state => {
      this.isSidebarOpen = state;
    });
  }


  toggleSidebar() {
    this.commonService.toggleSidebar();
  }

  
}

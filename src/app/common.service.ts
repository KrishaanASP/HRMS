import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private sidebarState = new BehaviorSubject<boolean>(false);
  sidebarState$ = this.sidebarState.asObservable()

  toggleSidebar() {
    this.sidebarState.next(!this.sidebarState.value);
  }


  private isNewRequestClicked = new BehaviorSubject<boolean>(false);
  isNewRequestClicked$ = this.isNewRequestClicked.asObservable()

  openNewRequestForm(){
    this.isNewRequestClicked.next(true);
  }

  closeNewRequestForm(){
    this.isNewRequestClicked.next(false);
  }

}

import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-newrequest',
  templateUrl: './newrequest.component.html',
  styleUrls: ['./newrequest.component.css']
})
export class NewrequestComponent {

  isNewRequestClicked: any

  constructor(private commonService: CommonService){
    this.commonService.isNewRequestClicked$.subscribe(state=>{
      this.isNewRequestClicked = state
    })
  }
  
  // openPanel(): void {
  //   this.commonService.openNewRequestForm()
  //   document.body.style.overflow = 'hidden'; // Prevent background scrolling
  // }

  closePanel(): void {
    this.commonService.closeNewRequestForm()
    document.body.style.overflow = 'auto'; // Enable background scrolling
  }

  onSubmit(): void {
    alert('Form submitted successfully!');
    this.closePanel();
  }
}

import { Component, HostListener, ViewChild } from '@angular/core';
import { CommonService } from '../common.service';
import { JobRequestService } from '../job-request.service';
import { JobRequest, JobRequestResponse } from 'src/modals/job-request-model';
import { Table } from 'primeng/table';
import { SortEvent } from 'primeng/api';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent {
  @ViewChild('dt')
  dt!: Table;
  dropdownVisible = false;
  dropdownStyle: any = {};
  initialValue: JobRequest[];
  isSorted: boolean = null;
  searchValue: string | undefined;
  isPopupVisible = false;
  jobRequests: JobRequest[] = [];
  jobRequestTableHeaders:any = [];
  first = 0;
  rows = 5;
  constructor(
    private commonService: CommonService,
    private jobRequestService: JobRequestService
  ){}

  ngOnInit(): void {
    this.jobRequestService.getJobRequests().subscribe({
      next:(response)=>{
        this.jobRequests = response.Data
        this.initialValue = [...response.Data];
        console.log("Job Request",this.jobRequests)
      },
      error:(err)=>{
        console.log("Error when getting Job Requests",err)
      }
    });


    this.jobRequestTableHeaders = [
      { field: 'JobRequestId', header: 'Job Request ID' },
      { field: 'JobDescription', header: 'Position' },
      { field: 'EmploymentType', header: 'Position Type' },
      { field: 'RequestType', header: 'Request Type' },
      { field: 'RequestReason', header: 'Request Reason' },
      { field: 'ExperienceLevel', header: 'Experience' },
      { field: 'OpeningsTotal', header: 'No. of Resource' },
      { field: 'SkillsRequired', header: 'Skills Required' },
      { field: 'SalaryRange', header: 'Salary Range (₹)' },
      { field: 'EmployeeStatus', header: 'Job Type' },
      { field: 'DesignationName', header: 'Reporting To' },
      { field: 'Shift', header: 'Shift' },
      { field: 'Approval.ApproverName', header: 'Approved By' },
      { field: 'RequestTimeStamp', header: 'Request Date & Time' },
      { field: 'TatDays', header: 'Due Date' },
      { field: 'RequestStatus', header: 'Status' },
      { field: 'Approval.ApprovalComment', header: 'Comments' },
      { field: 'actions', header: 'Actions' }
    ];
  }


  toggleDropdown(event: MouseEvent) {
    event.stopPropagation();
  
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    this.dropdownStyle = {
      top: `${rect.bottom}px`,
      left: `${rect.left}px`,
    };
  
    this.dropdownVisible = !this.dropdownVisible;
  }
  
  // Optional: close when clicking outside
  @HostListener('document:click')
  closeDropdown() {
    this.dropdownVisible = false;
  }
  
  onAction(action: string) {
    console.log(`You clicked ${action}`);
    this.dropdownVisible = false;
  }
    pageChange(event){
    this.first = event.first;
    this.rows = event.rows;
  }

  customSort(event: SortEvent) {
    if (this.isSorted == null || this.isSorted === undefined) {
        this.isSorted = true;
        this.sortTableData(event);
    } else if (this.isSorted == true) {
        this.isSorted = false;
        this.sortTableData(event);
    } else if (this.isSorted == false) {
        this.isSorted = null;
        this.jobRequests = [...this.initialValue];
        this.dt.reset();
    }
}

sortTableData(event) {
  console.log(event)
  event.data.sort((data1, data2) => {
      let value1 = data1[event.field];
      let value2 = data2[event.field];
      let result = null;
      if (value1 == null && value2 != null) result = -1;
      else if (value1 != null && value2 == null) result = 1;
      else if (value1 == null && value2 == null) result = 0;
      else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2);
      else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;

      return event.order * result;
  });
}

  toggleNotificationPopup() {
    this.isPopupVisible = !this.isPopupVisible;
    console.log("CLicked")
  }
  openNewRequestForm(){
    this.commonService.openNewRequestForm()
  }

  
  


  
}

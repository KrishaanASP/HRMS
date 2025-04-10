import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JobRequestResponse } from 'src/modals/job-request-model';

@Injectable({
  providedIn: 'root'
})
export class JobRequestService {

  private apiURL = `${environment.apiUrl}/recruitment/job-requests`

  constructor(private http: HttpClient) { }


  getJobRequests(): Observable<JobRequestResponse>{
    return this.http.get<JobRequestResponse>(this.apiURL)
  }
}

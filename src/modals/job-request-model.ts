
export interface JobRequestResponse {
    StatusCode: number;
    Message: string;
    Data: JobRequest[];
  }
  
  export interface JobRequest {
    JobRequestId: number;
    RequesterId: number;
    RequesterName: string;
    DepartmentId: number;
    DepartmentName: string;
    SubDepartmentId: number;
    SubDepartmentName: string | null;
    DesignationId: number;
    DesignationName: string;
    OpeningsTotal: number;
    OpeningsFilled: number;
    OpeningsPending: number;
    RequestType: string;
    EmploymentType: string;
    Priority: string;
    TatDays: number;
    RequestReason: string;
    JobDescription: string;
    ExperienceLevel: string;
    SkillsRequired: string;
    SalaryRangeFrom: number;
    SalaryRangeTo: number;
    HiringSourceType: string;
    Shift: string;
    RequestTimeStamp: string; // ISO format date
    IsRevoked: boolean;
    RequestStatus: string;
    EmployeeStatus: string;
    Approval: JobRequestApproval;
  }
  
  export interface JobRequestApproval {
    JobRequestApprovalId: number;
    JobRequestId: number;
    ApproverId: number;
    ApproverName: string;
    ApprovedDate: string;
    ApprovalStatus: string;
    ApprovalComment: string;
    JobRequestTitle: string | null;
    RequesterName: string | null;
    DepartmentName: string | null;
    DesignationName: string | null;
  }
  
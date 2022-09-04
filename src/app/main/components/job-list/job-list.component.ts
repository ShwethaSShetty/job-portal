import { Component, Input, OnInit } from '@angular/core';
import { Observable, switchMap, tap } from 'rxjs';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-job',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {

  title = 'job-portal';
  jobsList: any[] = [];
  currentPage: number = 0;
  totalPages: number = 0;
  jobDetail$: Observable<any> = new Observable();

  @Input()
  get searchQuery(): { skill: string, region: string } { return this._searchQuery; }
  set searchQuery(search: { skill: string, region: string }) {
    this._searchQuery = search;
    this.searchJobs(this.searchQuery);
  }
  private _searchQuery: { skill: string, region: string } = { skill: '', region: '' };

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.searchJobs(this.searchQuery);
  }

  /* This method makes a call to get the list of all the jobs in the current page and picks 
  the first job and makes a detail call and fetches its details */
  public searchJobs(data: { skill: string, region: string }, pageNum: number = 1) {
    this.jobDetail$ = this.jobService.getJobsList(data.region, data.skill, pageNum).pipe(
      tap((jobsObj) => {
        this.jobsList = jobsObj.documents;
        this.totalPages = jobsObj.num_pages;
        this.currentPage = jobsObj.current_page;
      }),
      switchMap(jobsObj => this.jobService.getjobDescription(jobsObj.documents[0].job_id))
    );
  }

  public getJobDetail(job: any) {
    this.jobDetail$ = this.jobService.getjobDescription(job.job_id);
  }

  // This method calls the search with next page if the forward flag is true else it calls previous page
  public nextPage(forward: boolean = true) {
    const pageNum = forward ? this.currentPage + 1 : this.currentPage - 1
    this.searchJobs(this.searchQuery, pageNum);
  }


}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { catchError, debounceTime, distinctUntilChanged, map, Observable, of, OperatorFunction, switchMap, tap } from 'rxjs';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  public skill: string = "";
  public region: string = "";
  @Output() private readonly executeSearch: EventEmitter<{ skill: string, region: string }> = new EventEmitter<{ skill: string, region: string }>();
  constructor(private jobService: JobService) { }


  /* Gets the type Ahead suggestions for skills from the Api with a debounce to avoid multiple API calls
      Also sorts the results in descending order by the order field
  */
  public jobSearchResult: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(skill =>
        this.jobService.skillSearch(skill).pipe(
          map((resp) => resp.sort((job1: any, job2: any) => job1.order - job2.order).map((job: any) => job.name_display)),
          catchError(() => {
            return of([]);
          })
        )
      )
    );


    /* Gets the type Ahead suggestions for regions from the Api with a debounce to avoid multiple API calls
    and displays only the english translated version of the region/city/place
  */
  public regionSearchResult: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(region =>
        this.jobService.regionSearch(region).pipe(
          map((resp) => resp.result),
          map((result: any[]) => result.map((region: any) => region.name.en)),
          catchError(() => {
            return of([]);
          })
        )
      )
    );

    // emits the search field values on click of search 
  public searchJobs() {
    this.executeSearch.emit({ skill: this.skill, region: this.region });
  }

}

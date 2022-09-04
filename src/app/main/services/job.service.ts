import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private jobSearchUrl: string = "api/v1/public/meta/typeahead";
  private regionSearchUrl: string = "api/v1/meta/gis/type-ahead";
  private jobsListUrl: string = "api/v1/public/search";

  constructor(private http: HttpClient) { }

  // api to retrive the skills/keywords for typeahead 
  public skillSearch(term: string, limit: number = 5): Observable<any> {
    if (term === '') {
      return of([]);
    }
    return this.http
      .get(`${this.jobSearchUrl}?limit=${limit}&query=${term}`).pipe(
        map((response) => response)
      );
  }

  // api to retrive the regions/places for typeahead 
  public regionSearch(term: string, rows: number = 5, subTypes: string = "city"): Observable<any> {
    if (term === '') {
      return of([]);
    }
    return this.http
      .get(`${this.regionSearchUrl}?rows=${rows}&subTypes[]=${subTypes}&term=${term}`).pipe(
        map((response) => response)
      );
  }

  /*Api to retrive the list of jobs. the default row size is configured to 20 ,
  which indicates the number of records per search.
  This is a pagination supported Api
  */
  public getJobsList(location: string = "", skill: string = "", pageNum: number = 1, rows: number = 20): Observable<any> {
    return this.http
      .get(`${this.jobsListUrl}?location=${location}&query=${skill}&rows=${rows}&page=${pageNum}`);
  }

  // Api which returns the job description based on the job ID
  public getjobDescription(jobId: string): Observable<any> {
    return this.http.get(`${this.jobsListUrl}/job/${jobId}`);
  }

}

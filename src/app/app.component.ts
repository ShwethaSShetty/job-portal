import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'job-portal';
  searchQuery: { skill: string, region: string } = { skill: '', region: '' };
  constructor() { }


  public searchJobs(data: { skill: string, region: string }) {
    this.searchQuery = data;
  }

}

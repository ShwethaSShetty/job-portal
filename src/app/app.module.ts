import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JobListComponent } from './main/components/job-list/job-list.component';
import { SearchComponent } from './main/components/search/search.component';
import { SafePipe } from './main/pipes/safe.pipe';
import { JobDetailComponent } from './main/components/job-detail/job-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    JobListComponent,
    SafePipe,
    JobDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobListComponent } from './job-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Job-list Component', () => {
  let component: JobListComponent;
  let fixture: ComponentFixture<JobListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobListComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

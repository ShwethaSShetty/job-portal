import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { inject, TestBed } from '@angular/core/testing';
import { SafePipe } from './safe.pipe';

describe('SafePipe', () => {
  beforeEach(() => {
    TestBed
      .configureTestingModule({
        imports: [
          BrowserModule
        ]
      });
  });

  it('create an instance', inject([DomSanitizer], (domSanitizer: DomSanitizer) => {
    let pipe = new SafePipe(domSanitizer);
    expect(pipe).toBeTruthy();
  })); 
});
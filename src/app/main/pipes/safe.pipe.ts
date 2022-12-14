import { Pipe, PipeTransform } from '@angular/core';

import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: 'safe'
})

export class SafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }
  // this pipe is used to sanitize the Html before injecting it into the DOM
  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
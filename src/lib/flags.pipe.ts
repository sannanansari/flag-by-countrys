import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';  

@Pipe({
  name: 'flags'
})
export class FlagsPipe implements PipeTransform {

constructor(private sanitizer: DomSanitizer)  {}

  transform(value: string, ...args: unknown[]): SafeHtml {
    
    return `<img src="../assets/flags/${value}.png"  height="20" width="35" />`
  }

}

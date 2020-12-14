import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'blogDate'
})
export class BlogDatePipe implements PipeTransform {

  transform(value: string): string {
    return value.slice(0, value.indexOf("T"));
  }

}

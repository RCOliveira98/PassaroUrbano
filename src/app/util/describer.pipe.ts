import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'describer'
})

export class Describer implements PipeTransform {

  transform(content: string) {
    if (content.length > 15) {
      return `${content.substr(0, 15)}...`;
    }
    return content;
  }
}

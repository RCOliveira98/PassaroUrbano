import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'describer'
})

export class Describer implements PipeTransform {

  transform(content: string, init: number = 0, limit?: number) {
    if (limit) {
      if (content.length > limit) {
        return `${content.substr(init, limit)}...`;
      }
      return content;
    }
    if (content.length > 15) {
      return `${content.substr(init, 15)}...`;
    }
    return content;
  }
}

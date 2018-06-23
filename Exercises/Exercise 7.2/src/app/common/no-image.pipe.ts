import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {
  defaultImage: string = '/assets/images/NoImage.png';

  transform(value: string, imageSrc: string): any {
    if(!imageSrc) imageSrc = this.defaultImage;
    return value ? value : imageSrc;
    }

}

import { Photo } from './../photo/photo';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterByDescription' })
export class FilterByDescription implements PipeTransform {
  transform(photos: Photo[], descriptionQuery: string) {
    descriptionQuery = descriptionQuery.trim().toLocaleLowerCase();
    if (descriptionQuery) {
      return photos.filter(photo =>
        photo.description.toLocaleLowerCase().includes(descriptionQuery)
      );
    } else {
      return photos;
    }
  }
}

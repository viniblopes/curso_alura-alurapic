import { DarkenOnHoverModule } from './../../shared/directives/darken-on-hover/darken-on-hover.module';
import { CardModule } from '../../shared/components/card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoModule } from './../photo/photo.module';
import { PhotosComponent } from './photos/photos.component';
import { PhotoListComponent } from './photo-list.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterByDescription } from './filterByDescription.pipe';
import { SearchComponent } from './search/search.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescription,
    SearchComponent
  ],
  imports: [CommonModule, PhotoModule, CardModule, RouterModule]
})
export class PhotoListModule {}

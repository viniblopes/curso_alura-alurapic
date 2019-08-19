import { DarkenOnHoverModule } from './../shared/directives/darken-on-hover/darken-on-hover.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoModule } from './photo/photo.module';
import { CommonModule } from '@angular/common';
import { PhotoDetailsModule } from './photo-details/photo-details.module';

@NgModule({
  imports: [
    PhotoModule,
    PhotoFormModule,
    PhotoListModule,
    PhotoDetailsModule,
    DarkenOnHoverModule
  ]
})
export class PhotosModule {}

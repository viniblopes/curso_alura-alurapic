import { PhotoOwnerOnlyDirective } from './photo-owner-only/photo-owner-only.directive';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { CommonModule } from '@angular/common';
import { PhotoDetailsComponent } from './photo-details.component';
import { NgModule } from '@angular/core';
import { PhotoModule } from '../photo/photo.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { ShowIfLoggedModule } from 'src/app/shared/directives/show-if-logged/show-if-logged.module';

@NgModule({
  declarations: [
    PhotoDetailsComponent,
    PhotoCommentsComponent,
    PhotoOwnerOnlyDirective
  ],
  exports: [PhotoDetailsComponent, PhotoCommentsComponent],
  imports: [
    CommonModule,
    PhotoModule,
    RouterModule,
    ReactiveFormsModule,
    ShowIfLoggedModule,
    VMessageModule
  ]
})
export class PhotoDetailsModule {}

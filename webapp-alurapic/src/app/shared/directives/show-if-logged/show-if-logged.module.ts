import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ShowIfLoggedDirective } from './show-if-logged.directive';

@NgModule({
  declarations: [ShowIfLoggedDirective],
  exports: [ShowIfLoggedDirective],
  imports: [CommonModule]
})
export class ShowIfLoggedModule {}

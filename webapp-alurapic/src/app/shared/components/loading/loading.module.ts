import { LoadingInterceptor } from './loading.interceptor';
import { LoadingComponent } from './loading.component';
import { NgModule } from '@angular/core';
import { LoadingService } from './loading.service';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [LoadingComponent],
  exports: [LoadingComponent],
  imports: [CommonModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ]
})
export class LoadingModule {}

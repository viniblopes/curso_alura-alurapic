import { AbstractControl } from '@angular/forms';
import { Injectable, Pipe } from '@angular/core';

import { SignUpService } from './signup.service';
import { debounceTime, switchMap, map, first } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserNotTakenValidatorService {
  constructor(private signUpService: SignUpService) {}

  checkUserNameTaken() {
    return (control: AbstractControl) => {
      return control.valueChanges
        .pipe(debounceTime(300))
        .pipe(
          switchMap(userName => {
            return this.signUpService.checkUserNameTaken(userName);
          })
        )
        .pipe(map(isTaken => (isTaken ? { userNameTaken: true } : null)))
        .pipe(first());
    };
  }
}

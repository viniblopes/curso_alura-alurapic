import { AlertService } from './../../shared/components/alert/alert.service';
import { PhotoService } from './../photo/photo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo/photo';
import { Observable } from 'rxjs';
import { PhotoComment } from '../photo/photo-comment';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  templateUrl: './photo-details.component.html'
})
export class PhotoDetailsComponent implements OnInit {
  photo$: Observable<Photo>;
  photoId: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService,
    private alertService: AlertService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.photoId = this.activatedRoute.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(this.photoId);
    this.photo$.subscribe(
      () => {},
      err => {
        console.log(err);
        this.router.navigate(['not-found']);
      }
    );
  }

  remove() {
    console.log('foi no remove');
    this.photoService.removePhoto(this.photoId).subscribe(
      () => {
        this.alertService.success('Photo removed!', true);
        this.router.navigate(['user', this.userService.getUserName()]);
      },
      err => {
        this.alertService.warning('Could not delete the photo', true);
      }
    );
  }
}

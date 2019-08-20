import { UserService } from './../../../core/user/user.service';
import {
  Directive,
  Input,
  ElementRef,
  Renderer,
  OnInit,
  Renderer2
} from '@angular/core';
import { Photo } from '../../photo/photo';

@Directive({
  selector: '[photoOwnerOnly]'
})
export class PhotoOwnerOnlyDirective implements OnInit {
  @Input() ownedPhoto: Photo;

  constructor(
    private element: ElementRef<any>,
    private renderer: Renderer2,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.userService.getUser().subscribe(user => {
      if (user.id !== this.ownedPhoto.userId) {
        this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
      }
    });
  }
}

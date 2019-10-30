import {Injectable} from '@angular/core';
import {CanDeactivate} from '@angular/router';
import {PostDetailComponent} from '../modules/home/user-profile/user-posts/post/post-detail/post-detail.component';
import {ConfirmationDialogService} from '../modules/shared/services/confirmation-dialog.service';
import {ConfirmDialogService} from '../modules/shared/services/confirm-dialog.service';
import {Observable} from 'rxjs';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<PostDetailComponent> {

  constructor(private confirmDialogService: ConfirmDialogService) {}

  canDeactivate(component: PostDetailComponent): boolean | Observable<boolean> {
    if (component.hasUnsavedData()) {
      return this.confirmDialogService.confirm('Підтвердження', 'Ви дійсно хочете покинути сторінку?', 'Так', 'Ні');
    }
    return true;
  }
}

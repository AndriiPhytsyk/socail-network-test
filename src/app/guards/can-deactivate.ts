import {Injectable} from '@angular/core';
import {CanDeactivate} from '@angular/router';
import {PostDetailComponent} from '../modules/home/user-profile/user-posts/post/post-detail/post-detail.component';
import {ConfirmationDialogService} from '../modules/shared/services/confirmation-dialog.service';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<PostDetailComponent> {

  constructor(private confirmationDialogService: ConfirmationDialogService) {}

  canDeactivate(component: PostDetailComponent): boolean {
    if (component.hasUnsavedData()) {
      return confirm('Are you sure');
    }
    return true;
  }
}

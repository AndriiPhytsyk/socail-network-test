import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../services/user.service';
import {ActivatedRoute, Params} from '@angular/router';
import {AlertService} from '../../../shared/services/alert.service';
import {UserInfo} from '../../../shared/models/userInfo';

@Component({
 selector: 'app-user-info',
 templateUrl: 'user-info.component.html',
 styleUrls: ['./user-info.component.scss']
})

export class UserInfoComponent implements OnInit {

 selectedFile = null;
 userInfo: UserInfo;
 isUserInfoLoaded = false;
 isImageLoaded = false;

 constructor(private userService: UserService,
             private route: ActivatedRoute,
             private alertService: AlertService) { }

 ngOnInit() {
   this.route.queryParams
     .subscribe((params: Params) => {
       if (params.informationEdited) {
         this.alertService.success('Information was successfully edited');
       }
     });

   this.userService.getUsersMe()
     .subscribe(userInfo => {
       console.log(34, userInfo);
       this.userInfo = userInfo.user;
       this.isUserInfoLoaded = true;
   });
 }

  fileChangeEvent(event: any): void {
    this.selectedFile = event.target.files[0] as File;
    if (this.selectedFile.name.match(/.(jpg|jpeg|png)$/i)) {
      this.isImageLoaded = true;
      this.selectedFile = event.target.files[0] as File;

      const reader = new FileReader();

      reader.readAsDataURL(this.selectedFile);
      reader.onload = () => {
        this.userInfo.image = reader.result as string;
      };
    } else {
      this.alertService.warn('Please select an image');
    }
  }

  uploadImage(event) {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.userService.uploadPhoto(fd)
      .subscribe();
  }

}

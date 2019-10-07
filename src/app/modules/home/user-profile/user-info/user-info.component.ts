import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../services/user.service';
import {ActivatedRoute, Params} from '@angular/router';
import {AlertService} from '../../../shared/services/alert.service';

@Component({
 selector: 'app-user-info',
 templateUrl: 'user-info.component.html',
 styleUrls: ['./user-info.component.scss']
})

export class UserInfoComponent implements OnInit {

 selectedFile = null;
 userInfo = {};
 isImageLoaded = false;

 constructor(private userService: UserService,
             private route: ActivatedRoute,
             private alertService: AlertService) { }

 ngOnInit() {
   this.route.queryParams
     .subscribe((params: Params) => {
       if (params['informationEdited']) {
         this.alertService.success('Information was successfully edited');
       }
     });

   this.userService.getUsersMe()
     .subscribe(result => {
       console.log(result)
       this.userInfo = result['user'];
   });
 }

  fileChangeEvent(event: any): void {
    this.selectedFile = <File>event.target.files[0];
    if (this.selectedFile.name.match(/.(jpg|jpeg|png)$/i)) {
      this.isImageLoaded = true;
      this.selectedFile = <File>event.target.files[0];

      const reader = new FileReader();

      reader.readAsDataURL(this.selectedFile);
      reader.onload = (_event) => {
        this.userInfo['image'] = reader.result;
      };
    } else {
      // need to change
      this.alertService.warn('Please select an image');
    }
  }

  uploadImage() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.userService.uploadPhoto(fd)
      .subscribe(result => {
        this.isImageLoaded = false;
      });
  }

}

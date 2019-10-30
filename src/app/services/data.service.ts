import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({  providedIn: 'root' })
export class DataService {

  comment: string;
  subComment: string;

  subCommentInputValue(subComment) {
    console.log(11, subComment);
    this.subComment = subComment;
  }

  commentInputValue(comment) {
    console.log(16, comment);
    this.comment = comment;
  }

  isDirtyInputs() {
    console.log(19, this.subComment);
    console.log(20, this.comment);
    return this.subComment || this.comment;
  }

  cleanInputs() {
    this.comment = '';
    this.subComment = '';
  }

}


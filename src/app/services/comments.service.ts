import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GLOBAL} from './global';

@Injectable()
export class CommentsService {

  constructor(private http: HttpClient) {
  }

  replyToComment(text, commentId) {
    debugger
    return this.http.post<any>(`http://${GLOBAL.url}/comment/${commentId}/response`, {
      text
    });
  }
}

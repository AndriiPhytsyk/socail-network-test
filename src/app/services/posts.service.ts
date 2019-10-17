import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GLOBAL} from './global';

@Injectable()
export class PostsService {

  constructor(private http: HttpClient) {
  }

  getPostById(id) {
    return this.http.get<any>(`http://${GLOBAL.url}/post/${id}`);
  }

  createPost(image) {
    return this.http.post<any>(`http://${GLOBAL.url}/users/me/post`, image);
  }

  updatePost(image, id) {
    return this.http.put<any>(`http://${GLOBAL.url}/users/me/post/${id}`, image);
  }


  deletePost(id) {
    return this.http.delete<any>(`http://${GLOBAL.url}/users/me/post/${id}`);
  }


  addComment(postId, fd?) {
    return this.http.post<any>(`http://${GLOBAL.url}/post/${postId}/comment`, fd);
  }

}

import { Injectable } from '@angular/core';

@Injectable()
export class PostsService {

  posts = [
    {id: 1, title: 'test title1', description: 'test description 1', image: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg'},
    {id: 2, title: 'test title2', description: 'test description 2', image: 'https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg'},
    {id: 3, title: 'test title3', description: 'test description 3', image: 'https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg'},
    {id: 4, title: 'test title4', description: 'test description 4', image: 'https://www.belightsoft.com/products/imagetricks/img/intro-video-poster@2x.jpg'},
  ];


 constructor() { }

 getAllPosts() {
   return this.posts;
 }

 getPostById(id) {
   debugger
   return this.posts.find(post => post.id === +id);
 }

}

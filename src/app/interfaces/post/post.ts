import {PostComment} from '../post-comment/post-comment';

export interface Post {
  id: string;
  userId: string;
  text: string;
  image: string;
  created_at: string;
  allow: boolean;
  comments: Array<PostComment>;
}

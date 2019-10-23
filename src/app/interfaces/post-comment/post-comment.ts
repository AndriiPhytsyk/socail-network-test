import {CommentResponses} from '../comment-response/comment-responses';

export interface PostComment {
  _id: string;
  userId: string;
  text: string;
  image: string;
  file: Array<string>;
  created_at: string;
  can_respond: boolean;
  responses: Array<CommentResponses>;
}



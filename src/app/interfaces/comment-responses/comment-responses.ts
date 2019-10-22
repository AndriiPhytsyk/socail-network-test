export interface CommentResponses {
  _id: string;
  userId: string;
  text: string;
  image: string;
  file: Array<string>;
  created_at: string;
  can_respond: boolean;
}

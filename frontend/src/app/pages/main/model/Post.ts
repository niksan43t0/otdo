export interface Post {
  heading: string;
  text: string;
  textColor: string;
  imgSrc: string;
  backgroundColor: string;
  postStyle: PostStyle;
}

export enum PostStyle {
  PICTURE_LEFT = "PICTURE_LEFT",
  PICTURE_RIGHT = "PICTURE_RIGHT",
  PICTURE_BOTTOM = "PICTURE_BOTTOM"
}

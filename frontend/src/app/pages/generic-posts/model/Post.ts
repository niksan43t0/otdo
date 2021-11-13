export interface Post {
  heading: string;
  text: string;
  textColor: string;
  imgSrc: string;
  backgroundColor: string;
  postStyle: PostStyle;
  postType: PostType;
}

export enum PostStyle {
  PICTURE_LEFT = "PICTURE_LEFT",
  PICTURE_RIGHT = "PICTURE_RIGHT",
  PICTURE_BOTTOM = "PICTURE_BOTTOM"
}

export enum PostType {
  OVERVIEW = "OVERVIEW",
  MACHINES = "MACHINES",
  SERVICES = "SERVICES",
  GALLERY = "GALLERY"
}

export interface IPost {
  post: {
    id: string;
    description: string;
    image: string;
    username: string;
    created: string;
    updated: string;
  };
  presignedLink: string;
}

export class Post {
  post: {
    id: string;
    description: string;
    image: string;
    username: string;
    created: string;
    updated: string;
  };
  presignedLink: string;

  constructor(data: IPost) {
    this.post = data.post;
    this.presignedLink = data.presignedLink;
  }
}

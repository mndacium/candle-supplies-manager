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
    
    this.post.created = new Date(post.created).toLocaleDateString('en-GB', { year: 'numeric', day: '2-digit', month: '2-digit' });
    this.presignedLink = data.presignedLink;
  }
}

export interface IPostCreateForm {
    sampleTextProp: string;
  }
  
  const PostCreateForm: React.FC<IPostCreateForm> = ({ sampleTextProp }) => {
    return <div>{sampleTextProp}</div>;
  };
  
  export default PostCreateForm;
  
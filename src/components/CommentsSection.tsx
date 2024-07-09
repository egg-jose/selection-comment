import Comment from "./Comment";

interface Props {
  comments: string[];
}

function CommentsSection({ comments }: Props) {
  return (
    <div style={{ width: "30%", padding:"0 10px" }}>
      {comments.map((comment, index) => (
        <Comment comment={comment} key={index} />
      ))}
    </div>
  );
}

export default CommentsSection;

import Comment from "./Comment";

interface Props {
  comments: string[];
}

function CommentsSection({ comments }: Props) {
  return (
    <div className="relative px-3 w-1/3">
      {comments.map((comment, index) => (
        <Comment comment={comment} key={index} />
      ))}
    </div>
  );
}

export default CommentsSection;

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

interface CommentProps {
  comment: string;
}

function Comment({ comment }: CommentProps) {
  return (
      <div className="bg-white p-6 rounded-lg shadow-lg mb-3">
        <h5 className="font-bold mb-2 text-gray-800">{comment}</h5>
      </div>
  );
}

export default CommentsSection;

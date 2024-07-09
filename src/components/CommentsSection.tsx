import { CommentItem } from "./ComentItemType";
import Comment from "./Comment";

interface Props {
  comments: CommentItem[];
  handleModifyComment: (
    id: string,
    text: string,
    top: number,
    height?: number
  ) => void;
}

function CommentsSection({ comments, handleModifyComment }: Props) {
  return (
    <div className="relative px-3 w-1/3">
      {comments.map((comment, index) => (
        <Comment
          comment={comment}
          key={index}
          handleModifyComment={handleModifyComment}
        />
      ))}
    </div>
  );
}

export default CommentsSection;

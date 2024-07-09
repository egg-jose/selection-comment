import React from "react";
import Article from "./components/Article";
import CommentsSection from "./components/CommentsSection";
import SelectMenu from "./components/SelectMenu";
import { CommentItem } from "./components/ComentItemType";

function App() {
  const [comments, setComments] = React.useState<CommentItem[]>([]);

  const articleRef = React.useRef<HTMLDivElement>(null);

  const handleAddComment = (text: string, top: number, height = 125) => {
    function adjustPositions(array: CommentItem[]): CommentItem[] {
      // Sort the array by positionTop to handle items in order
      const sortedArray = array.sort((a, b) => a.top - b.top);

      for (let i = 1; i < sortedArray.length; i++) {
        const previous = sortedArray[i - 1];
        const current = sortedArray[i];

        // Check for overlap
        if (previous.top + previous.height + 30 > current.top) {
          // Adjust the positionTop to avoid overlap
          current.top = previous.top + previous.height + 30;
        }
      }

      return sortedArray;
    }

    const newComment = {
      id: Math.random().toString(36).substring(2, 15),
      text,
      top,
      height,
    } as CommentItem;
    setComments((prevComments) => {
      const newComments = adjustPositions([...prevComments, newComment]);
      return newComments;
    });
  };
  return (
    <>
      <div className="flex flex-row p-8">
        <Article ref={articleRef}>
          <SelectMenu
            handleAddComment={handleAddComment}
            elementRef={articleRef}
          />
        </Article>
        <CommentsSection comments={comments} />
      </div>
    </>
  );
}

export default App;

import React from "react";
import { CommentItem } from "../components/ComentItemType";

function useComments() {
  const [comments, setComments] = React.useState<CommentItem[]>([]);

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

  const handleAddComment = (text: string, top: number, height = 125) => {
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

  const handleModifyComment = (
    id: string,
    text: string,
    top: number,
    height = 125
  ) => {
    setComments((prevComments) => {
      const nextComments = [...prevComments];
      const index = nextComments.findIndex((comment) => comment.id === id);
      nextComments[index].text = text;
      nextComments[index].top = top;
      nextComments[index].height = height;
      const newComments = adjustPositions(nextComments);
      return newComments;
    });
  };

  return [comments, handleAddComment, handleModifyComment] as const
}

export default useComments;

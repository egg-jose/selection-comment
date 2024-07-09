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

      // console.log("currentId: " + current.id);
      // console.log("currentBeforeTop: " + current.top );
      // console.log("currentBeforeOriginTop: " + current.originTop);
      // console.log("currentBeforeHeight: " + current.height);

      // Check for overlap
      if (previous.top + previous.height + 30 > current.top) {
        // Adjust the positionTop to avoid overlap
        current.top = previous.top + previous.height + 30;
      }
      // console.log("currentAfterTop: " + current.top);
      // console.log("currentAfterOriginTop: " + current.originTop);
      // console.log("currentAfterHeight: " + current.height);
      // console.log("---------------------------------------------------")
    }
    return sortedArray;
  }

  const handleAddComment = (text: string, top: number, height = 125) => {
    const newComment = {
      id: Math.random().toString(36).substring(2, 15),
      text,
      top,
      originTop: top,
      height,
    } as CommentItem;
    setComments((prevComments) => {
      const newComments = adjustPositions([...prevComments, newComment]);
      return newComments;
    });
  };

  const handleModifyComment = (id: string, text: string, height = 125) => {
    setComments((prevComments) => {
      const nextComments = [...prevComments].map((c) => {
        c.top = c.originTop;
        if (c.id === id) {
          c.text = text;
          c.height = height;
        }
        return c;
      });
      const newComments = adjustPositions(nextComments);
      return newComments;
    });
  };

  return [comments, handleAddComment, handleModifyComment] as const;
}

export default useComments;

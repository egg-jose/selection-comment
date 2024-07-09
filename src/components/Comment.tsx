import React from "react";
import useToggle from "../hooks/useToggle";
import { CommentItem } from "./ComentItemType";

interface Props {
  comment: CommentItem;
}

function Comment({ comment }: Props) {
  const [show, toggleShow] = useToggle();
  const [isTooLong, setIsTooLong] = React.useState(false);

  const ref = React.useRef<HTMLHeadingElement>(null);

  React.useEffect(() => {
    if (ref?.current !== null) {
      setIsTooLong(ref.current.clientHeight !== ref.current.scrollHeight);
    }
  }, []);

  return (
    <div
      className="absolute  bg-white p-3 rounded-lg shadow-lg mb-3 transition duration-150 ease-in-out"
      style={{ left: "25px", top: comment.top, height: comment.height }}
    >
      <h5
        ref={ref}
        className={`font-bold mb-2 text-gray-800 ${!show && "line-clamp-3"} `}
      >
        {comment.text}
      </h5>
      {isTooLong && (
        <a className="hover:cursor-pointer" onClick={toggleShow}>
          {show ? "show less" : "show more"}
        </a>
      )}
    </div>
  );
}

export default Comment;

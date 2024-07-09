import React from "react";
import useToggle from "../hooks/useToggle";

interface Props {
  comment: string;
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
    <div className="bg-white p-6 rounded-lg shadow-lg mb-3 ease-in-out duration-300">
      <h5
        ref={ref}
        className={`font-bold mb-2 text-gray-800 ${!show && "line-clamp-4"} `}
      >
        {comment}
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

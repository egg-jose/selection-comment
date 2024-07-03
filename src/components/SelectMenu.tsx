import useSelectionChange from "../hooks/useSelectionChange";
import { MessageCirclePlus } from "lucide-react";

interface Props {
  handleAddComment: (comment: string) => void;
}

function SelectMenu({ handleAddComment }: Props) {
  const width = 100;
  const height = 30;
  const [selection, position] = useSelectionChange(width, height);

  return (
    <div>
      {selection && position && (
        <p
          className={`absolute -top-3 left-0 w-[${width}px] h-[${height}px] bg-black text-white rounded m-0 after:absolute after:top-full after:left-1/2 after:-translate-x-2 after:h-0 after:w-0 after:border-x-[6px] after:border-x-transparent after:border-b-[8px] after:border-b-black after:rotate-180`}
          style={{
            transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          }}
        >
          <button
            className="flex w-full h-full justify-between items-center px-2 bg-transparent"
            onClick={() => handleAddComment(selection)}
          >
            <span className="text-xs">Comment</span>
            <MessageCirclePlus className="w-5 h-5" />
          </button>
        </p>
      )}
    </div>
  );
}

export default SelectMenu;
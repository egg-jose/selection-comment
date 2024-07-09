import React from "react";
import Article from "./components/Article";
import CommentsSection from "./components/CommentsSection";
import SelectMenu from "./components/SelectMenu";
import useComments from "./hooks/useComments";

function App() {
  const [comments, handleAddComment, handleModifyComment] = useComments();

  const articleRef = React.useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="flex flex-row p-8">
        <Article ref={articleRef}>
          <SelectMenu
            handleAddComment={handleAddComment}
            elementRef={articleRef}
          />
        </Article>
        <CommentsSection comments={comments} handleModifyComment={handleModifyComment}/>
      </div>
    </>
  );
}

export default App;

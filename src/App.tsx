import React from "react";
import Article from "./components/Article";
import CommentsSection from "./components/CommentsSection";
import SelectMenu from "./components/SelectMenu";

function App() {
  const [comments, setComments] = React.useState<string[]>([]);

  const articleRef = React.useRef<HTMLDivElement>(null);

  const handleAddComment = (comment: string) => {
    setComments((prevComments) => [...prevComments, comment]);
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

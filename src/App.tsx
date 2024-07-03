import React from "react";
import Article from "./components/Article";
import CommentsSection from "./components/CommentsSection";
import SelectMenu from "./components/SelectMenu";

function App() {
  const [comments, setComments] = React.useState<string[]>([]);

  const handleAddComment = (comment: string) => {
    setComments((prevComments) => [...prevComments, comment]);
  };
  return (
    <>
      <div
        className="flex flex-row p-8"
      >
        <Article>
          <SelectMenu handleAddComment={handleAddComment} />
        </Article>
        <CommentsSection comments={comments} />
      </div>
    </>
  );
}

export default App;

import { useEffect, useState } from "react";

function SingleComment({data}) {
    const [commentText,setCommentText] = useState('');
    const {text,id} = data;
    useEffect(() => {
        if (text) {
            setCommentText(text);
        }
    }, [text]);
  const handleInput = (e) => {
      setCommentText(e.target.value);
  }
  return (
    <form className="comments-item">
      <div className="comments-item-delete">❌</div>
      <input type="text"value={commentText} onChange={handleInput}/>
      <input type="submit" hidden />
    </form>
  );
}
export default SingleComment;

import CommentCard from "../../components/CommentCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getItem } from "../../calls/haker-news";
import { setComments } from "../../store/ducks/comments";

const Comments = () => {
  const comments = useSelector((store) => store.comments);
  const dispatch = useDispatch();

  const queryId = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get("id");
    return id;
  };

  useEffect(() => {
    getItem(queryId(), (res) => dispatch(setComments(res)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {comments?.kids?.map((e) => {
        return <CommentCard key={e} item={e} />;
      })}
    </>
  );
};

export default Comments;

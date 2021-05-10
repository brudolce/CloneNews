import React, { useEffect, useState } from "react";
import "./CommentCard.css";
import moment from "moment";
import { getItem } from "../../calls/haker-news";

const timeCalc = (time) => {
  let a = new Date(time * 1000);
  return moment(a).fromNow();
};

const CommentCard = ({ item }) => {
  const [comment, setComment] = useState({});

  //cleanup
  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {
    getItem(item, setComment);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="CommentCard">
      <div className="NewFontComment">{`${comment?.by} ${timeCalc(
        comment?.time
      )}`}</div>
      <div
        className="CommentContent"
        dangerouslySetInnerHTML={{ __html: comment?.text }}
      ></div>
      {comment.kids &&
        comment?.kids?.map((e, i) => (
          <div style={{ marginLeft: "20px" }} key={e}>
            <CommentCard item={e} />
          </div>
        ))}
    </div>
  );
};

export default CommentCard;

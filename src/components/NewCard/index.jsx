import React from "react";
import "./NewCard.css";
import { useHistory } from "react-router-dom";
import { getItems } from "../../calls/haker-news";
import { useDispatch } from "react-redux";
import { setComments } from "../../store/ducks/comments";
import moment from "moment";

const timeCalc = (time) => {
  let a = new Date(time * 1000);
  return moment(a).fromNow();
};

const NewCard = ({ item, i }) => {
  const dispatch = useDispatch();
  let history = useHistory();

  const infoLinkClick = () => {
    getItems(item.kids, (res) => dispatch(setComments(res)));
    return history.push(`/comments?id=${item.id}`);
  };

  return (
    <div className="NewCard">
      <div className="NewCardNumber">{i}</div>
      <div className="NewCardContent">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            className="NewHeader"
            onClick={() => (window.location = item.url)}
          >
            {item.title}
          </div>
        </div>
        <div className="NewFont" onClick={infoLinkClick}>{`${
          item.score
        } points by ${item.by} ${timeCalc(item.time)} | ${
          item.descendants
        } comments`}</div>
      </div>
    </div>
  );
};

export default NewCard;

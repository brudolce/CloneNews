import NewCard from "../../components/NewCard";
import { getNew, getItems } from "../../calls/haker-news";
import { useEffect } from "react";
import { setList, setNews } from "../../store/ducks/newsList";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const newsList = useSelector((store) => store.newsList);

  useEffect(() => {
    getNew((res) => dispatch(setList(res)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const list = newsList.list.slice(0, 30);
    getItems(list, (res) => dispatch(setNews(res)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newsList.list]);

  return (
    <div>
      {newsList?.news?.map((e, i) => (
        <NewCard key={i} item={e} i={i + 1} />
      ))}
    </div>
  );
};

export default Home;

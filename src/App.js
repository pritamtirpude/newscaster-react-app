import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Navigation, Categories, NewsList } from "./components";

import GlobalStyles from "./GloblaStyles";
import { newsHeadLinesAsync, fetchNewsLoading } from "./store/news/news.action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNewsLoading());
    dispatch(newsHeadLinesAsync);
  }, [dispatch]);

  return (
    <div>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<NewsList />} />
          <Route path="categories/*" element={<Categories />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

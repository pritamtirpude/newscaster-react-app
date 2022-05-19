import { Routes, Route } from "react-router-dom";
import { NewsList } from "../index";

const Categories = () => {
  return (
    <Routes>
      <Route path=":category" element={<NewsList />} />
    </Routes>
  );
};

export default Categories;

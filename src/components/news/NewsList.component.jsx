import { NewsContainer } from "./newslist.styles";
import { useSelector } from "react-redux";
import { selectNews, selectIsLoading } from "../../store/news/news.selector";
import { NewsCard } from "../index";
import { css } from "styled-components";
import { ScaleLoader } from "react-spinners";
import { AnimatePresence } from "framer-motion";

const loaderCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5rem auto;
  border-color: #16003b;
`;

const NewsList = () => {
  const news = useSelector(selectNews);
  const isLoading = useSelector(selectIsLoading);

  if (isLoading)
    return (
      <ScaleLoader
        color="#16003B"
        loading={isLoading}
        css={loaderCss}
        size={150}
        width={4}
        height={35}
        radius={2}
      />
    );

  return (
    <div>
      {!isLoading && (
        <NewsContainer layout>
          <AnimatePresence>
            {news.map((article) => (
              <NewsCard article={article} key={article._id} />
            ))}
          </AnimatePresence>
        </NewsContainer>
      )}
    </div>
  );
};

export default NewsList;

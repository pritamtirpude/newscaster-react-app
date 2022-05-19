import {
  CardContainer,
  Card,
  DetailContainer,
  Overlay,
  Detail,
} from "./newscard.styles";
import { useState } from "react";
import { motion } from "framer-motion";
import moment from "moment";

const NewsCard = ({ article }) => {
  const [isOpen, setIsOpen] = useState(false);

  const cardHandler = () => {
    document.body.style.overflow = "hidden";
    setIsOpen(true);
  };

  const onCloseHandler = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <CardContainer layout>
      <Card onClick={cardHandler} layout>
        <motion.img
          src={article.media || "https://fakeimg.pl/640x360/"}
          alt={article.title}
          loading="lazy"
          layoutId={`${article.media} ${article._id}`}
        />
        <div className="card-info">
          <motion.h3 layoutId={`${article.title} ${article._id}`}>
            {article.title}
          </motion.h3>
        </div>
      </Card>
      {isOpen && (
        <Overlay className="overlay">
          <DetailContainer layoutId={article._id}>
            <motion.img
              src={article.media || "https://fakeimg.pl/640x360/"}
              alt={article.title}
              loading="lazy"
              layoutId={`${article.media} ${article._id}`}
            />
            <Detail>
              <motion.h2 layoutId={`${article.title} ${article._id}`}>
                {article.title}
              </motion.h2>
              <span className="date">
                <strong>Published Date:</strong>&nbsp;
                {moment(`${article.published_date}`).format(
                  "MMMM Do YYYY, h:mm:ss a"
                )}
              </span>
              <p>{article.summary}</p>
              <span className="read-more">
                <strong>Read more here:</strong>&nbsp;
                <a href={article.link} target="_blank" rel="noreferrer">
                  {article.clean_url}
                </a>
              </span>
            </Detail>
            <div className="close-btn" onClick={onCloseHandler}>
              X
            </div>
          </DetailContainer>
        </Overlay>
      )}
    </CardContainer>
  );
};

export default NewsCard;

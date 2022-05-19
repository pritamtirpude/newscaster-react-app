import {
  HeaderContainer,
  NavContainer,
  NavLinks,
  StyledLink,
  Logo,
  Line,
} from "./navigation.styles";
import { Outlet, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import TVLogo from "../../assets/tv.png";
import { FaBars, FaWindowClose } from "react-icons/fa";

import {
  newsPoliticsAsync,
  fetchNewsLoading,
  newsBusinessAsync,
  newsEconomicsAsync,
  newsFinanceAsync,
  newsEntertainmentAsync,
  newsMusicAsync,
  newsScienceAsync,
  newsGamingAsync,
  newsTravelAsync,
  newsTechAsync,
  newsSportAsync,
  newsBeautyAsync,
  newsWorldAsync,
} from "../../store/news/news.action";

const Navigation = () => {
  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const [mobileView, setMobileView] = useState(false);

  const handlePoliticsDispatch = () => {
    dispatch(fetchNewsLoading());
    dispatch(newsPoliticsAsync);
  };

  const handleBusinessDispatch = () => {
    dispatch(fetchNewsLoading());
    dispatch(newsBusinessAsync);
  };

  const handleEconomicsDispatch = () => {
    dispatch(fetchNewsLoading());
    dispatch(newsEconomicsAsync);
  };

  const handleFinanceDispatch = () => {
    dispatch(fetchNewsLoading());
    dispatch(newsFinanceAsync);
  };

  const handleEntertainmentDispatch = () => {
    dispatch(fetchNewsLoading());
    dispatch(newsEntertainmentAsync);
  };

  const handleMusicDispatch = () => {
    dispatch(fetchNewsLoading());
    dispatch(newsMusicAsync);
  };

  const handleScienceDispatch = () => {
    dispatch(fetchNewsLoading());
    dispatch(newsScienceAsync);
  };

  const handleGamingDispatch = () => {
    dispatch(fetchNewsLoading());
    dispatch(newsGamingAsync);
  };

  const handleTravelDispatch = () => {
    dispatch(fetchNewsLoading());
    dispatch(newsTravelAsync);
  };

  const handleTechDispatch = () => {
    dispatch(fetchNewsLoading());
    dispatch(newsTechAsync);
  };

  const handleSportDispatch = () => {
    dispatch(fetchNewsLoading());
    dispatch(newsSportAsync);
  };

  const handleBeautyDispatch = () => {
    dispatch(fetchNewsLoading());
    dispatch(newsBeautyAsync);
  };

  const handleWorldDispatch = () => {
    dispatch(fetchNewsLoading());
    dispatch(newsWorldAsync);
  };
  return (
    <HeaderContainer>
      <NavContainer>
        <Logo>
          <img src={TVLogo} alt="logo" />
          <h1>NewsCaster</h1>
          <div
            className="mobile-nav"
            onClick={() => setMobileView(!mobileView)}
          >
            {mobileView ? (
              <FaWindowClose size={"2rem"} />
            ) : (
              <FaBars size={"2rem"} />
            )}
          </div>
        </Logo>
        <NavLinks className={mobileView ? "active" : ""}>
          <li>
            <StyledLink
              to="/categories/politics"
              onClick={handlePoliticsDispatch}
              style={{
                color: pathname === "/categories/politics" ? "#3a019c" : "",
              }}
            >
              Politics
            </StyledLink>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{
                width: pathname === "/categories/politics" ? "100%" : "0%",
              }}
            />
          </li>
          <li>
            <StyledLink
              to="/categories/business"
              onClick={handleBusinessDispatch}
              style={{
                color: pathname === "/categories/business" ? "#3a019c" : "",
              }}
            >
              Business
            </StyledLink>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{
                width: pathname === "/categories/business" ? "100%" : "0%",
              }}
            />
          </li>
          <li>
            <StyledLink
              to="/categories/economics"
              onClick={handleEconomicsDispatch}
              style={{
                color: pathname === "/categories/economics" ? "#3a019c" : "",
              }}
            >
              Economics
            </StyledLink>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{
                width: pathname === "/categories/economics" ? "100%" : "0%",
              }}
            />
          </li>
          <li>
            <StyledLink
              to="/categories/finance"
              onClick={handleFinanceDispatch}
              style={{
                color: pathname === "/categories/finance" ? "#3a019c" : "",
              }}
            >
              Finance
            </StyledLink>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{
                width: pathname === "/categories/finance" ? "100%" : "0%",
              }}
            />
          </li>
          <li>
            <StyledLink
              to="/categories/entertainment"
              onClick={handleEntertainmentDispatch}
              style={{
                color:
                  pathname === "/categories/entertainment" ? "#3a019c" : "",
              }}
            >
              Entertainment
            </StyledLink>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{
                width: pathname === "/categories/entertainment" ? "100%" : "0%",
              }}
            />
          </li>
          <li>
            <StyledLink
              to="/categories/music"
              onClick={handleMusicDispatch}
              style={{
                color: pathname === "/categories/music" ? "#3a019c" : "",
              }}
            >
              Music
            </StyledLink>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{
                width: pathname === "/categories/music" ? "100%" : "0%",
              }}
            />
          </li>
          <li>
            <StyledLink
              to="/categories/science"
              onClick={handleScienceDispatch}
              style={{
                color: pathname === "/categories/science" ? "#3a019c" : "",
              }}
            >
              Science
            </StyledLink>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{
                width: pathname === "/categories/science" ? "100%" : "0%",
              }}
            />
          </li>
          <li>
            <StyledLink
              to="/categories/gaming"
              onClick={handleGamingDispatch}
              style={{
                color: pathname === "/categories/gaming" ? "#3a019c" : "",
              }}
            >
              Gaming
            </StyledLink>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{
                width: pathname === "/categories/gaming" ? "100%" : "0%",
              }}
            />
          </li>
          <li>
            <StyledLink
              to="/categories/travel"
              onClick={handleTravelDispatch}
              style={{
                color: pathname === "/categories/travel" ? "#3a019c" : "",
              }}
            >
              Travel
            </StyledLink>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{
                width: pathname === "/categories/travel" ? "100%" : "0%",
              }}
            />
          </li>
          <li>
            <StyledLink
              to="/categories/technology"
              onClick={handleTechDispatch}
              style={{
                color: pathname === "/categories/technology" ? "#3a019c" : "",
              }}
            >
              Technology
            </StyledLink>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{
                width: pathname === "/categories/technology" ? "100%" : "0%",
              }}
            />
          </li>
          <li>
            <StyledLink
              to="/categories/sport"
              onClick={handleSportDispatch}
              style={{
                color: pathname === "/categories/sport" ? "#3a019c" : "",
              }}
            >
              Sport
            </StyledLink>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{
                width: pathname === "/categories/sport" ? "100%" : "0%",
              }}
            />
          </li>
          <li>
            <StyledLink
              to="/categories/beauty"
              onClick={handleBeautyDispatch}
              style={{
                color: pathname === "/categories/beauty" ? "#3a019c" : "",
              }}
            >
              Beauty
            </StyledLink>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{
                width: pathname === "/categories/beauty" ? "100%" : "0%",
              }}
            />
          </li>
          <li>
            <StyledLink
              to="/categories/world"
              onClick={handleWorldDispatch}
              style={{
                color: pathname === "/categories/world" ? "#3a019c" : "",
              }}
            >
              World
            </StyledLink>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{
                width: pathname === "/categories/world" ? "100%" : "0%",
              }}
            />
          </li>
        </NavLinks>
      </NavContainer>
      <Outlet />
    </HeaderContainer>
  );
};

export default Navigation;

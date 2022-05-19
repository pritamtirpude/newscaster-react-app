import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const HeaderContainer = styled.header``;

export const StyledLink = styled(Link)`
  color: #16003b;
  transition: all 0.5s ease;
  font-weight: 600;

  &:hover {
    color: #3a019c;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
    padding: 2rem 2rem;
  }

  img {
    width: 6rem;
    height: 6rem;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 3rem;
      height: 3rem;
    }
  }

  h1 {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 5rem;
    letter-spacing: 0.5rem;
    margin-left: 2rem;
    color: #16003b;

    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .mobile-nav {
    display: none;

    @media screen and (max-width: 768px) {
      display: block;
      z-index: 5000;
    }
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  justify-content: center;

  li {
    margin: 1rem 2rem 0rem 0rem;
    position: relative;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 70%;
    min-height: 100vh;
    background-color: white;
    top: 0;
    right: 0;
    transform: translateX(100%);
    transition: all 0.5s ease;
    z-index: 1000;
    padding-left: 2rem;

    &.active {
      transform: translateX(0%);
    }
  }
`;

export const Line = styled(motion.div)`
  height: 0.3rem;
  background: #3bacb6;
  width: 0%;
  position: absolute;
  bottom: -30%;
  left: 0%;
`;

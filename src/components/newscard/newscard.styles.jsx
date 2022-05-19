import styled from "styled-components";
import { motion } from "framer-motion";

export const CardContainer = styled(motion.div)`
  position: relative;
`;

export const Card = styled(motion.div)`
  border-radius: 0.5rem;
  background-color: white;
  overflow: hidden;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  img {
    width: 100%;
    height: 30rem;
    object-fit: cover;
  }

  .card-info {
    padding: 1rem 2rem;
    h3 {
      font-size: 1.3rem;
    }
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  overflow-y: scroll;
  z-index: 5;
`;

export const DetailContainer = styled(motion.div)`
  position: absolute;
  background: white;
  width: 80%;
  height: auto;
  top: 5%;
  left: 10%;
  @media screen and (max-width: 768px) {
    width: 100%;
    left: 0%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .close-btn {
    position: absolute;
    top: 2rem;
    right: 2rem;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    color: black;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
    cursor: pointer;
  }
`;

export const Detail = styled.div`
  padding: 2rem 2rem;

  p {
    line-height: 3rem;
    margin-top: 3rem;
  }

  .date {
    display: inline-block;
    margin-top: 3rem;
  }

  .read-more {
    display: inline-block;
    margin-top: 3rem;
  }
`;

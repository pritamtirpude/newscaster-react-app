import styled from "styled-components";
import { motion } from "framer-motion";

export const NewsContainer = styled(motion.main)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  row-gap: 3rem;
  column-gap: 3rem;
  padding: 5rem 3rem;

  @media screen and (max-width: 768px) {
    padding: 5rem 2rem;
  }
`;

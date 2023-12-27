import { useMediaQuery } from "react-responsive";

export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 639 });
  return isMobile ? children : null;
};

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 639 });
  return isDesktop ? children : null;
};

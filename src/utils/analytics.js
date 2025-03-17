import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize(`${process.env.REACT_APP_google}`); 
};

export const trackPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

import ReactGA from "react-ga";

export const actionButton = (category: Category, action: string) => {
  ReactGA.event({
    category: category,
    action: `${action}`,
  });
};

type Category = "Main button" | "Secondary button" | "Icon button";

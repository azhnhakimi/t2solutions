import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function DynamicTitle() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let pageTitle = "T2Solutions";

    switch (path) {
      case "/":
        pageTitle = "Home - T2Solutions";
        break;
      case "/about":
        pageTitle = "About - T2Solutions";
        break;
      case "/services":
        pageTitle = "Services - T2Solutions";
        break;
      case "/packages":
        pageTitle = "Packages - T2Solutions";
        break;
      case "/contact":
        pageTitle = "Contact - T2Solutions";
        break;
      default:
        pageTitle = "T2Solutions";
        break;
    }

    document.title = pageTitle;
  }, [location]);

  return null;
}

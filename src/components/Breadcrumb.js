import { useLocation } from "react-router";
import { Link } from "react-router-dom";

function Breadcrumb() {
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const location = useLocation();
  let currentLink = "";
  const showHomeLink = location.pathname !== "/";
  const crumbs = (showHomeLink ? [""] : [])
    .concat(location.pathname.split("/").filter((crumb) => crumb !== ""))
    .map((crumb, index, array) => {
      currentLink = array.slice(0, index + 1).join("/");
      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{capitalizeFirstLetter(crumb) || "Home"}</Link>
        </div>
      );
    });

  return (
    <>
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        <div className="breadcrumbs">{crumbs}</div>
      </div>
    </>
  );
}

export default Breadcrumb;

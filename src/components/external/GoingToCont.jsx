import Button from "../button/button"
import { NavLink } from "react-router-dom";
import "./GoingToCont.scss"

export default function GoingToCont({ logo, alt, link }) {
  return (
    <>
      <div className="goingto__subcont">
        <img src={logo} height={127} alt={`${alt} logo`} />
        <div className="goingto__content">
          <div>
            <div className="title">{`Visiting my ${alt}`}</div>
            <div className="body">This link is taking you to the following website</div>
            <div className="goingto__link">{link}</div>
          </div>
          <div className="goingto__nav">
            <NavLink to={"/about"}><div>Go Back</div></NavLink>
            <a href={link} target="_blank"><Button text={"Visit Site"} /></a>
          </div>
        </div>
      </div>
    </>
  );
}

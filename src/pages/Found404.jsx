import Wrapper from "../components/wrapper/medium/Wrapper";
import "./Found404.scss"
import { NavLink } from "react-router-dom";

import Button from "../components/button/button";

export default function NotFound404() {
  return (
    <>
      <Wrapper>
        <div className="found404__cont">
          <div className="header">404 Not Found</div>
          <div className="body">
            <div>{`Oops! Looks like you've ventured into void! This page seems to be a bit out of this world.`}</div>
            <div>{`How about navigating back to familiar grounds?`}</div>
          </div>
          <NavLink to={"/"}><Button text={"Let's go back on track!"} /></NavLink>
        </div>
      </Wrapper>
    </>
  );
}

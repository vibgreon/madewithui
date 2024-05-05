import "./About.scss";
import { NavLink } from "react-router-dom";

import Wrapper from "../../components/wrapper/medium/Wrapper";
import profilePic from "../../assets/pic/profilePic.png";

import SocialLinks from "./SocialLinks.json";
var data = SocialLinks;

export default function About() {
  return (
    <>
      <Wrapper>
        <div className="about__cont">
          <div>
            <div className="header">My thoughts</div>
            <div className="body">
              <div>UI/UX is all about making digital stuff look good and easy to use.</div>
              <div>I want to show how to set up a design system that grows with your product and will be compatible with different system environments.</div>
            </div>
          </div>
          <div className="divider"></div>
          <div>
            <div className="about__social_profilepic">
              <img
                src={profilePic}
                alt="my profile picture"
                width={100}
                height={100}
              />
              <div>
                <div className="title">
                  Meet your fellow designer/developer{" "}
                </div>
                <div className="body">Hi, I’m Vivek Venkatesh</div>
                <div className="about__social__icons">
                  {data.map((item) => {
                    return (
                      <NavLink key={item.id} to={`/about/external-link-${item.alt}`} >
                        <img src={item.logo} alt={item.alt} />
                      </NavLink>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="body">
                  <div>{`I'm passionate about design, specializing in UI/UX, and also work as a frontend developer. Currently, I'm focused on expanding my skills and expertise.`}</div>
                  <div>{`2024's goal is to create and release a UI/UX learning path primarily focused on design systems.`}</div>
                  <div>{`Additionally, for content contrast, I will relate design with development, exploring their similarities and how to create an exact system for a production framework.`}</div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

import Wrapper from "../../components/wrapper/medium/Wrapper";
import "./Contact.scss";
import { NavLink } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <Wrapper>
        <div className="contact__cont">
          <div className="header">Curious about..</div>
          <div className="body contact__body__cont">
          <div>seeking mentorship, collaboration, hiring for freelance or full-time positions, meeting in person, just chatting, or something else?</div>
          <div>Please reach out to me via my social media channels, available on the <NavLink to={"/about"}><b>About</b></NavLink> page for now. Thanks.</div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

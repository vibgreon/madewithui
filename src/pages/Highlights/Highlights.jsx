import "./Highlights.scss";
import { NavLink } from "react-router-dom";
import Wrapper from "../../components/wrapper/medium/Wrapper";
import Tag from "../../components/button/tag.jsx";

import ContentCard from "../../components/highlights/ContendCard/ContentCard";
import HighlightData from "./HIghlightData.json";
var data = HighlightData;

import FigmaAndCodepen from "../../components/highlights/HighlightChildrens/FigmaAndCodepen/FigmaAndCodepen";
import BuidLaunchScale from "../../components/highlights/HighlightChildrens/BuildLaunchScale/BuildLaunchScale.jsx";


export default function Highlights() {
  return (
    <>
      <Wrapper>
        <div className="highlights__cont">
          <div className="highlights__header">
            <div className="header">Why this exist on the internet?</div>
            <div className="body">
              {`Designers often perceive development as difficult, but in `}<b>reality</b>{`,
              it's merely a matter of perception. I made this to show you that
              if you `}<b>love</b>{` it enough, you can do it too.`}
            </div>
            <div className="highlights__header__tag"><Tag text={"✨ highlights"} color={"#242424"} /></div>
          </div>
          <div className="highlights__news">
            <div>
              (Coming soon) Guide : From Design System to Production for
              Startups
            </div>
          </div>
          <div className="highlights__content__cont">
            <ContentCard
              key={data[0].id}
              title={data[0].title}
              desc={data[0].desc}
              tag={data[0].tag}
              color={data[0].color}
            >
              <FigmaAndCodepen />
            </ContentCard>
            <div className="divider"></div>
            <ContentCard
              key={data[1].id}
              title={data[1].title}
              desc={data[1].desc}
              tag={data[1].tag}
              color={data[1].color}
            >
              <BuidLaunchScale />
            </ContentCard>
          </div>
          <div className="body highlights__updates">Currently working on <NavLink to={"/blogs"}><b>Blogs</b></NavLink>. Lookout for updates.</div>
        </div>
      </Wrapper>
    </>
  );
}

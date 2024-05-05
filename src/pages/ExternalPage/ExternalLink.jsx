import Wrapper from "../../components/wrapper/medium/Wrapper";
import GoingToCont from "../../components/external/GoingToCont";

import "./ExternalLink.scss"

export default function ExternalLink({ logo, alt, link }) {
  return (
    <>
      <Wrapper>
        <div className="externallink__cont">
            <GoingToCont logo={logo} alt={alt} link={link} />
        </div>
      </Wrapper>
    </>
  );
}

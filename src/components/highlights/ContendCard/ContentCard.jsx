import "./ContentCard.scss"
import Tag from "../../button/tag";

export default function ContentCard({
  title,
  desc,
  tag,
  color,
  children,
  link,
}) {
  return (
    <>
      <div className="cc__cont">
        <div className="cc_info">
          <div className="title">{title}</div>
          <div className="body">{desc}</div>
          <Tag text={tag} color={color} />
        </div>
        <div>{children}</div>
        {/* <a href={link}> */}
          <div className="link">{`(?) blog link will come here`}</div>
        {/* </a> */}
      </div>
    </>
  );
}

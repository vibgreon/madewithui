import "./tag.scss"

export default function Tag({ text , color }) {
    return(
        <>
            <div className="tag__cont" style={{ backgroundColor: `${color}` }}>{text}</div>
        </>
    )
}
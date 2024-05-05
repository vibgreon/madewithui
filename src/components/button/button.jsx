import "./button.scss"

export default function Button({ text, icon, border = null }) {
    return(
        <>
        <div className={`buttonContainer ${border}`}>{text}</div>
        </>
    )
}
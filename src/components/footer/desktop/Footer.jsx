import "./Footer.scss"
import Button from "../../button/button"
import { NavLink } from "react-router-dom" 

import Logo from "../../logo/Logo"

export default function Footer() {
    return(
        <>
        <div className="footer__cont">
            <div className="footer__subcont">
                <div className="footer__info__cont">
                    <NavLink to={"/"}><Logo color="white" /></NavLink>
                    <div>Get an update once a month. Blend of information about design and coding practices</div>
                    <div>
                        <input  type="text" placeholder="out of service right now" disabled />
                        <Button text={"Subscribe"} border={"border"} />
                    </div>
                </div>
                <div className="footer__items__cont">
                    <div className="footer__item">
                        <div className="footer__item__title">Product</div>
                        <div className="footer__item__subcont">
                            <div className="disabled">Resources</div>
                            <div className="disabled">{`What's new`}</div>
                        </div>
                    </div>
                    <div className="footer__item">
                        <div className="footer__item__title">Company</div>
                        <div className="footer__item__subcont">
                            <div><NavLink to={"/about"}>About</NavLink></div>
                            <div><NavLink to={"/contact"}>Contact</NavLink></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom__cont">© 2024 madewithml</div>
        </div>
        </>
    )
}
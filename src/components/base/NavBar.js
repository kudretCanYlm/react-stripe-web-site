import LinkBtn from "../common/LinkBtn";
import BlackBtn from "../common/BlackBtn";
import icon from "../../images/logo.svg"

export default function NavBar() {

    return (
        <div className="navbar row-flex">
            <div className="left">
                <img src={icon} className="img" />
            </div>
            <div className="center row-flex">
                <LinkBtn to={"/products"}>Products</LinkBtn>
                <LinkBtn to={"/developers"}>Developers</LinkBtn>
                <LinkBtn to={"/company"}>Company</LinkBtn>
            </div>
            <div className="right">
                <BlackBtn text={"Sign in"} />
            </div>
        </div>
    )

}
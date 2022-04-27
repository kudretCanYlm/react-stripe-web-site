import "../styles/style.css"
import BlackBtn from "../components/common/BlackBtn"
import NavBar from "../components/base/NavBar"
import ThickText from "../components/common/ThickText"
import ThinText from "../components/common/ThinText"
import phoneImg from "../images/phone.svg"

export default function MainPage() {

    return (
        <div className="main-page column-flex">
            <NavBar />
            <div className="center row-flex">
                <div className="left column-flex">
                    <ThickText>
                        Payments <br />
                        infrastructure <br />
                        for the internet
                    </ThickText>
                    <ThinText>
                        Millions of companies of all sizes -from startups to Fortune 500s
                        -use Stripe sowftware and API's to accept payments,send payouts,and manage their
                        businesses
                    </ThinText>
                    <BlackBtn text="Start now" />
                </div>
                <div className="right">
                    <img alt="img" src={phoneImg} />
                </div>
            </div>
        </div>
    )
}
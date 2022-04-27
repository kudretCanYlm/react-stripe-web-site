import { useNavigate } from "react-router-dom"

export default function ErrorPage() {

    let navigate=useNavigate();

    

    return (
        <div class="notFound">
            <div class="img">
                <img src="https://assets.codepen.io/5647096/backToTheHomepage.png" alt="Back to the Homepage" />
                <img src="https://assets.codepen.io/5647096/Delorean.png" alt="El Delorean, El Doc y Marti McFly" />
            </div>
            <div class="text">
                <h1>404</h1>
                <h2>PAGE NOT FOUND</h2>
                <h3>BACK TO HOME?</h3>
                <button onClick={()=>navigate("/")} class="btn error-btn">
                    YES
                </button>

            </div>
        </div>
    )
}
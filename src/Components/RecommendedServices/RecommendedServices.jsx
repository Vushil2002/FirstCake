import CardRecServices from "../Common/CardRecServices/CardRecServices";
import image1 from "../../Assets/images/image1.png"
import image2 from "../../Assets/images/image2.png"

import "./RecommendedServices.css"

const RecommendedServices = () => {
    return(
        <section className="cardsSection">
            <div className="RecSecDesc">
            <h2>Explore recommended services for you</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <a href="./">Click here to know more.</a>
            </div>
            <div className="RecSecCards">
            <CardRecServices title={"Questions?"} desc={"Learn about our services through frequently asked questions."} bgImg={image1}/>
            <CardRecServices title={"Stay up to date"} desc={"Learn about our product updates"} bgImg={image2}/>
            </div>
        </section>
    )
}

export default RecommendedServices;
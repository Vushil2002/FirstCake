import "./CardRecServices.css";
import VioletBtn from "../Button/VioletBtn";

const CardRecServices = (props) => {
    return(
        <div className="RecServicesCards" style={{backgroundImage:`url(${props.bgImg})`}}>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
            <VioletBtn content={"View FAQs"}/>
        </div>
    )
}

export default CardRecServices;
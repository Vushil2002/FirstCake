import DiscoverAvailableServices from "../DiscoverAvailableServices/DiscoverAvailableServices";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import RecommendedServices from "../RecommendedServices/RecommendedServices";

const HomePage = () => {
    return(
        <>
            <Header styles={{margin:"3rem 0"}}/>
            <DiscoverAvailableServices/>
            <RecommendedServices/>
            <Footer/>
        </>
    )
}

export default HomePage;
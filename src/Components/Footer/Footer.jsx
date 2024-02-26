import './Footer.css'
import MSlogo from '../../Assets/images/MSlogo.svg'
import globe from '../../Assets/images/globe.svg'

const Footer = () => {
    return(
        <section className='FooterSection'>
            <div className='FooterPagesSection'>
                <ul>
                    <li><b>Services Hub</b></li>
                    <li>Home</li>
                    <li>Getting Started</li>
                    <li>Release Notes</li>
                    <li>Give Feedback</li>
                    <li>Documentation</li>
                </ul>
                <ul>
                    <li><b>Contract</b></li>
                    <li>Contract Details</li>
                    <li>Manage Access</li>
                    <li>Shared Files</li>
                    <li></li>
                </ul>
                <ul>
                    <li><b>Support</b></li>
                    <li>Contact Support </li>
                    <li>Customer Pulse</li>
                    <li></li>
                    <li></li>
                </ul>
                <ul>
                    <li><b>Services</b></li>
                    <li>Catalog </li>
                    <li>Plans</li>
                    <li></li>
                    <li></li>
                </ul>
                <ul>
                    <li><b>Health</b></li>
                    <li>Critical Alerts</li>
                    <li>Product Updates</li>
                    <li>Office 365 Roadmap</li>
                    <li>Assessments</li>
                </ul>
                <ul>
                    <li><b>Learning</b></li>
                    <li>Learn-on-demand</li>
                    <li>Workshops</li>
                </ul>
            </div>
            <div className='FooterLinkSection'>
                <p><img src={globe} alt='globe'/>Current Culture: United States - English</p>
                <div className='FooterLinks'>
                    <p>Contact Us</p>
                    <p>Privacy and Cookies</p>
                    <p>Trademarks</p>
                    <p>About our ads</p>
                    <p><img src={MSlogo} alt='logo'/>Microsoft 2022</p>
                </div>
            </div>
        </section>
    )
}
export default Footer;
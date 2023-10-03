const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam vel tincidunt bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.</p>
                </div>
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>123 Main Street<br />Anytown, USA 12345<br />Phone: (123) 456-7890<br />Email: info@example.com</p>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <ul className="social-media">
                        <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>2021 Example Company. All rights reserved.</p>
            </div>
        </footer>
        );
}

export default Footer;
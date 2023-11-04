import s from './Footer.module.css'
import React from 'react';

const Footer = (): JSX.Element => {
    return (
        <footer className={s.footer}>
            <div className={s.footer_container}>
                <div className={s.footer_section}>
                    <h1>About Us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam vel tincidunt bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel sapien.</p>
                </div>
                <div className={s.footer_section}>
                    <h3>Contact Us</h3>
                    <p>123 Main Street<br />Anytown, USA 12345<br />Phone: (123) 456-7890<br />Email: info@example.com</p>
                </div>
                <div className={s.footer_section}>
                    <h3>Follow Us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod</p>
                </div>
            </div>
            <div className={s.footer_section}>
                <p>2021 Example Company. All rights reserved.</p>
            </div>
        </footer>
        );
}

export default Footer;
import React from "react";

const Footer = ({ className }) => {
    return (
        <footer className="bottom-0 left-0 right-0 z-10 bg-[#00000071] bg-opacity-90 h-64 flex items-center px-6">
            <div className="footer__container flex justify-end w-full">
                <div className="footer__container__left mr-6">
                    <ul className="footer__container__right__list">
                        <li className="footer__container__right__list__item text-white">Donate</li>
                        <li className="footer__container__right__list__item text-white">AniList.co</li>
                        <li className="footer__container__right__list__item text-white">AniChart.net</li>
                    </ul>
                </div>
                <div className="footer__container__left mr-6">
                    <ul className="footer__container__right__list">
                        <li className="footer__container__right__list__item text-white">Apps</li>
                        <li className="footer__container__right__list__item text-white">Site Stats</li>
                        <li className="footer__container__right__list__item text-white">Recommendations</li>
                        <li className="footer__container__right__list__item text-white">API</li>
                    </ul>
                </div>
                <div className="footer__container__left mr-6">
                    <ul className="footer__container__right__list">
                        <li className="footer__container__right__list__item text-white">Discord</li>
                        <li className="footer__container__right__list__item text-white">Twitter</li>
                        <li className="footer__container__right__list__item text-white">Facebook</li>
                        <li className="footer__container__right__list__item text-white">Github</li>
                    </ul>
                </div>

                <div className="footer__container__right mr-6"> 
                    <ul className="footer__container__right__list">
                        <li className="footer__container__right__list__item text-white">Add Data</li>
                        <li className="footer__container__right__list__item text-white">Moderators</li>
                        <li className="footer__container__right__list__item text-white">Contact</li>
                        <li className="footer__container__right__list__item text-white">Terms & Privacy</li>
                        <li className="footer__container__right__list__item text-white">Site Map</li>
                    </ul>
                </div>      
            </div>    
        </footer>
    );
};

export default Footer;
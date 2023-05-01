import React from "react";
import "./styles/Header.scss";

const links = [
    {
        class: "home_link",
        url: "/",
        content: "Home"
    },
    {
        class: "about_link",
        url: "/About",
        content: "My Portfolio"
    },
    {
        class: "contact_link",
        url: "/Contact",
        content: "Contact"
    }
];
const Header = () => {
    return (

        <div className="header">
            <div className="header_logo">
                <h1 className="name" font-style="Dancing Script"> Ayushi Soumya </h1>
                <div className="links">

                    {
                        links.map((item) => {
                            return (
                                <a href={item.url} className={item.class}>
                                    {item.content}
                                </a>
                            )

                        })
                    }
                </div>
            </div>

        </div>
    );
}
export default Header;
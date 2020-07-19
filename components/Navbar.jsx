import React from "react"
import Cool from "../public/images/cool.svg"
import Email from "../public/images/email.svg"

const links = [
    { label: "Home", url: "/" },
    { label: "Contact", url: "/contact" },
]

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__brand">
                <Cool />
                <span>Saxal.me</span>
            </div>

            <div className="navbar__links-container">
                {
                    links.map((link, index) => <a href={link.url} key={index} className="navbar__link">{link.label}</a>
                )}
                <span className="email-icon"><Email/></span>
            </div>
        </div>
    )
}
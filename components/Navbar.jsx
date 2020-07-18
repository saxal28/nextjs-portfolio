import React from "react"
import Cool from "../public/images/cool.svg"

const links = [
    { label: "Home", url: "/" },
    { label: "Contact", url: "/" },
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
                    links.map((link, index) => <span key={index} className="navbar__link">{link.label}</span>
                )}
            </div>
        </div>
    )
}
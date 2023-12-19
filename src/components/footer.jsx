import React from "react";

function Footer(){
    return <div className="Footer">
        <div className="container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><a href="/Anime" className="nav-link px-2 text-body-secondary">Home</a></li>
                <li className="nav-item"><a href="#top" className="nav-link px-2 text-body-secondary">About</a></li>
                </ul>
                <p className="text-center text-body-secondary">© 2023 Me, Inc</p>
            </footer>
        </div>
    </div>
};

export default Footer;
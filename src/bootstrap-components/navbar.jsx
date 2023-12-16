import React from "react";

function Navbar(){
    return <div className="Navbar">
        <div class="container">
          <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a href="#top" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
              <span class="fs-4">Anime Hub</span>
            </a>

            <ul class="nav nav-pills">
              <li class="nav-item"><a href="#top" class="nav-link" style={{color: 'black'}}>Anime</a></li>
              <li class="nav-item"><a href="#top" class="nav-link" style={{color: 'black'}}>About</a></li>
            </ul>
          </header>
        </div>
    </div>
};

export default Navbar;
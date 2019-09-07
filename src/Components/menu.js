import React, { Component } from 'react';
import { FaSistrix } from 'react-icons/fa';

class Menu extends Component {
    render() {
        return (
            <div>
            
                <div class="collapse" id="navbarToggleExternalContent">
                    <div class="bg-dark p-4">
                    <h5 class="text-white h4">Collapsed content</h5>
                    <span class="text-muted">Toggleable via the navbar brand.</span>
                    </div>
                </div>
                <nav className="navbar nav-back row"> 
                    <div className="col-sm-1 ">
                        <button class="navbar-toggler fa fa-align-justify " type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="col-lg-1 texto-nav ">
                        MY TASKS
                    </div>
                    <div className="col-lg-1 texto-nav ">
                        INBOX
                    </div>
                    <div className="col-lg-1">
                        <imput type="search" className="form-control mas-button col-lg-12">{<h2>+</h2>}</imput> 
                    </div>
                    <div className="col-lg-4 ">
                        <imput type="search" className="form-control imput-search col-lg-4 col-lg-12" placeholder="{<FaSistrix />}"> </imput>
                    </div>
                    <div className="col-lg-4 "> 
                        
                    </div>
                </nav>
            </div>

        )

    }
}

export default Menu;
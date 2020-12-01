import "../css/filtering.css";
import "../css/hamburger.css"



import Search from "./detail/Search";
import Selected from "./detail/Selected"


import React from "react";

export default class Filtering extends React.Component {
    constructor(props) {
        super(props);
        this.checked = this.checked.bind(this);
    }

    checked() {
        let elem = document.getElementById("menu-hidden");
        elem.classList.toggle("show");

        let elem2 = document.querySelector(".menu");
        elem2.classList.toggle("active2")

        let elem3 = document.querySelector('.menu-hamburger');
        elem3.classList.toggle("active3")

    }

    render() {

        return (
            <div className="filtering-buz">
                <div className="filtering">
                    <div className="filtering-elem">
                        <div className="menu">
                            <div className='menu-hamburger' onClick={this.checked}>
                                <div className="hamburger"></div>
                            </div>
                            <div className="menu-text">Меню</div>
                        </div>
                        <div className="menu-hidden"></div>
                        <Search />
                    </div>
                    <div className="menu-hidden" id="menu-hidden">
                        <Selected />
                    </div>
                </div>
            </div>
        )
    }
}
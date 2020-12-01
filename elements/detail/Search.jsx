import "../../css/search.css";

import React from "react";

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {search: ""}
        // this.find = this.find.bind(this);
    }

    componentDidUpdate(){
        if(this.state.search.length >=  2) {
            document.querySelector(".search-button").disabled = false;
            document.querySelector(".search-button").style.cursor = "pointer";
            document.querySelector(".search-button").style.borderColor = "#606a76";

        } else {
            document.querySelector(".search-button").disabled = true;
            document.querySelector(".search-button").style.cursor = "";
            document.querySelector(".search-button").style.borderColor = "";
       }
    }

    render() {

        return (
            <form action="" className="form-search">
                <div className="search">
                    <input type="text" className="search-muv" placeholder="Поиск по сайту" onChange={(e)=> this.setState({search: e.target.value})}/>
                    <select name="" id="" className="search-select">
                        <option value="">Все категории</option>
                        <option value="">Select 1</option>
                        <option value="">Select 2</option>
                        <option value="">Select 3</option>
                        <option value="">Select 4</option>
                    </select>
                    <button className="search-button" disabled>Поиск</button>
                </div>
            </form>
        )
    }
}
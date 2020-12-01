import '../css/panel.css'

import React from "react";
import ReactDOM from 'react-dom'
import FormEnter from "./detail/FormEnter"
import { NavLink } from 'react-router-dom';


const checkTell = document.getElementById("check")

class Enter extends React.Component {
    constructor(props) {
        super(props);
        this.elem = document.createElement("div");
    }

    componentDidMount() {
        checkTell.appendChild(this.elem);
    }
    componentWillUnmount() {
        checkTell.removeChild(this.elem);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.elem
        )
    }
}

class Panel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showTell: false }
        this.see = this.see.bind(this);
        this.hide = this.hide.bind(this);

    }

    see() {
        document.querySelector(".panel-button-elem").classList.add('show');
        this.setState({ showTell: true });
    }
    hide() {
        document.querySelector(".panel-button-elem").classList.remove('show');
        this.setState({ showTell: false })
    }

    render() {

        const showForm = this.state.showTell ? (
            <Enter>
                <div className="EnterShow">
                    <div className="EnterClose-bloc" onClick={this.hide}>
                        <div className="EnterClose"></div>
                    </div>
                    <FormEnter />
                </div>
            </Enter>
        ) : null;

        return (
            <div className='panel'>
                <nav className='panel-buz'>
                    <ul className="panel-elem">
                        <li><a className="panel-elem-head" href="">Главная</a></li>
                        <li><NavLink className="panel-elem-head" to={"/"} activeStyle={{color: "#ffffff"}}>О компании</NavLink></li>
                        <li><a className="panel-elem-next1" href="">ССылка 1</a></li>
                        <li><a className="panel-elem-next2" href="">ССылка 2</a></li>
                        <li><a className="panel-elem-next3" href="">ССылка 3</a></li>
                    </ul>
                    <div className="panel-button" onClick={this.see}>
                        <button className="panel-button-elem">Вход</button>
                    </div>
                    {showForm}
                </nav>
            </div>
        )
    }
}

export default Panel

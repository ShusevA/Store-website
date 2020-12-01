import "../css/phone.css";

import React from 'react';
import ReactDOM from 'react-dom'
import FormTell from "./detail/FormTell"

const checkTell = document.getElementById("check")

class Tell extends React.Component {
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

export default class Phone extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showTell: false }
        this.see = this.see.bind(this);
        this.hide = this.hide.bind(this);
    }

    see() {
        document.querySelector(".phone-button").classList.add('show');
        this.setState({ showTell: true });
    }
    hide() {
        document.querySelector(".phone-button").classList.remove('show');
        this.setState({ showTell: false })
    }

    render() {

        const showTell = this.state.showTell ? (
            <Tell>
                <div className="tellShow">
                    <div className="close-bloc" onClick={this.hide}>
                        <div className="close"></div>
                    </div>
                    <FormTell />
                </div>
            </Tell>
        ) : null;

        return (
            <div className="phone-buz">
                <div className="phone">
                    <div className="phone-title">
                        <img src="/img/02.png" alt="" />
                    </div>
                    <div className="phone-tel">
                        <div className="tels tel-1">+380 98 170 00 740</div>
                        <div className="tels tel-2">+380 98 170 00 740</div>
                        <div className="phone-date">
                            <button className="phone-button" onClick={this.see}>Перезвонить мне</button>
                        </div>
                    </div>
                    <div className="phone-img1">
                        {this.props.data.compare > 0 ? (
                        <div className="Hid">{this.props.data.compare}</div>
                        ): null}
                        <img src="/img/04.png" alt="" />
                        <p className="phone-text">сравнение</p>
                    </div>
                    <div className="phone-img2">
                        {this.props.data.chosen > 0 ? (
                        <div className="Hid">{this.props.data.chosen}</div>
                        ) : null}
                        <img src="/img/05.png" alt="" />
                        <p className="phone-text">избранное</p>
                    </div>
                    <div className="phone-img3">
                    <div className="Hid">{this.props.data.zac}</div>
                        <img src="/img/carz.png" alt="" />
                        <p className="phone-text">корзина</p>
                    </div>
                    {showTell}

                </div>
            </div>
        )
    }
}

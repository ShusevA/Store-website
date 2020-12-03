import '../../css/formTell.css'

import React from "react";


export default class FormTell extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tell: "", tellAll: "" }
        this.inputRef = React.createRef();
        this.check = this.check.bind(this);
        this.start = this.start.bind(this);
        this.addTell = this.addTell.bind(this);
    }

    componentDidUpdate() {
        if (this.state.tellAll > 0) {
            document.querySelector(".checkTell").disabled = false;
            document.querySelector(".checkTell").style.cursor = "pointer";
            document.querySelector(".checkTell").style.backgroundColor = "#ff8900"
        } else {
            document.querySelector(".checkTell").disabled = true;
            document.querySelector(".checkTell").style.cursor = "";
            document.querySelector(".checkTell").style.backgroundColor = "#717381"
        }
    }

    check(e) {
        if (e.target.value.length == 22) {
            if (this.inputRef.current.value.match(/\+\d\d\(\d\d\d\)\s\d\d\d\s\-\s\d\d\s\-\s\d\d/)) {
                document.getElementById('phone-mask').style.borderColor = '#9c9c9c';
                this.setState({ tellAll: 1 });
            }
        } else {
            document.getElementById('phone-mask').style.borderColor = 'red';
            this.setState({ tellAll: 0 });
        }
    }

    start(e) {
        if (e.target.value.match(/\+\d\d\(\d\d\d\)\s\d\d\d\s\-\s\d\d\s\-\s\d\d/)) {
        this.setState({ tellAll: 1 });
        }
        if (e.target.value.length == 17) {
            if (e.target.value.match(/\+\d\d\(\d\d\d\)\s\d\d\d\s\-\s\d\d/)) {
                e.target.value += " - "
            }
        }

        if (e.target.value.length == 12) {
            if (e.target.value.match(/\+\d\d\(\d\d\d\)\s\d\d\d/)) {
                e.target.value += " - "
            }
        }
        if (e.target.value.length == 7) {
            if (e.target.value.match(/\+\d\d\(\d\d\d/)) {
                e.target.value += ") ";
            }
        }
    }

    addTell(e) {
        e.target.value = "+38(0"
    }

    render() {

        return (
            <div className="formTell">
                <p className="formTell-title">Перезвоните мне</p>
                <form action="" method="get" className="formTell-form">
                    <label htmlFor="" className="formTell-ladel">Номет телефона</label>
                    <input type="text" name="tell" id="phone-mask" placeholder="+38(0__) ___ - __ - __"
                         onChange={(e)=> this.setState({ tell: e.target.value })}
                        ref={this.inputRef} maxLength={22} onBlur={this.check} onFocus={this.addTell} onInput={this.start} />
                    <button type="submit" className="checkTell" disabled>Перезвоните мне</button>
                </form>

            </div>
        )
    }
}

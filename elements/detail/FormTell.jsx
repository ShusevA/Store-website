import '../../css/formTell.css'

import React from "react";


export default class FormTell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tell: "",  tellAll: ""}
        this.inputRef = React.createRef();
        this.check = this.check.bind(this);
    }

    componentDidUpdate(){
        if(this.state.tellAll > 0 ) {
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
        if (!this.inputRef.current.value.match(/^\+/)) {
            e.target.value = "+38" + this.inputRef.current.value;
        }
        if (this.state.tell.length == 13) {
            if (this.inputRef.current.value.match(/^\+\d{12,}/)) {
                document.getElementById('phone-mask').style.borderColor = '#9c9c9c';
                this.setState({tellAll: 1});
            }
        } else {
            document.getElementById('phone-mask').style.borderColor = 'red';
            this.setState({tellAll: 0});
        }
    }


render() {

    return (
        <div className="formTell">
            <p className="formTell-title">Перезвоните мне</p>
            <form action="" method="get" className="formTell-form">
                <label htmlFor="" className="formTell-ladel">Номет телефона</label>
                <input type="text" name="tell" id="phone-mask" placeholder="+38(0__) ___ - __ - __" onChange={(e)=> this.setState({ tell: e.target.value })} ref={this.inputRef} maxLength={13} onBlur={this.check} />
                <button type="submit" className="checkTell" disabled>Перезвоните мне</button>
            </form>

        </div>
    )
}
}
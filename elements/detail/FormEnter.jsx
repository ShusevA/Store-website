import '../../css/formEnter.css'

import React from "react";


export default class FormTell extends React.Component {
    constructor(props) {
        super(props);
        this.state = { password: "", email: "", emailAll: "", passwordAll: "" };
        this.checkPas = this.checkPas.bind(this);
        this.check = this.check.bind(this);
    }

    componentDidUpdate(){
        if(this.state.emailAll > 0 && this.state.passwordAll > 0) {
            document.querySelector(".subm-Form").disabled = false;
            document.querySelector(".subm-Form").style.cursor = "pointer";
            document.querySelector(".subm-Form").style.backgroundColor = "#717381"
        } else {
            document.querySelector(".subm-Form").disabled = true;
            document.querySelector(".subm-Form").style.cursor = "";
            document.querySelector(".subm-Form").style.backgroundColor = "#afb9c6"

       }
    }


    checkPas() {
        if (this.state.password.length >= 4) {
            this.setState({ passwordAll: 1 });
            document.querySelector(".input-2").style.borderColor = "";
        } else {
            this.setState({ passwordAll: 0 });
            document.querySelector(".input-2").style.borderColor = "red";
        }
    }

    check(e) {
        if (!e.target.value.match(/.+@.+\../i)) {
            this.setState({ emailAll: 0 });
            document.querySelector(".input-1").style.borderColor = "red";
        } else {
            this.setState({ emailAll: 1 });
            document.querySelector(".input-1").style.borderColor = "";
        }
    }

    render() {

        return (
            <div className="formEnter">
                <div className="Enter-form">
                    <p className="formEnter-title">Вход в личный кабинет</p>
                    <form action="" method="get" className="formEnter-form">
                        <label htmlFor="" className="formEnter-ladel">Ваш email</label>
                        <input className="input-1" type="email" name="tell" placeholder="mikel_ivanov98@gmail.com" onChange={(e) => this.setState({ email: e.target.value })} onBlur={this.check} required />
                        <label htmlFor="" className="formEnter-ladel">Пароль</label>
                        <input className="input-2" type='password' name="password" id="phone" placeholder="*************" onChange={(e) => this.setState({ password: e.target.value })} onBlur={this.checkPas} required />
                        <div className="formEnter-block">
                            <input className="true-checkbox" type="checkbox" name="" id="" />
                            <span className="feyc-checkbox"></span>
                            <p className="formEnter-block-span">Запомнить меня</p>
                        </div>
                        <div className="formEnter-thint">
                            <a href="">Забыли пароль?</a>
                            <a href="">Регистрация</a>
                        </div>
                        <button type="submit" disabled className='subm-Form'>Войти в личный кабинет</button>
                    </form>
                </div>
                <div className="Enter-Web">
                    <p className="formEnter-title2">Войти с помощью</p>
                    <div className="Enter-Web_btn btn-01">
                        <svg width="9" height="16" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.7491 0.0043694L9.02593 0C5.96651 0 3.98937 2.02849 3.98937 5.16813V7.55098H1.25132C1.01472 7.55098 0.82312 7.7428 0.82312 7.9794V11.4319C0.82312 11.6685 1.01494 11.8601 1.25132 11.8601H3.98937V20.5718C3.98937 20.8084 4.18097 21 4.41757 21H7.98996C8.22656 21 8.41816 20.8082 8.41816 20.5718V11.8601H11.6196C11.8562 11.8601 12.0478 11.6685 12.0478 11.4319L12.0491 7.9794C12.0491 7.8658 12.0039 7.757 11.9237 7.6766C11.8435 7.5962 11.7343 7.55098 11.6207 7.55098H8.41816V5.53101C8.41816 4.56013 8.64951 4.06726 9.91422 4.06726L11.7487 4.0666C11.9851 4.0666 12.1767 3.87479 12.1767 3.6384V0.432571C12.1767 0.196405 11.9853 0.00480634 11.7491 0.0043694Z" fill="#ffffff" />
                        </svg>
                        <span>Facebook</span>
                    </div>
                    <div className="Enter-Web_btn btn-02">
                        <svg width="16" height="16" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.666 2.79795C20.1994 3.00485 19.715 3.16808 19.218 3.28625C19.7657 2.76585 20.1774 2.11494 20.4097 1.38841C20.476 1.181 20.2507 1.00165 20.0635 1.1127C19.372 1.52281 18.6273 1.83047 17.8498 2.02724C17.8047 2.03865 17.7582 2.04444 17.7115 2.04444C17.5699 2.04444 17.4322 1.99186 17.3239 1.89642C16.4967 1.16738 15.4328 0.765869 14.3283 0.765869C13.8503 0.765869 13.3678 0.840365 12.894 0.98731C11.4259 1.44263 10.2932 2.65357 9.93787 4.14759C9.80454 4.70797 9.76845 5.26887 9.8305 5.81467C9.83762 5.87739 9.80797 5.92116 9.78969 5.94169C9.75759 5.97769 9.71208 5.99832 9.66482 5.99832C9.65954 5.99832 9.65412 5.99806 9.64874 5.99755C6.43532 5.699 3.5376 4.15086 1.48934 1.63837C1.38489 1.51022 1.1846 1.52594 1.10135 1.66873C0.700246 2.35686 0.488277 3.14391 0.488277 3.94478C0.488277 5.17215 0.981385 6.32882 1.83791 7.17203C1.47772 7.08663 1.1291 6.95213 0.805257 6.77226C0.648585 6.68522 0.455816 6.79709 0.453615 6.97629C0.431189 8.79963 1.49871 10.4221 3.09789 11.1526C3.06569 11.1534 3.03348 11.1538 3.00123 11.1538C2.74774 11.1538 2.49107 11.1293 2.23845 11.081C2.06201 11.0473 1.91379 11.2147 1.96857 11.3858C2.48764 13.0063 3.88295 14.2008 5.55268 14.472C4.1669 15.4023 2.55313 15.893 0.873507 15.893L0.349883 15.8926C0.188552 15.8926 0.0521038 15.9978 0.0109901 16.1541C-0.0295092 16.308 0.0450894 16.4703 0.182664 16.5504C2.07533 17.6518 4.23418 18.234 6.42677 18.234C8.34601 18.234 10.1413 17.8531 11.7628 17.102C13.2493 16.4134 14.5629 15.4291 15.6671 14.1764C16.6957 13.0094 17.5 11.6623 18.0577 10.1725C18.5893 8.75232 18.8703 7.237 18.8703 5.79029V5.72138C18.8702 5.48908 18.9753 5.27051 19.1586 5.12172C19.8541 4.55698 20.4598 3.8922 20.9588 3.14586C21.0905 2.94879 20.8828 2.7018 20.666 2.79795Z" fill="#ffffff" />
                        </svg>
                        <span>Twitter</span>
                    </div>
                    <div className="Enter-Web_btn btn-03">
                        <svg width="18" height="18" viewBox="0 0 256 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                            <path className="fill-1" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" />
                            <path className="fill-2" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" />
                            <path className="fill-3" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" />
                            <path className="fill-4" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" />
                        </svg>
                        <span>Google</span>
                    </div>
                </div>
            </div>
        )
    }
}

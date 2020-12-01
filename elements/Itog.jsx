import "../css/itog.css"

import React from "react";
import ReactDOM from "react-dom";

const checkThencks = document.getElementById("check")

class Thanks extends React.Component {
    constructor(props) {
        super(props);
        this.elem = document.createElement("div");
    }

    componentDidMount() {
        checkThencks.appendChild(this.elem);
    }
    componentWillUnmount() {
        checkThencks.removeChild(this.elem);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.elem
        )
    }
}

export default class Itog extends React.Component {
    constructor(props) {
        super(props);
        this.state = { signature: "", signatureAll: "", ok: false }
        this.check = this.check.bind(this);
        this.checkForm = this.checkForm.bind(this);

    }

    check(e) {
        if (!e.target.value.match(/.+@.+\../i)) {
            this.setState({ signatureAll: 0 });
        } else {
            this.setState({ signatureAll: 1 });
        }
    }

    checkForm(e) {
        e.preventDefault();
        if (this.state.signatureAll > 0) {
                 setTimeout((e) => {
                this.setState({ ok: false }); 
                document.forms.formSignature.submit()
            }, 2500)
            this.setState({ ok: true });
        } else {
            this.setState({ ok: false });
        }
    }

    render() {

        const thanks = this.state.ok ? (
            <Thanks >
                <div className="thanks">
                    <div className="thanks-elem">
                        <h1>Вы успешно подписаны на рассылку!</h1>
                    </div>
                </div>
            </Thanks>
        ) : null;

        return (
            <div className="itog-buz">
                <div className="itog">
                    <div className="itog-1">
                        <div className="itog-1-B1">
                            <div className="itog-1-B1_head">
                                <span>Блок 1</span>
                            </div>
                            <div className="itog-1-B1_body">
                                <div>
                                    <p>Будьте в курсе новостей и новинок!</p>
                                    <p>Подписывайтесь на рассылку</p>
                                </div>
                                <form name="formSignature" action="" method="get" className="itog-1-B1_form">
                                    <div className="itog-1-B1_formWrap">
                                        <div className="itog-1-B1_formBlock">
                                            <input className="signature" type="text" placeholder="Укажите свой email для подписки" onChange={(e) => this.setState({ signature: e.target.value })} onBlur={this.check} />
                                        </div>
                                        <button type="submit" onClick={this.checkForm}>подписаться</button>
                                    </div>
                                    {thanks}
                                </form>

                            </div>
                        </div>
                        <div className="itog-1-B2">
                            <div className="itog-1-ALL_head">
                                <span>Блок ссылок 1</span>
                            </div>
                            <ul className="itog-1-ALL_body">
                                <li><a href="">Ссылка 1</a></li>
                                <li><a href="">Ссылка 2</a></li>
                                <li><a href="">Ссылка 3</a></li>
                                <li><a href="">Ссылка 4</a></li>
                            </ul>
                        </div>
                        <div className="itog-1-B3">
                            <div className="itog-1-ALL_head">
                                <span>Блок 2</span>
                            </div>
                            <ul className="itog-1-ALL_body">
                                <li><a href="">Ссылка 1</a></li>
                                <li><a href="">Ссылка 2</a></li>
                                <li><a href="">Ссылка 3</a></li>
                                <li><a href="">Ссылка 4</a></li>
                            </ul>
                        </div>
                        <div className="itog-1-B4">
                            <div className="itog-1-ALL_head">
                                <span>Блок ссылок 3</span>
                            </div>
                            <ul className="itog-1-ALL_body">
                                <li><a href="">Ссылка 1</a></li>
                                <li><a href="">Ссылка 2</a></li>
                                <li><a href="">Ссылка 3</a></li>
                                <li><a href="">Ссылка 4</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="itog-2">
                        <div className="itog-2-label">
                            <img src="/img/011.png" alt="Label" />
                            <p>© Copyrith 2017. Тестовое задание Wezom</p>
                        </div>
                        <div className="itog-2-web">
                            <div className="itog-2-webElem">
                                <a href="">
                                    <svg width="18" height="10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3333 1980" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd">
                                        <path d="M3257 134c23-77 0-134-110-134h-365c-93 0-135 49-159 103 0 0-185 452-448 746-85 85-124 112-170 112-23 0-58-27-58-104V135c0-93-26-134-103-134h-573c-58 0-93 43-93 84 0 88 131 108 145 355v537c0 118-21 139-68 139-124 0-424-454-603-974C617 41 582 0 489 0H124C20 0-1 49-1 103c0 97 124 576 576 1209 301 433 726 667 1112 667 232 0 260-52 260-142v-327c0-104 22-125 95-125 54 0 147 27 363 236 247 247 288 358 427 358h365c104 0 156-52 126-155-33-102-151-251-308-427-85-100-212-209-251-263-54-70-39-100 0-162 0 0 444-626 491-838z" />
                                    </svg>
                                </a>
                            </div>
                            <div className="itog-2-webElem">
                                <a href="">
                                    <svg width="10" height="16" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.7491 0.0043694L9.02593 0C5.96651 0 3.98937 2.02849 3.98937 5.16813V7.55098H1.25132C1.01472 7.55098 0.82312 7.7428 0.82312 7.9794V11.4319C0.82312 11.6685 1.01494 11.8601 1.25132 11.8601H3.98937V20.5718C3.98937 20.8084 4.18097 21 4.41757 21H7.98996C8.22656 21 8.41816 20.8082 8.41816 20.5718V11.8601H11.6196C11.8562 11.8601 12.0478 11.6685 12.0478 11.4319L12.0491 7.9794C12.0491 7.8658 12.0039 7.757 11.9237 7.6766C11.8435 7.5962 11.7343 7.55098 11.6207 7.55098H8.41816V5.53101C8.41816 4.56013 8.64951 4.06726 9.91422 4.06726L11.7487 4.0666C11.9851 4.0666 12.1767 3.87479 12.1767 3.6384V0.432571C12.1767 0.196405 11.9853 0.00480634 11.7491 0.0043694Z" />
                                    </svg>
                                </a>
                            </div>
                            <div className="itog-2-webElem">
                                <a href="">
                                    <svg width="17" height="15" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.666 2.79795C20.1994 3.00485 19.715 3.16808 19.218 3.28625C19.7657 2.76585 20.1774 2.11494 20.4097 1.38841C20.476 1.181 20.2507 1.00165 20.0635 1.1127C19.372 1.52281 18.6273 1.83047 17.8498 2.02724C17.8047 2.03865 17.7582 2.04444 17.7115 2.04444C17.5699 2.04444 17.4322 1.99186 17.3239 1.89642C16.4967 1.16738 15.4328 0.765869 14.3283 0.765869C13.8503 0.765869 13.3678 0.840365 12.894 0.98731C11.4259 1.44263 10.2932 2.65357 9.93787 4.14759C9.80454 4.70797 9.76845 5.26887 9.8305 5.81467C9.83762 5.87739 9.80797 5.92116 9.78969 5.94169C9.75759 5.97769 9.71208 5.99832 9.66482 5.99832C9.65954 5.99832 9.65412 5.99806 9.64874 5.99755C6.43532 5.699 3.5376 4.15086 1.48934 1.63837C1.38489 1.51022 1.1846 1.52594 1.10135 1.66873C0.700246 2.35686 0.488277 3.14391 0.488277 3.94478C0.488277 5.17215 0.981385 6.32882 1.83791 7.17203C1.47772 7.08663 1.1291 6.95213 0.805257 6.77226C0.648585 6.68522 0.455816 6.79709 0.453615 6.97629C0.431189 8.79963 1.49871 10.4221 3.09789 11.1526C3.06569 11.1534 3.03348 11.1538 3.00123 11.1538C2.74774 11.1538 2.49107 11.1293 2.23845 11.081C2.06201 11.0473 1.91379 11.2147 1.96857 11.3858C2.48764 13.0063 3.88295 14.2008 5.55268 14.472C4.1669 15.4023 2.55313 15.893 0.873507 15.893L0.349883 15.8926C0.188552 15.8926 0.0521038 15.9978 0.0109901 16.1541C-0.0295092 16.308 0.0450894 16.4703 0.182664 16.5504C2.07533 17.6518 4.23418 18.234 6.42677 18.234C8.34601 18.234 10.1413 17.8531 11.7628 17.102C13.2493 16.4134 14.5629 15.4291 15.6671 14.1764C16.6957 13.0094 17.5 11.6623 18.0577 10.1725C18.5893 8.75232 18.8703 7.237 18.8703 5.79029V5.72138C18.8702 5.48908 18.9753 5.27051 19.1586 5.12172C19.8541 4.55698 20.4598 3.8922 20.9588 3.14586C21.0905 2.94879 20.8828 2.7018 20.666 2.79795Z" />
                                    </svg>
                                </a>
                            </div>
                            <div className="itog-2-webElem">
                                <a href="">
                                    <svg width="21px" height="16px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M54.15,10.031l-20.9-0.019l-21.718,0.019c-5.433,0-11.534,3.626-11.534,8.944v26.474c0,5.316,6.101,8.559,11.534,8.559 H54.15c5.432,0,9.834-3.242,9.834-8.559V18.976C63.984,13.657,59.582,10.031,54.15,10.031z M27.856,42.205L27.73,22.044 l14.03,10.168L27.856,42.205z" />
                                    </svg>
                                </a>
                            </div>

                        </div>
                        <div className="itog-2-data">
                            <img src="/img/Me.png" alt="It is I" />
                            <div className="itog-2-dataText">
                                <p>Проект выполнил</p>
                                <p>Шусев Александр</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
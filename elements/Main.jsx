import "../css/main.css";

import React from "react";

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chosen1: true, compare1: true,
            chosen2: true, compare2: true,
            chosen3: true, compare3: true,
            chosen4: true, compare4: true,
        }

        this.compare = this.compare.bind(this);
        this.chosen = this.chosen.bind(this);

    }

    compare(e) {
                this.props.onCheckComp(e.target.name);
    }

    chosen(e) {
        this.props.onCheckChos(e.target.name);
    }

    render() {

        return (
            <div className="main-buz">
                <div className="main">
                    <div className="main-head">
                        <div className="main-head_1">Карточки товаров</div>
                        <a href='' className="main-head_2">Ссылка в каталог</a>
                    </div>
                    <div className="main-body">
                        <div className="main-body_elem el-1">
                            <div className="main-body_elemWrap">
                                <div className="wrap-1">
                                    Mark
                            </div>
                                <div className="wrap-2">
                                    <p>Антифриз Fosser Antifreeze</p>
                                    <p>FA 12 Readymix 1 л Concentrat, Germany</p>
                                </div>
                                <div className="wrap-3">
                                    <div className="wrap-3-block">
                                        <img src="/img/08.png" alt="Star" />
                                        <img src="/img/08.png" alt="Star" />
                                        <img src="/img/08.png" alt="Star" />
                                        <img src="/img/08.png" alt="Star" />
                                        <img src="/img/08.png" alt="Star" />
                                        <span>Отзывы (10)</span>
                                    </div>
                                    <p>В наличии: 24 шт</p>
                                </div>
                                <div className="wrap-4">
                                    <div className="wrap-4-elem">
                                        <img src="/img/09.png" alt="Sun" />
                                        <p>Летняя</p>
                                        <img  src="/img/09-1.png" alt="Car" />
                                        <p className="endNew2">легковая</p>
                                        <img className="endNew" src="/img/09-2.png" alt="Label" />
                                        <p>новая</p>
                                    </div>
                                    <div>
                                        <img src="/img/09x.png" alt="Wheel" />
                                    </div>
                                </div>
                                <div className="wrap-5">
                                    <div className='btn hit-1'><div className='int on'></div><div className='textBtn'>Новинка</div><div className='int off'></div></div>
                                    <div className='btn hit-2'><div className='int on'></div><div className='textBtn'>Хит</div><div className='int off'></div></div>
                                    <div className='btn hit-3'><div className='int on'></div><div className='textBtn'>Скидка</div><div className='int off'></div></div>
                                </div>
                                <div className="wrap-6">
                                    <p className="SumNew">599<span className="sum-new">грн.</span></p>
                                    <p className="SumOld">1 250 грн.</p>
                                </div>
                                <div className="wrap-7">
                                    <div className="order">
                                        <img src="/img/09-10.png" alt="Shop" />
                                        <span>Купить товар</span>
                                    </div>
                                </div>
                                <div className="wrap-8">
                                    <div className="wrap-8-block">
                                        <img src="/img/09-11.png" alt="T" />
                                        <a name="compare1" onClick={this.compare}>{this.props.compare.compare1 ? "Сравнить товар" : "В сравнении"}</a>
                                    </div>
                                    <div className="wrap-8-block">
                                        <img src="/img/09-12.png" alt="V" />
                                        <a name="chosen1" onClick={this.chosen} >{this.props.compare.chosen1 ? "В избранное" : "В избранном"}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="main-body_elem el-2">
                            <div className="main-body_elemWrap">
                                <div className="wrap-1">
                                    Mark
                            </div>
                                <div className="wrap-2">
                                    <p>Антифриз Fosser Antifreeze</p>
                                    <p>FA 12 Readymix 1 л Concentrat, Germany</p>
                                </div>
                                <div className="wrap-3">
                                    <div className="wrap-3-block">
                                        <img src="/img/08.png" alt="Star" />
                                        <img src="/img/08.png" alt="Star" />
                                        <img src="/img/08.png" alt="Star" />
                                        <img src="/img/08-1.png" alt="Star" />
                                        <img src="/img/08-1.png" alt="Star" />
                                        <span>Отзывы (10)</span>
                                    </div>
                                    <p>В наличии: 24 шт</p>
                                </div>
                                <div className="wrap-4">
                                    <div className="wrap-4-elem">
                                        <img src="/img/09.png" alt="Sun" />
                                        <p>Летняя</p>
                                        <img src="/img/09-2.png" alt="Label" />
                                        <p>новая</p>
                                    </div>
                                    <div>
                                        <img src="/img/09x1.png" alt="Wheel" />
                                    </div>
                                </div>
                                <div className="wrap-5">
                                    <div className='btn hit-1'><div className='int on'></div><div className='textBtn'>Новинка</div><div className='int off'></div></div>
                                    <div className='btn hit-2'><div className='int on'></div><div className='textBtn'>Хит</div><div className='int off'></div></div>
                                </div>
                                <div className="wrap-6">
                                    <p className="SumNew">599<span className="sum-new">грн.</span></p>
                                    <p className="SumOld">1 250 грн.</p>
                                </div>
                                <div className="wrap-7">
                                    <div className="order">
                                        <img src="/img/09-10.png" alt="Shop" />
                                        <span>Купить товар</span>
                                    </div>
                                </div>
                                <div className="wrap-8">
                                    <div className="wrap-8-block">
                                        <img src="/img/09-11.png" alt="T" />
                                        <a name="compare2" onClick={this.compare}>{this.props.compare.compare2 ? "Сравнить товар" : "В сравнении"}</a>
                                    </div>
                                    <div className="wrap-8-block">
                                        <img src="/img/09-12.png" alt="V" />
                                        <a name="chosen2" onClick={this.chosen}>{this.props.compare.chosen2 ? "В избранное" : "В избранном"}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="main-body_elem el-3">
                            <div className="main-body_elemWrap">
                                <div className="wrap-1">
                                    Mark
                            </div>
                                <div className="wrap-2">
                                    <p>Антифриз Fosser Antifreeze</p>
                                    <p>FA 12 Readymix 1 л Concentrat, Germany</p>
                                </div>
                                <div className="wrap-3">
                                    <div className="wrap-3-block">
                                        <img src="/img/08-1.png" alt="Star" />
                                        <img src="/img/08-1.png" alt="Star" />
                                        <img src="/img/08-1.png" alt="Star" />
                                        <img src="/img/08-1.png" alt="Star" />
                                        <img src="/img/08-1.png" alt="Star" />
                                        <span>Без отзывов</span>
                                    </div>
                                    <p>В наличии: 24 шт</p>
                                </div>
                                <div className="wrap-4">
                                    <div className="wrap-4-elem">
                                        <img src="/img/09.png" alt="Sun" />
                                        <p>Летняя</p>
                                        <img src="/img/09-1.png" alt="Car" />
                                        <p>легковая</p>
                                        <img src="/img/09-2.png" alt="Label" />
                                        <p>новая</p>
                                    </div>
                                    <div>
                                        <img src="/img/09x2.png" alt="Wheel" />
                                    </div>
                                </div>
                                <div className="wrap-5">
                                    <div className='btn hit-1'><div className='int on'></div><div className='textBtn'>Новинка</div><div className='int off'></div></div>
                                </div>
                                <div className="wrap-6">
                                    <p className="SumNew">9 570<span className="sum-new">грн.</span></p>
                                    <p className="SumOld">11 250 грн.</p>
                                </div>
                                <div className="wrap-7">
                                    <div className="order">
                                        <img src="/img/09-10.png" alt="Shop" />
                                        <span>Купить товар</span>
                                    </div>
                                </div>
                                <div className="wrap-8">
                                    <div className="wrap-8-block">
                                        <img src="/img/09-11.png" alt="T" />
                                        <a name="compare3" onClick={this.compare}>{this.props.compare.compare3 ? "Сравнить товар" : "В сравнении"}</a>
                                    </div>
                                    <div className="wrap-8-block">
                                        <img src="/img/09-12.png" alt="V" />
                                        <a name="chosen3" onClick={this.chosen}>{this.props.compare.chosen3 ? "В избранное" : "В избранном"}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="main-body_elem el-4">
                            <div className="main-body_elemWrap">
                                <div className="wrap-1">
                                    Mark
                            </div>
                                <div className="wrap-2">
                                    <p>Антифриз Fosser Antifreeze</p>
                                </div>
                                <div className="wrap-3">
                                    <div className="wrap-3-block">
                                        <img src="/img/08.png" alt="Star" />
                                        <img src="/img/08.png" alt="Star" />
                                        <img src="/img/08.png" alt="Star" />
                                        <img src="/img/08.png" alt="Star" />
                                        <img src="/img/08.png" alt="Star" />
                                        <span>Отзывы (10)</span>
                                    </div>
                                    <p>В наличии: 24 шт</p>
                                </div>
                                <div className="wrap-4">
                                    <div className="wrap-4-elem">
                                        <img src="/img/09.png" alt="Sun" />
                                        <p>Летняя</p>
                                        <img src="/img/09-1.png" alt="Car" />
                                        <p>легковая</p>
                                    </div>
                                    <div>
                                        <img src="/img/09x3.png" alt="Wheel" />
                                    </div>
                                </div>
                                <div className="wrap-5">
                                </div>
                                <div className="wrap-6">
                                    <p className="SumNew">599<span className="sum-new">грн.</span></p>
                                    <p className="SumOld">1 250 грн.</p>
                                </div>
                                <div className="wrap-7">
                                    <div className="order">
                                        <img src="/img/09-10.png" alt="Shop" />
                                        <span>Купить товар</span>
                                    </div>
                                </div>
                                <div className="wrap-8">
                                    <div className="wrap-8-block">
                                        <img src="/img/09-11.png" alt="T" />
                                        <a name="compare4" onClick={this.compare}>{this.props.compare.compare4 ? "Сравнить товар" : "В сравнении"}</a>
                                    </div>
                                    <div className="wrap-8-block">
                                        <img src="/img/09-12.png" alt="V" />
                                        <a name="chosen4" onClick={this.chosen}>{this.props.compare.chosen4 ? "В избранное" : "В избранном"}</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
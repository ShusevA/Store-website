import "../../css/selected.css";

import React from "react";

export default class Selected extends React.Component {
    constructor(props) {
        super(props);
        this.refElem = React.createRef();
        this.closeSel = this.closeSel.bind(this);
        this.checkInput = this.checkInput.bind(this);
    }

    componentDidMount() {
        let elem = document.querySelector('.selected-form-checked_2');
        elem.classList.toggle("active");
    }


    max() {
        let elem = document.querySelectorAll('.hiddenElem');
        elem.forEach((el) => {
            el.classList.remove("hiddenElem");
        })
        let elem2 = document.querySelector('.q');
        elem2.classList.remove("q");

        let elem3 = document.querySelector('.selected-form-checked_2');
        elem3.classList.remove("active");
        
        let elem4 = document.querySelector('.selected-form-checked_1');
        elem4.classList.add("active");


    }

    min() {
        let elem = document.querySelectorAll('.max');
        elem.forEach((el) => {
            el.classList.add("hiddenElem");
        })
        let elem2 = document.querySelector('.elements_selectAll');
        elem2.classList.add("q");

        let elem3 = document.querySelector('.selected-form-checked_1');
        elem3.classList.remove("active");
        
        let elem4 = document.querySelector('.selected-form-checked_2');
        elem4.classList.add("active");

    }

    closeSel() {
        let elem = document.querySelectorAll(".elements_select select");
        elem.forEach((z) => {
            z.selectedIndex = [0];
        })
    }

    checkInput(e){
        if(isNaN(e.target.value)){
            return this.refElem.current.value = ""
        }
    }
    render() {

        return (
            <div className="selected">
                <ul className="selected-ul">
                    <li>Ссылка 1</li>
                    <li>Ссылка 2</li>
                    <li>Ссылка 3</li>
                    <li>Ссылка 4</li>
                    <li>Ссылка 5</li>
                    <li>Ссылка 6</li>
                    <li>Ссылка 7</li>
                </ul>
                <div className="selected-form">
                    <ul className="selected-form-elem">
                        <li><img src="/img/car.png" alt="Car" /><span>Ссылка 1</span></li>
                        <li><img src="/img/Big-car.png" alt="Big car" /><span>Ссылка 2</span></li>
                        <li className="mel"><img src="/img/col.png" alt="col" /><span>Ссылка 3</span></li>
                        <li><img src="/img/oil.png" alt="oil" /><span>Ссылка 4</span></li>
                        <li><img src="/img/bot.png" alt="battery" /><span>Ссылка 5</span></li>
                    </ul>
                    <div className="selected-form-checked">
                        <button className="selected-form-checked_1" onClick={(e) => this.max()}>Tab 1</button>
                        <button className="selected-form-checked_2" onClick={(e) => this.min()}>Tab 2</button>
                    </div>
                    <div name="big" action="" className="selected-form_form">
                        <div className="selected-form_select">
                            <div className="elements_select">
                                <select name="Select1" id="">
                                    <option selected value="Select 1">Select 1</option>
                                    <option value="Data 1">Data 1</option>
                                    <option value="Data 2">Data 2</option>
                                    <option value="Data 3">Data 3</option>
                                    <option value="Data 4">Data 4</option>
                                </select>
                            </div>
                            <div className="elements_select">
                                <select name="Select2" id="">
                                    <option selected value="Select 2">Select 2</option>
                                    <option value="Data 1">Data 1</option>
                                    <option value="Data 2">Data 2</option>
                                    <option value="Data 3">Data 3</option>
                                    <option value="Data 4">Data 4</option>
                                </select>
                            </div>
                            <div className="elements_select">
                                <select name="Select3" id="">
                                    <option selected value="Select 3">Select 3</option>
                                    <option value="Data 1">Data 1</option>
                                    <option value="Data 2">Data 2</option>
                                    <option value="Data 3">Data 3</option>
                                    <option value="Data 4">Data 4</option>
                                </select>
                            </div>
                            <div className="elements_select">
                                <select name="Select4" id="">
                                    <option selected value="Select 4">Select 4</option>
                                    <option value="Data 1">Data 1</option>
                                    <option value="Data 2">Data 2</option>
                                    <option value="Data 3">Data 3</option>
                                    <option value="Data 4">Data 4</option>
                                </select>
                            </div>
                        </div>
                        <div className="selected-form_select">
                            <div className="elements_select hiddenElem max">
                                <select name="Select5" id="">
                                    <option selected value="Select 5">Select 5</option>
                                    <option value="Data 1">Data 1</option>
                                    <option value="Data 2">Data 2</option>
                                    <option value="Data 3">Data 3</option>
                                    <option value="Data 4">Data 4</option>
                                </select>
                            </div>
                            <div className="elements_select">
                                <select name="Select6" id="">
                                    <option selected value="Select 6">Select 6</option>
                                    <option value="Data 1">Data 1</option>
                                    <option value="Data 2">Data 2</option>
                                    <option value="Data 3">Data 3</option>
                                    <option value="Data 4">Data 4</option>
                                </select>
                            </div>
                            <div className="elements_select hiddenElem max">
                                <select name="Select7" id="">
                                    <option selected value="Select 7">Select 7</option>
                                    <option value="Data 1">Data 1</option>
                                    <option value="Data 2">Data 2</option>
                                    <option value="Data 3">Data 3</option>
                                    <option value="Data 4">Data 4</option>
                                </select>
                            </div>
                            <div className="elements_selectAll q">
                                <span>Цена</span>
                                <div className="elements_selectPrice prices">
                                    <input type="text" name="" id="" placeholder="50" onChange={this.checkInput} ref={this.refElem}/>
                                </div>
                                <div className="elements_selectSum prices">
                                    <p>250000</p>
                                </div>
                            </div>
                        </div>
                        <div className="selected-form_bottom">
                            <button className="selected-form_bottom1" onClick={this.closeSel}>Очистить Фильтр</button>
                            <button className="selected-form_bottom2" type='submit'>Применить фильтр</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

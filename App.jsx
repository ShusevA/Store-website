import "./css/app.css";
import "./css/fonts.css";

import React from "react";
import { Switch } from 'react-router-dom';

import Panel from "./elements/Panel";
import Phone from "./elements/Phone";
import Filtering from "./elements/Filtering"
import Main from "./elements/Main";
import Itog from "./elements/Itog";

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {compare: 0, chosen: 0, zac: 5,
            chosen1: true, compare1: true,
            chosen2: true, compare2: true,
            chosen3: true, compare3: true,
            chosen4: true, compare4: true,

        }
        this.checkCompare = this.checkCompare.bind(this);
        this.checkChosen = this.checkChosen.bind(this);
    }

    checkCompare(name){
        this.setState({ [name]: !this.state[name] });
        if(this.state[name]){
            this.setState({compare: this.state.compare + 1});
        } else {
            this.setState({compare: this.state.compare - 1});
        }
    }

    checkChosen(name){
        this.setState({ [name]: !this.state[name] });
        if(this.state[name]){
            this.setState({chosen: this.state.chosen + 1});
        } else {
            this.setState({chosen: this.state.chosen - 1});
        }
    }

    render(){
        const Apps = () => (
                <div className="Container">
                <header>
                    <Panel/>
                    <Phone data={this.state}/>
                </header>
                <section>
                    <Filtering/>
                </section>
                <main>
                    <Main onCheckComp={this.checkCompare} onCheckChos={this.checkChosen} compare={this.state}/>
                </main>
                <footer>
                    <Itog/>
                </footer>
            </div>
        )

        return(
            <Switch>
                <Apps/>
            </Switch>
        )
    }
}
export default App
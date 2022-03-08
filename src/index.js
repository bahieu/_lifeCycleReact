import React, { Component } from "react"; // nạp thư viện react
import ReactDOM from "react-dom"; // nạp thư viện react-dom

class Counter extends Component {
    constructor(props) {
        console.log("Counter constructor ");
        super(props);
        this.state = {
            count: 0,
        };
    }

    increase() {
        this.setState({
            count: this.state.count + 1,
        });
    }

    decrease() {
        this.setState({
            count: this.state.count - 1,
        });
    }
    // mount unmount
    render() {
        console.log("Counter render");
        return (
            <div className="counter">
                <button onClick={() => this.decrease()}>-</button>
                <span> {this.state.count} </span>
                <button onClick={() => this.increase()}>+</button>
            </div>
        );
    }
    componentDidMount() {
        console.log("Counter did mount");
    }
    componentDidUpdate() {
        console.log("Counter did update");
    }
    componentWillUnmount() {
        console.log("Counter will unmount");
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCounter: true,
        };
    }
    componentDidUpdate() {
        console.log("App updated");
    }
    removeCounter() {
        this.setState({
            showCounter: false,
        });
    }

    render() {
        console.log("App render");
        return (
            <div className="App">
                <button onClick={() => this.removeCounter()}> Remove Counter </button>
                {this.state.showCounter && <Counter />}
            </div>
        );
    }
}

// Render component App vào #root element
ReactDOM.render(<App />, document.getElementById("root"));

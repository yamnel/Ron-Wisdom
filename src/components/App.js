import React from 'react'
import RSapi from '../api/RonSwansonApi'
import MessageBox from "./MessageBox";

// How long the message will be on the screen for in milliseconds
const messageDisplayTime = 10000;

class App extends React.Component {
    state = {
        show: false
    };

    recall = () => {
        const quote = RSapi.getQuote().then(payload => payload[0]);
        quote.then(response => this.setState({quote: response}, this.showNotification))
            .catch(err => console.log(err))
    };

    showNotification = () => {
        // In case of an asynchronous state miss-fire 
        if (!this.state.show) {
            this.setState({show: true});
        }

        const timeOut = setTimeout(() => {

            // In case of an asynchronous state miss-fire
            if (this.state.show) {
                this.setState({show: false});
            }

            // the subtraction is to give time for the fade transition to take effect
            // IT SHOULD BE AT LEAST 100 ms HIGHER THAN THE ANIMATION TIME.
        }, (messageDisplayTime - 700));

        this.setState({quoteTimeOut: timeOut})
    };

    handleOnCardClick = () => {
        if (this.state.quotesOn) {
            this.endInterval()
        } else {
            this.recall();
            this.beginInterval();
        }
    };

    beginInterval = () => {
        this.setState({quotesOn: true});

        const interval = setInterval(this.recall, messageDisplayTime);
        this.setState({interval})
    };

    endInterval = () => {
        clearInterval(this.state.interval);
        clearTimeout(this.state.quoteTimeOut);

        this.setState({quotesOn: false})
    };

    componentWillMount() {
        this.recall();
    }

    componentDidMount() {
        this.beginInterval();
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
        clearTimeout(this.state.quoteTimeOut);
    }

    render() {
        return (
            <div className={'view'}>
                <MessageBox
                    class={`fade-transition ${this.state.show ? 'show' : ''}`}
                    onCardClick={this.handleOnCardClick}
                    quote={this.state.quote}
                    quotesStatus={this.state.quotesOn}
                />
            </div>
        )
    }

}


export default App;

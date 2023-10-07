import { Component } from 'react';
import { SectionTitle } from './SectionTitle/SectionTitle';


export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onBtnClick = (key) => {
    console.log(key);
    switch (key) {
      case 'good':
        return this.setState((prevState) => ({ good: prevState.good + 1 }));
      case 'neutral':
        return this.setState((prevState) => ({ neutral: prevState.neutral + 1 }));
      case 'bad':
        return this.setState((prevState) => ({ bad: prevState.bad + 1 }));
      default:
        return;
    }
  }

  countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad;
  
  countPositiveFeedbackPercentage = () => Math.round((this.state.good * 100)/(this.state.good + this.state.neutral + this.state.bad));
  
  render() {
    const value = this.state;
  
    return (
      <SectionTitle
        value={value}
        onBtnClick={this.onBtnClick}
        total={this.countTotalFeedback()}
        positivePercentage={this.countPositiveFeedbackPercentage()}
      />
    );
  }
}



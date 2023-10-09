import { Component } from 'react';
import { SectionTitle } from './SectionTitle/SectionTitle';
import { FeedbackOption } from './FeedbackOptions/FeedbackOptions'
import { Notification } from "./Notification/Notification";
import { Statistics } from "./Statistics/Statistics";


export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onBtnClick = (key) => {

    return this.setState((prevState) => ({ [key]: prevState[key] + 1 }));
  }

  countTotalFeedback = () => {
    const totalFeedback = Object.values(this.state).reduce((acc, value) =>
      acc + value, 0);
    return totalFeedback;
  }
  
 
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state
    const total = this.countTotalFeedback()
    return Math.round((good * 100)/total);
  } 



  render() {
    const value = this.state;
  
    return (
      <>
        <SectionTitle title='Please leave feedback'>
            <FeedbackOption
              onBtnClick={this.onBtnClick}
              value={value}
            />
        </SectionTitle>

        <SectionTitle title='Statistics'>
          {this.countTotalFeedback() ? (
            <Statistics
              value={value}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification total={this.countTotalFeedback()} />
          )}    
        </SectionTitle>
      </>
    );
  }
}



import { FeedbackOption } from "components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "components/Statistics/Statistics";


export const SectionTitle = ({value, onBtnClick, total, positivePercentage}) => {
    
  return (
    <div>
        <h2>Please leave feedback</h2>
        <FeedbackOption onBtnClick={onBtnClick}/>
        <Statistics
              value={value}
              total={total}
              positivePercentage={positivePercentage}
        />
    </div>
  );
};




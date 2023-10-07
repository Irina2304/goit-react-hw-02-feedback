import { FeedbackOption } from "components/FeedbackOptions/FeedbackOptions";
import { Notification } from "components/Notification/Notification";
import { Statistics } from "components/Statistics/Statistics";
import { Container, NameSection } from "./SectionTitle.styled";



export const SectionTitle = ({value, onBtnClick, total, positivePercentage}) => {
    
  return (
    <Container>
        <NameSection>Please leave feedback</NameSection>
        <FeedbackOption onBtnClick={onBtnClick} />
        <NameSection>Statistics</NameSection>
        <Statistics
            value={value}
            total={total}
            positivePercentage={positivePercentage}
        />
        <Notification total={total}/>
    </Container>
  );
};




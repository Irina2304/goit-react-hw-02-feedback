import { Container, Btm } from "./FeedbackOption.styled";

export const FeedbackOption = ({ onBtnClick }) => {
  return (
    <Container>
        <Btm 
            type='button'
			id='good' 
            onClick={(evt) => onBtnClick(evt.target.id)}> Good</Btm>
        <Btm
            type='button'
			id='neutral' 
            onClick={(evt) => onBtnClick(evt.target.id)}> Neutral</Btm>
        <Btm
            type='button'
			id='bad' 
            onClick={(evt) => onBtnClick(evt.target.id)}> Bad</Btm>
    </Container>
  );
};
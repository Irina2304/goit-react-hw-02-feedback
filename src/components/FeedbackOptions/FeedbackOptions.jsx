import { Container, Btm } from "./FeedbackOption.styled";

export const FeedbackOption = ({ value, onBtnClick }) => {

    const nameBtn = Object.keys(value)
    
    return (
        <Container>
            {nameBtn.map((btn) => (
                <Btm
                    key={btn}
                    type='button'
                    onClick={() => onBtnClick(btn)}
                >  {btn}
                </Btm>))
            }
        </Container >)
    
}


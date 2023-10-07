
export const FeedbackOption = ({onBtnClick}) => {
  return (
    <div>
        <button 
            type='button'
			className='good' 
            onClick={(evt) => onBtnClick(evt.target.className)}> Good</button>
        <button
            type='button'
			className='neutral' 
            onClick={(evt) => onBtnClick(evt.target.className)}> Neutral</button>
        <button
            type='button'
			className='bad' 
            onClick={(evt) => onBtnClick(evt.target.className)}> Bad</button>
    </div>
  );
};
export const Statistics = ({value, total, positivePercentage}) => {
    const { good, neutral, bad } = value;

    return (
    <div>
        <h2>Statistics</h2>
        <ul>
            <li>Good: { good } </li>
            <li> Neutral: { neutral } </li>
            <li> Bad: { bad } </li>
            <li> Total: {total} </li>
            <li> Positiv feedback: {positivePercentage}%</li>
        </ul>
    </div>
  );
};
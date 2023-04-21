import { useState } from 'react'
const Button = ({ click, name }) => {
  return (
    <button onClick={click}>
      {name}
    </button>
  )
}
const StatisticsLine = ({ text, value }) => {
  return (<tr><td>{text}</td><td>{value}</td></tr>)
}
const Statistics = (props) => {
  if (props.good + props.neutral + props.bad > 0)
    return (
      <div>
        <h1>statistics</h1>
        <table>
        <tbody>
          <StatisticsLine text={"good"} value={props.good} />
          <StatisticsLine text={"neutral"} value={props.neutral} />
          <StatisticsLine text={"bad"} value={props.bad} />
          <StatisticsLine text={"all"} value={props.good + props.neutral + props.bad} />
          <StatisticsLine text={"average"} value={(props.good - props.bad) / (props.good + props.neutral + props.bad)} />
          <StatisticsLine text={"positive"} value={(props.good / (props.good + props.neutral + props.bad) * 100) + "%"} />
        </tbody>
        </table>
      </div>
    )
  else
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>)
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1> give feedback </h1>
      <Button click={() => setGood(good + 1)} name={"good"} />
      <Button click={() => setNeutral(neutral + 1)} name={"neutral"} />
      <Button click={() => setBad(bad + 1)} name={"bad"} />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App
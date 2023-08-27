import './index.css'

const DenominationItem = props => {
  const {value, onClickAmount} = props
  const onAmountButton = () => {
    console.log(`I am in denomination button`)
    onClickAmount(value)
  }
  return (
    <li className="list-container">
      <button type="button" className="button" onClick={onAmountButton}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem

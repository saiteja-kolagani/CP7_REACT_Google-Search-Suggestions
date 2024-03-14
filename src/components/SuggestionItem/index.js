// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {item, update} = props
  const {suggestion} = item
  const onClickArrow = () => {
    update(suggestion)
  }
  return (
    <li className="list-item">
      <p className="list-suggestion">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-icon"
        onClick={onClickArrow}
      />
    </li>
  )
}

export default SuggestionItem

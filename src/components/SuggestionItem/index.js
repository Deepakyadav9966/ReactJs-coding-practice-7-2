import './index.css'

const SuggestionItem = props => {
  const {eachList, onChangeSearchState} = props
  const {suggestion} = eachList
  const changeSearch = () => {
    onChangeSearchState(suggestion)
  }
  return (
    <li className="list-element">
      <p className="suggestion-name">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-logo"
        onClick={changeSearch}
      />
    </li>
  )
}

export default SuggestionItem

// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onChangeSearchState = suggestion => {
    this.setState({
      searchInput: suggestion,
    })
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <>
        <div className="main-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="logo"
          />
          <div className="card-container">
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-logo"
              />
              <input
                type="search"
                placeholder="Search Google"
                className="input-search"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
            </div>
            <ul className="ul-list">
              {searchResults.map(each => (
                <SuggestionItem
                  eachList={each}
                  key={each.id}
                  onChangeSearchState={this.onChangeSearchState}
                />
              ))}
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default GoogleSuggestions

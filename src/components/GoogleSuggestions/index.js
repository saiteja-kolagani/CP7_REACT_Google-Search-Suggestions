// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  constructor(props) {
    super(props)
    const {suggestionsList} = this.props
    this.state = {suggestions: suggestionsList, searchInput: ''}
  }

  onChnageSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  updateSearchBar = text => {
    this.setState({searchInput: text})
  }

  render() {
    const {suggestions, searchInput} = this.state
    const resultList = suggestions.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="content-container">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
              className="google-logo"
              alt="google logo"
            />
          </div>
          <div className="search-container">
            <div className="input-field">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <input
                type="search"
                className="input"
                placeholder="Search Google"
                onChange={this.onChnageSearchInput}
                value={searchInput}
              />
            </div>
            <ul className="list-container">
              {resultList.map(each => (
                <SuggestionItem
                  item={each}
                  key={each.id}
                  update={this.updateSearchBar}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions

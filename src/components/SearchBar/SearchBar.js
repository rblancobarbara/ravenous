import React from 'react';
import './SearchBar.css';

const sortByOptions = {
  'BestMatch': 'best_match',
  'HighestRated': 'rating',
  'MostReviewed': 'review_count'
}

getSortByClass(sortByOption) {
  return this.state.sortBy == sortByOption ? 'active' : '';
}

/*
handleSortByChange(sortByOption) {
  this.setState() = this.state.sortBy;
}
*/
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match',
    };
  }

  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
        return <li key={sortByOptionValue}>{sortByOption}</li>;
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            <li renderSortByOptions>Best Match</li>
            <li renderSortByOptions>Highest Rated</li>
            <li renderSortByOptions>Most Reviewed</li>
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>"Let's Go"< /a>
        </div>
      </div>
    )
  }
}

export default SearchBar;

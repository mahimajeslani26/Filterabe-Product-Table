import React, { Component } from 'react';
import SearchPanel from './SearchPanel';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showStocked: true,
      searchText: '',
    };
    this.handleCheck = this.handleCheck.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }
  handleCheck = (e) => {
    this.setState((prevState) => ({
      showStocked: !prevState.showStocked,
    }));
  };
  handleSearchInput = (e) => {
    this.setState({ searchText: e.target.value });
  };
  render() {
    return (
      <div className='FilterableProductTable'>
        <SearchPanel
          showStocked={this.state.showStocked}
          searchInput={this.state.searchText}
          handleCheck={this.handleCheck}
          handleSearchInput={this.handleSearchInput}
        />
        <ProductTable
          searchInput={this.state.searchText}
          showStocked={this.state.showStocked}
          table_data={this.props.table_data}
        />
      </div>
    );
  }
}

export default FilterableProductTable;

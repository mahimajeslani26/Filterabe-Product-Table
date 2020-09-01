import React, { Component } from 'react';
import './App.css';
import FilterableProductTable from './Components/FilterableProductTable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    fetch('http://localhost:9000/products')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ data });
      });
  }

  render() {
    const table_data = this.state.data;
    return (
      <div className='App'>
        <FilterableProductTable table_data={table_data} />
      </div>
    );
  }
}

export default App;

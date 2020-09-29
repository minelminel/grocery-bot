import React, { Component } from 'react';
import YAML from 'yaml';

import GroceryGroup from './components/grocerygroup';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Editor from './components/editor';
// TODO: fetch this data from backend
import groceries from './data/groceries.json';

/* 
 MOUNT
  - constructor
  - render
  - componentDidMount  *AJAX HERE*
 UPDATE
  - render
  - componentDidUpdate
 UNMOUNT
  - componentWillUnmount
*/

class App extends Component {
  /* Component State */
  state = {
    view: 'list',  // list | edit | shop
    items: [...groceries],
    text: null,  // TODO: text editor
  };

  /* --- React Lifecycle Methods --- */
  render() {
    return (
      <React.Fragment>
        <NavBar
          view={this.state.view}
          onViewChange={this.handleViewChange}
          neededItems={
            this.navbarCount()
          }
        />
        <main className="container mt-3 mb-3">{this.controller()}</main>
        <Footer />
      </React.Fragment>
    );
  }
  /* --- Event Handlers --- */
  handleToggle = (item) => {
    const items = [...this.state.items];
    const index = items.indexOf(item)
    items[index] = { ...item }
    items[index].purchased = !items[index].purchased
    this.setState({items})
  }

  handleCycle = (item) => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    items[index].value = (items[index].value + 1) % 4;
    this.setState({ items });
  };

  handleChange = (text) => {
    const items = this.transform(text);
    this.setState({ text, items });
  };

  handleViewChange = (view) => {
    this.setState({ view });
  };

  /* --- Utilities --- */
  navbarCount() {
    switch (this.state.view) {
      case 'list':
        return this.state.items.filter((item) => [2, 3].indexOf(item.value) !== -1)
        .length
      case 'shop':
        return this.state.items.filter((item) => [2, 3].indexOf(item.value) !== -1 && item.purchased===false).length
      default:
        return null;
    }
  }

  transform(text) {
    const yaml = YAML.parse(text);
    const arr = [];
    let id = 0;
    for (const [key, val] of Object.entries(yaml)) {
      for (const v of val) {
        arr.push({ category: key, name: v, id: id, value: 0 });
        id++;
      }
    }
    return arr;
  }

  controller = () => {
    switch (this.state.view) {
      case 'list':
        return (
          <GroceryGroup items={this.state.items} onCycle={this.handleCycle} />
        );
      case 'edit':
        return <Editor text={this.state.text} onChange={this.handleChange} />;
      case 'shop':
        return <GroceryGroup items={this.state.items.filter((item) => [2, 3].indexOf(item.value) !== -1)} onCycle={this.handleToggle} />;
      default:
        return <div>Uh oh!</div>;
    }
  };
}

export default App;

import React, { Component } from 'react';
import GroceryItem from './groceryitem';

function defaultComponent(items) {
  if (items.length === 0) {
    return (
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-6">Nothing to see here!</h1>
          <p class="lead">Try adding some items to your shopping list.</p>
        </div>
      </div>
    );
  }
}

export class GroceryGroup extends Component {
  render() {
    const { onCycle, items } = this.props;
    return (
      <React.Fragment>
        <div className="list-group">
          {items.map((item) => (
            <GroceryItem key={item.id} item={item} onCycle={onCycle} />
          ))}
        </div>
        {defaultComponent(items)}
      </React.Fragment>
    );
  }
}

export default GroceryGroup;

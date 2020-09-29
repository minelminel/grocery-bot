import React, { Component } from 'react';

class GroceryItem extends Component {
  render() {
    const { item, onCycle } = this.props;
    return (
      <button
        className={this.formatColor(item.value)}
        onClick={() => onCycle(item)}
        style={this.formatStyle(item.purchased)}
      >
        <div className="d-flex justify-content-between align-items-center">
          {item.name}
          <span className="badge badge-secondary badge-pill">
            {item.category}
          </span>
        </div>
      </button>
    );
  }

  formatColor(value) {
    const mapping = {
      0: 'light',
      1: 'success',
      2: 'warning',
      3: 'danger'
    };
    let _class = 'list-group-item list-group-item-action list-group-item-';
    _class += mapping[value];
    return _class;
  }

  formatStyle(purchased) {
    return { textDecoration: purchased === true ? 'line-through' : '' };
  }
}

export default GroceryItem;

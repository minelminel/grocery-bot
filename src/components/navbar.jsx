import React from 'react';

// Stateless Functional Component
const NavBar = (props) => {
  const { view, onViewChange, neededItems } = props;
  return (
    <nav className="navbar sticky-top navbar-light bg-light">
      <span className="navbar-brand">
        Grocery
        <span role="img">🥕</span>
        Bot
      </span>
      <span className="badge badge-pill badge-secondary">{neededItems}</span>
      <span>
        {view === 'list' ? (
          <button
            onClick={() => onViewChange('shop')}
            type="button"
            className="btn btn-primary btn-sm m-1"
          >
            Make My List
          </button>
        ) : null}
        {view === 'shop' ? (
          <button
            onClick={() => onViewChange('list')}
            type="button"
            className="btn btn-primary btn-sm m-1"
          >
            Back To Pantry
          </button>
        ) : null}
        {/* TODO: editor navbar button */}
        {/* <button
          onClick={() => onViewChange('edit')}
          type="button"
          className="btn btn-secondary btn-sm m-1"
        >
          EDIT
        </button> */}
      </span>
    </nav>
  );
};

export default NavBar;

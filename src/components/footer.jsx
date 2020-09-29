import React from 'react';

const style = {
  // position: 'absolute',
  textAlign: 'center',
  width: '100%',
  height: '40px',
  lineHeight: '20px',
  marginBottom: '10px',
  fontSize: 'small'
};

function Footer() {
  return (
    <footer>
      <div className="container" style={style}>
        <div>
          <span className="text-muted">
            handcrafted with 100% recycled electrons
          </span>
        </div>
        <div>
          <span className="text-muted">
            <a href="https://github.com/minelminel/grocerybot" target="_blank">
              tour our factory
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

var React = require('react');
var { Link, IndexLink } = require('react-router');

var Nav = React.createClass({
  render: function() {
    return (
      <nav className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Timer App</li>
            <li><IndexLink to="/" activeClassName="active-link">Timer</IndexLink></li>
            <li><Link to="/Countdown" activeClassName="active-link">Countdown</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              Created by <a href="http://www.mead.io" target="_blank">Andrew Mead</a> & WP
            </li>
          </ul>
        </div>
      </nav>
    );
  }

});

module.exports = Nav;

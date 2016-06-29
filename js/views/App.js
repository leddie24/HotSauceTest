var React = require('react');


var HotSauceGallery = require('./HotSauceGallery');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1 id="title">Hot Sauce List</h1>
        <HotSauceGallery />
      </div>
    );
  }
});

module.exports = App;
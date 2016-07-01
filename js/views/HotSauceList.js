import React from "react";
import { hashHistory } from "react-router";

import HotSauce from "./HotSauce";

export default class HotSauceList extends React.Component {
  // Bind component functions and set initial state to props.sauces
  constructor(props) {
    super(props);
    this.state = {
      sauces: this.props.sauces
    };
    this.setSauceState = this.setSauceState.bind(this);
    this.viewDetails = this.viewDetails.bind(this);
    this.filterList = this.filterList.bind(this);
    this._createHotSaucePanel = this._createHotSaucePanel.bind(this);
  }

  // Update image class and global sauceInfo when the component receives props
  componentWillReceiveProps() {
    this.setSauceState();
  }

  // Sets the sauce info once props are passed
  setSauceState() {
    if (this.props.sauces.length > 0) {
      this.setState({
        sauces: this.props.sauces
      });
    }
  }

  // Click handler to go to /#/details/:id
  viewDetails(idx) {
    hashHistory.push('details/' + idx);
  }

  // Filter list on input change
  filterList(e) {
    var filteredList = this.props.sauces;
    filteredList = filteredList.filter(function(sauce) {
      return sauce.title.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
    });
    this.setState({
      sauces: filteredList
    });
  }

  // Helper method to generate HotSauce components
  _createHotSaucePanel(sauce, idx) {
    let _this = this;
    return <HotSauce key={idx}
                    id={idx}
                    onClick={_this.viewDetails.bind(null, idx)}
                    info={sauce} />;
  }

  // Render page
  render() {
    return (
       <div>
          <h1>Hot Sauce List</h1>
          <input type="text"
                ref="filterText"
                placeholder="Search by Title"
                onChange={this.filterList} />
          <div className='galleryContainer'>
            {this.state.sauces.map(this._createHotSaucePanel)}
          </div>
       </div>
    );
  }
}

HotSauceList.propTypes = { sauces: React.PropTypes.array.isRequired };
HotSauceList.defaultProps = { sauces: [] };
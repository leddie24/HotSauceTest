import React from "react";
import { hashHistory } from "react-router";

import HotSauce from "./HotSauce";

export default class HotSauceList extends React.Component {
  constructor(props) {
    super(props);
    this.viewDetails = this.viewDetails.bind(this);
    this._createHotSaucePanel = this._createHotSaucePanel.bind(this);
  }

  // Click handler to go to details/:id
  viewDetails(idx) {
    hashHistory.push('details/' + idx);
  }

  // Helper method to generate HotSauce components
  _createHotSaucePanel(sauce, idx) {
    let _this = this;
    return <HotSauce key={idx}
                    id={idx}
                    onClick={_this.viewDetails.bind(null, idx)}
                    info={sauce} />;
  }

  // Render full page if component has sauces props, otherwise render empty page
  render() {
    if (this.props.sauces.length === 0) {
      return (<div></div>);
    } else {
      return (
           <div>
              <h1>Hot Sauce List</h1>
              <div className='galleryContainer'>
               {this.props.sauces.map(this._createHotSaucePanel)}
              </div>
           </div>
        );
    }
  }
}

HotSauceList.propTypes = { sauces: React.PropTypes.array };
HotSauceList.defaultProps = { sauces: [] };
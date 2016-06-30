import React from "react";
import { hashHistory } from "react-router";

import HotSauce from "./HotSauce";

export default class HotSauceList extends React.Component {
  constructor(props) {
    super(props);
    this.viewDetails = this.viewDetails.bind(this);
    this._createHotSaucePanel = this._createHotSaucePanel.bind(this);
  }

  viewDetails(idx) {
    hashHistory.push('details/' + idx);
  }

  _createHotSaucePanel(sauce, idx) {
    let _this = this;
    return <HotSauce key={idx}
                    id={idx}
                    onClick={_this.viewDetails.bind(null, idx)}
                    info={sauce} />;
  }

  render() {
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

HotSauceList.propTypes = { sauces: React.PropTypes.array };
import React from "react";
import { hashHistory } from "react-router";

import HotSauce from "./HotSauce";

export default class HotSauceList extends React.Component {
   // Bind component functions and set initial state to props.sauces
   constructor(props) {
      super(props);
      let sauceList = this.props.sauces;
      sauceList = sauceList.map(function(sauce) {
         sauce['visible'] = true;
         return sauce;
      });
      this.state = {
         sauces: sauceList
      };
      this.viewDetails = this.viewDetails.bind(this);
      this.filterList = this.filterList.bind(this);
      this._createHotSaucePanel = this._createHotSaucePanel.bind(this);
   }

   // Click handler to go to /#/details/:id
   viewDetails(idx) {
      hashHistory.push('details/' + idx);
   }

   // Filter list on input change.  Loops through sauce list, changes visible property depending on search
   filterList(e) {
      var filteredList = this.state.sauces;
      filteredList = filteredList.map(function(sauce) {
         sauce['visible'] = (sauce.title.toLowerCase().search(e.target.value.toLowerCase()) !== -1);
         return sauce;
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
                        info={sauce} 
                        visible={sauce.visible}
                        />;
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
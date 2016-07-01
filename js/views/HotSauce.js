import React from "react";
import Link from "react-router";

export default class HotSauce extends React.Component {
   // Bind component functions
   constructor(props) {
    super(props);
    this.viewDetails = this.viewDetails.bind(this);
  }

   // Click handler to view details
   viewDetails() {
      this.props.onClick();
   }

   // Render HotSauce item component
   render() {
      return (
         <div className="saucePanel"
               onClick={this.viewDetails}
               >
            <div className="sauceImgContainer">
               <img src={this.props.info.imageURL} 
                  alt={this.props.info.title} />
            </div>
            <div className="sauceTitle">
               <h2>{this.props.info.title}</h2>
               <p className="subtitle">{this.props.info.subtitle}</p>
            </div>
         </div>
      );
   }
}

HotSauce.propTypes = { info: React.PropTypes.object.isRequired };
import React from "react";
import PackageContext from "./PackageContext";
const Floor7 = () => {
  return (
    <PackageContext.Consumer>
      {context => (
        <React.Fragment>
          <div>
            <h3>Welcome to Floor 7</h3>
            <p>
              <strong>Company Name: </strong>
              {context.data.companyName}
            </p>
            <p>
              <strong>Recipient Name: </strong>
              {context.data.recipientName}
            </p>
            <p>
              <strong>Package: </strong>
              {context.data.package}
            </p>
            <p>
              <strong>Delivery status: </strong>
              {context.data.deliveryStatus}
            </p>
            <button onClick={context.updateDeliveryStatus}>
              Update Delivery Status
            </button>
          </div>
          <button onClick={context.yoyo}>Update Delivery Status</button>
        </React.Fragment>
      )}
    </PackageContext.Consumer>
  );
};

export default Floor7;

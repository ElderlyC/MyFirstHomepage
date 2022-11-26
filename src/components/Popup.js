import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default () => (
  <Popup
    trigger={<button> You know what to do</button>}
    position="right center"
  >
    <div>Time to Hydrate thyself my RN</div>
  </Popup>
);

import React, { forwardRef } from "react";
import { RxCross2 } from "react-icons/rx";

const InfoModal = forwardRef(
  ({ expandedItem, setExpandedItem, title, content, codeLink }, ref) => {
    return (
      <div
        ref={ref}
        className={`infoModal ${
          expandedItem === 0 ? "hideModal" : "showModal"
        }`}
      >
        <div className="cardContentHeader">
          <a className="button" href={codeLink} target="blank">
           Figma File
          </a>
          <RxCross2 onClick={() => setExpandedItem(0)} className="closeIcon" />
        </div>
        <h2>{title}</h2>
        {content}
      </div>
    );
  }
);

export default InfoModal;

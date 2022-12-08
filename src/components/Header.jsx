import React from "react";

const Header = (props) => {
  return (
    <div>
      <h1 className="page-title">{props.title}</h1>
      <p>
        Select an assset to see its corresponding metrics. Select a metric to
        see its corresponding assets. You may deselect an item to reset the
        other list. You may also search for either in thier respective search
        bars. You may use the reset button at the bottom to restore all items to
        each list.
      </p>
    </div>
  );
};

export default Header;

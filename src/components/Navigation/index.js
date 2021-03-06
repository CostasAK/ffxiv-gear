import "./style.scss";

import React from "react";

function NavigationItem(props) {
  return (
    <div
      className={"navigation-item" + (props.active ? " active" : "")}
      onClick={() => props.onClick(props.name)}
    >
      {props.name}
    </div>
  );
}

export function Navigation(props) {
  return (
    <div className="Navigation">
      <nav>
        {props.allPages.map((t) => (
          <NavigationItem
            name={t}
            onClick={props.setPage}
            active={props.getPage === t}
            key={t}
          />
        ))}
      </nav>
    </div>
  );
}

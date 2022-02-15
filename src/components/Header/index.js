import "./style.scss";

import { Component } from "react";
import logo from "../../assets/000032.png";

export class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <h1 className="title">
          <img alt="" src={logo} /> <span>FFXIV Gear</span>
        </h1>
      </header>
    );
  }
}

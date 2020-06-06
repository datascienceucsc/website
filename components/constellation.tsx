import React from "react";
import utilStyles from "../styles/utils.module.css";

export default class Constellation extends React.Component {
  componentDidMount() {
    // calls the javascript function that initializes the animation
    // @ts-ignore
    window.initPlugin();
  }

  // this doesnt create the canvas, the canvas is created in JS in constellation.js
  render() {
    return null;
  }
}

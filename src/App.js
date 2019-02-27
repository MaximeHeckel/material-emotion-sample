import React, { Component } from "react";
import styled from "@emotion/styled";
import { withTheme } from "emotion-theming";
import injectSheet from "react-jss/lib/injectSheet";
import Button from "@material-ui/core/Button";

const EmotionButton = styled("button")`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  border: 0px;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
  cursor: pointer;
  font-size: ${props => props.theme.typography.fontSize}px;
  text-transform: uppercase;
`;

// *** REACT JSS BUTTON IMPLEMENTATION START ***

const styles = {
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  }
};

const ReactJssButton = props => {
  return (
    <div>
      <Button className={props.classes.button}>material + react-jss</Button>
    </div>
  );
};

const MaterialReactJSSButton = injectSheet(styles)(ReactJssButton);

// *** REACT JSS BUTTON IMPLEMENTATION END ***

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <div>Material / Emotion</div>
        <MaterialReactJSSButton />
        <br />
        <EmotionButton>emotion + theme</EmotionButton>
      </React.Fragment>
    );
  }
}

export default withTheme(App);

import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import themes from "./theme";

const getTheme = () => {
  return themes.light;
};

const ThemeProvider = props => (
  <MuiThemeProvider theme={getTheme()}>
    <EmotionThemeProvider theme={getTheme()}>
      {props.children}{" "}
    </EmotionThemeProvider>
  </MuiThemeProvider>
);

export default ThemeProvider;

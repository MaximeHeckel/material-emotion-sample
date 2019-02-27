import { createMuiTheme } from "@material-ui/core/styles";

const common = {
  overrides: {
    MuiCheckbox: {
      root: {
        paddingTop: 4,
        paddingBottom: 4
      }
    },
    MuiRadio: {
      root: {
        paddingTop: 4,
        paddingBottom: 4
      }
    }
  },
  typography: {
    fontSize: 12,
    useNextVariants: true
  }
};

const commonPalette = {
  primary: {
    light: "rgb(183,216,247)",
    main: "#099cec",
    dark: "rgb(50,110,183)"
  }
};

const darkPalette = {
  ...commonPalette,
  type: "dark",
  background: {
    default: "#272727"
  },
  text: {
    primary: "#fff",
    secondary: "#70787d",
    disabled: "#b7bbbe"
  },
  mac: {
    navigation: {
      dark: "#5D5E60",
      light: "#727476"
    }
  },
  white: "#fff",
  black: "#000"
};

const dark = createMuiTheme({
  ...common,
  palette: darkPalette,
  components: {
    fileSharingList: {
      common: {
        borderColor: darkPalette.mac.navigation.dark
      }
    },
    engineStatusMac: {
      root: {
        backgroundImage: `linear-gradient(${darkPalette.mac.navigation.dark}, ${
          darkPalette.mac.navigation.light
        })`,
        color: "white"
      }
    }
  }
});

const lightPalette = {
  ...commonPalette,
  background: {
    default: "#f2f2f2",
    paper: "#fff"
  },
  text: {
    secondary: "#27343b",
    disabled: "#b7bbbe"
  },
  mac: {
    navigation: {
      dark: "#D1CFD1",
      light: "#ECECEC"
    }
  },
  white: "#fff",
  black: "#000"
};

const light = createMuiTheme({
  ...common,
  palette: lightPalette,
  components: {
    fileSharingList: {
      common: {
        borderColor: lightPalette.mac.navigation.dark
      }
    },
    engineStatusMac: {
      root: {
        backgroundColor: lightPalette.mac.navigation.dark,
        color: "black"
      }
    }
  }
});

export default {
  dark,
  light
};

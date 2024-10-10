import { createTheme } from "@mui/material";
import { pink } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    background: {
      default: "#000",
    },
    text: {
      primary: "#fff",
    },
    primary: {
      main: pink[500],
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          padding: "10px 32px",
          textTransform: "none",
          fontWeight: 700,
          fontSize: "1.8rem",

          "&.Mui-disabled": {
            background: pink[200],
            color: "#dadada",
          },

          variants: [
            {
              props: { variant: "outlined" },
              style: {
                borderWidth: "3px",
                color: "white",
                borderColor: "white",
              },
            },
            {
              props: { disabled: true },
              style: {
                backgroundColor: pink[500],
              },
            },
          ],
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
        },
      },
    },
  },
});

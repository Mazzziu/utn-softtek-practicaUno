import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NextUIProvider } from "@nextui-org/react";
import { createTheme } from "@nextui-org/react";

const darkTheme = createTheme({
    type: "dark",
    theme: {
        colors: {
            // generic colors
            white: "#ffffff",
            black: "#000000",
            //semantic colors
            blue100: "#CBECFE",

            blue900: "#002074",

            primaryLight: "$blue200", //  $blue600 on dark mode
            primary: "$blue500",
            primaryDark: "$blue600",
            primaryShadow: "$blue100", // $blue600 on dark mode
            secondaryLight: "$purple200", // $purple600 on dark mode
            secondary: "$purple500",
            secondaryDark: "$purple600",
            secondaryShadow: "$purple100", // $purple600 on dark mode
            successLight: "$green200", // $green600 on dark mode
            success: "$green500",
            successDark: "$green600",
            successShadow: "$green100", // $green600 on dark mode
            warningLight: "$yellow200", // $yellow600 on dark mode
            warning: "$yellow500",
            warningDark: "$yellow600",
            warningShadow: "$yellow100", // $yellow600 on dark mode
            errorLight: "$red200", // $red600 on dark mode
            error: "$red500",
            errorDark: "$red600",
            errorShadow: "$red100", // $red600 on dark mode
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <NextUIProvider theme={darkTheme}>
            <App />
        </NextUIProvider>
    </React.StrictMode>
);

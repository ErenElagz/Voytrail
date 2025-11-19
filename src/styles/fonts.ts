import localFont from "next/font/local";

export const openSauceOne = localFont({
  src: [
    {
      path: "../assets/fonts/OpenSauceOne-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/OpenSauceOne-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../assets/fonts/OpenSauceOne-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/OpenSauceOne-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/OpenSauceOne-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/OpenSauceOne-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/OpenSauceOne-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/OpenSauceOne-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../assets/fonts/OpenSauceOne-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../assets/fonts/OpenSauceOne-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-open-sauce-one",
});

const Fonts = {
  openSauceOne,
};

export default Fonts;

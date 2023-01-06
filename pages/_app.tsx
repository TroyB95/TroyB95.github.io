import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalTheme } from "../ThemeConfig";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

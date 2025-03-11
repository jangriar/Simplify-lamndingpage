import { useEffect } from "react";
import { AppProps } from "next/app";
import "../../globals.css";
import MainLayout from "../components/Layout/MainLayout";
import ErrorBoundary from "@/components/ErrorBoundary/ErrorBoundary";
import { MAINLAYOUT } from "@/components/Layout/types";
import { Inter, Roboto } from 'next/font/google'; // Import both fonts

// Initialize Inter as the primary font
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-inter', // Define CSS variable
});

// Initialize Roboto as secondary font
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-roboto', // Define CSS variable
});

const LayoutWrapper = (props) => {
  console.log(props);
  if (props.layout === MAINLAYOUT) {
    return <MainLayout>{props.children}</MainLayout>;
  } else {
    return <div>{props.children}</div>;
  }
};

export const App = ({ Component, pageProps }) => {
  useEffect(() => {
    console.log("App mounted");
  }, []);

  return (
    <div className={`${inter.variable} ${roboto.variable} ${inter.className}`}>
      <ErrorBoundary>
        <LayoutWrapper layout={Component.Layout}>
          <Component {...pageProps} />
        </LayoutWrapper>
      </ErrorBoundary>
    </div>
  );
};

export default App;
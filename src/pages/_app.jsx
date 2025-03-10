import { useEffect } from "react";
import { AppProps } from "next/app";
import "../../globals.css"; // Import global styles
import MainLayout from "../components/Layout/MainLayout"; // Import your main layout
import ErrorBoundary from "@/components/ErrorBoundary/ErrorBoundary";
import { MAINLAYOUT } from "@/components/Layout/types";

// For JSX file we'll remove TypeScript type definitions
const LayoutWrapper = (props) => {
  console.log(props);
  if (props.layout === MAINLAYOUT) {
    return <MainLayout>{props.children}</MainLayout>;
  } else {
    return <div>{props.children}</div>;
  }
};

// Define the App component
export const App = ({ Component, pageProps }) => {
  useEffect(() => {
    // Any global side effects can be handled here
    console.log("App mounted");
  }, []);

  return (
    <ErrorBoundary>
      <LayoutWrapper layout={Component.Layout}>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ErrorBoundary>
  );
};

export default App; // Export the App component as default

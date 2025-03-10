import { useEffect } from "react";

import "../../globals.css"; // Import global styles
import MainLayout from "../components/Layout/MainLayout"; // Import your main layout
import ErrorBoundary from "@/components/ErrorBoundary/ErrorBoundary";

// Define a simple layout wrapper
const LayoutWrapper = ({ children }) => {
  return <MainLayout>{children}</MainLayout>;
};

// Define the App component
export const App = ({ Component, pageProps }) => {
  useEffect(() => {
    // Any global side effects can be handled here
    console.log("App mounted");
  }, []);

  return (
    <ErrorBoundary>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ErrorBoundary>
  );
};

export default App; // Export the App component as default

import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme/theme-provider";
export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizzahop-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | pizza-shop" />
        <Toaster />
        <RouterProvider
          router={router}
        />;
      </ThemeProvider>
    </HelmetProvider>
  );
}

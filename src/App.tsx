
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider/themeProvider"
import "react-day-picker/style.css";
import { myR } from "./route/myRoute";




function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">

        <RouterProvider router={myR} />
      </ThemeProvider>
    </>
  )
}

export default App


import BaseStructure from "./BaseStructure"
import { ThemeProvider } from "./components/theme-provider/themeProvider"
import "react-day-picker/style.css";



function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <BaseStructure />
      </ThemeProvider>
    </>
  )
}

export default App

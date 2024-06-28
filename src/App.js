import logo from './logo.svg';
import './App.css';
// import theme from './theme.js';
import {createTheme, ThemeProvider } from '@mui/material/styles';
// import { createTheme } from '@mui/material/styles';
import Homepage from './pages/Homepage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import History from './pages/History'

const theme = createTheme({
    palette: {
        sidebarGray:"#D7C7F4",
        backgroundGray:"#F6F3FC",
        historyGray:"#CBBAEB"
    },
});
let router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/history",
    element: <History />,
  },
]);

function App() {
  return <ThemeProvider theme={theme}><RouterProvider router={router} /></ThemeProvider>
  // return <RouterProvider router={router} />
}

export default App;

import './styles/App.scss';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import List from "./components/List";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { appStore } from "./store/store";
import ButtonContainer from "./components/ButtonContainer";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />  
      <ButtonContainer />
      <Provider store={appStore}>
        <Outlet />
      </Provider>
      <Footer />    
    </div>
  );
}


export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "/list",
        element: <List />
      }
    ]
  }
]);

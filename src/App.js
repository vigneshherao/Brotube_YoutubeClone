import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPanel from "./components/MainPanel";
import Watch from "./components/Watch";


const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainPanel/>
      },
      {
        path:"/watch",
        element:<Watch/>
      }
    ]
  },
])

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;

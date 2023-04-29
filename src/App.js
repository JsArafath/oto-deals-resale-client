import "./App.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes/Routes";
import { Provider } from "react-redux";
import { store } from './app/store';
function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
      </Provider>
    </div>
  );
}

export default App;

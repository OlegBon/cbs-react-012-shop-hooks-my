import "./App.css";
import BestSellers from "./components/BestSellers/BestSellers";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <BestSellers />,
      v7_fetcherPersist: true,
    },
    {
      path: "/product/:productId",
      element: <Product />,
      v7_fetcherPersist: true,
    },
  ],
  // Керування поведінкою флагів для усунення помилок типу:
  // React Router Future Flag Warning: React Router will begin wrapping state updates in `React.startTransition` in v7. ...
  // В нас зараз React Router v6.28.0
  {
    future: {
      v7_startTransition: true, // Чекаэмо 7 версію. З цим флагом поки не виходить - npm install react-router-dom@next не знаходить 7
      v7_fetcherPersist: true,
      v7_relativeSplatPath: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

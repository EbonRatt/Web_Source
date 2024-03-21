import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "../public/style/style.scss";

//Layout សម្រាប់ Footer and Head អោយមិចចាប់បាច់ សរសរម្តងមួយៗ
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

// បង្កើត Route តាម endpoint of HTTP
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // ហៅ Layout មកប្រើ
    // របៀបប្រើ Route Children
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;

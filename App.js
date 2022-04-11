import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Student from "./components/Student"
import Teacher from "./components/Teacher"
import Footer from "./components/Footer";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Header />
      <Navbar />
      <Login />
      <Teacher />
      <Student />
      <Footer />

      {/* <BrowserRouter>

        <Routes>

          <Route path="/" elemen={<Header />} />
          <Route path="/" elemen={<Navbar />} />
          <Route exact path="./components/Login" elemen={<Login />} />
          <Route exact path="./components/Teacher" element={<Teacher />} />
          <Route exact path="./components/Student" element={<Student />} />
          <Route exact path="./components/Footer" element={<Footer />} />

        </Routes>

      </BrowserRouter> */}

    </div>

  );
}

export default App;

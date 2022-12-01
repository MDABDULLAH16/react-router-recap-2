import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Order from "./components/Order/Order";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Friends from "./components/Friends/Friends";
import Header from "./components/Header/Header";
import FriendDetail from "./components/FriendDetail/FriendDetail";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/order" element={<Order></Order>}></Route>
        <Route path="/friends" element={<Friends></Friends>}></Route>
        <Route
          path="/friend/:friendId"
          element={<FriendDetail></FriendDetail>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;

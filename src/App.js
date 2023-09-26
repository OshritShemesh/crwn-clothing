//Components
import Navigation from "./components/routes/navigation/navigation.component";
import Home from "./components/routes/home/home.component";
import SignIn from "./components/routes/sign-in/sign-in.component";

//router
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;

const Shop = () => <h1>shop comp.</h1>;

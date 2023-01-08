import { Outlet } from "react-router-dom/dist";
import "./App.css";
import MainContainer from "./component/MainContainer";

function App() {
  return (
    <MainContainer>
      <Outlet />
    </MainContainer>
  );
}

export default App;

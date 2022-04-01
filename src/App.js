import {useContext} from "react"
import {DarkModeContext} from "./context/darkModeContext"
import Home from "./pages/home/Home";
import Login from "./pages/login/Login"
import List from "./pages/list/List"
import Single from "./pages/single/Single"
import New from "./pages/new/New"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { userInputs, productInputs} from "./formSource"
import "./style/dark.scss"

function App() {
  const {darkMode} = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index  element={<List title="Add New User" category="users" />}/>
              <Route path=":userid" element={<Single />} />
              <Route path="new" element={<New title="Add New User" inputs={userInputs}/>} />
            </Route>
            <Route path="products">
              <Route index  element={<List title="Add New Product" category="products" />}/>
              <Route path=":productid" element={<Single />} />
              <Route path="new" element={<New title="Add New Product" inputs={productInputs}/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

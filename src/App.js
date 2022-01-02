import './App.css';
import {Button} from "react-bootstrap"
import Login from './Login';
import {BrowserRouter,Route} from "react-router-dom"
import Header from './Header';
import Register from './Register';
import AddProduct from "./AddProduct"
import UpdateProduct from "./UpdateProduct"
function App() {
  return (
    <div className="App">
   <BrowserRouter>
    <Header/>
    <Route path="/add">
       <AddProduct/>
     </Route>
     <Route path="/update">
       <UpdateProduct/>
     </Route>
     <Route path="/login">
       <Login/>
     </Route>
     <Route path="/register">
       <Register/>
     </Route>
     
     </BrowserRouter>

     </div>
  );
}

export default App;

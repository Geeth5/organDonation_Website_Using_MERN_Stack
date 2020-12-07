import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Route, Router} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/layouts/Header"
import Navbar from "./components/layouts/Navbar"
import Footer from './components/layouts/Footer';
import Organs from './components/Organs';
import Organ from './components/Organ';
import AddOrgan from './components/AddOrgan';
import EditOrgan from './components/EditOrgan';

function App() {
  const [posts, setPosts] = useState([])
  useEffect( () => {
    axios.get("http://localhost:8080/organs")
      .then(res => setPosts(res.data))
      .catch(error => console.log(error))
  })
  return (
    <div className="App">
      <Header></Header>
      <Navbar></Navbar>
      <Route exact path="/" render={() => <Organs posts={posts}></Organs>}></Route>
      <Route path="/organ/:id" 
        render={props => <Organ {...props} posts={posts}/>}/>
      <Route path="/update/:id" render={props => <EditOrgan {...props} posts={posts}/>}/>
      <Route path="/add-organ" component={AddOrgan}></Route>
      <Footer></Footer>
    </div>
  );
}

export default App;


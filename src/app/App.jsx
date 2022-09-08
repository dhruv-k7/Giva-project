import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router , Route, Routes} from "react-router-dom";
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"
import Post from "./pages/Post.jsx"

function App(){
    // const [Users,setUsers] = useState([]);
    const [Users,setUsers] = useState(()=>{
        const localData = localStorage.getItem('Users');
        return localData ? JSON.parse(localData):[];
    });
    useEffect(()=>{
        localStorage.setItem('Users',JSON.stringify(Users));
    },[Users])
    function addUser(user){
        setUsers(prev=>{
            return [...prev, user];
        })
    }
    function findUser(user){
        if(Users.find((element) => {
            return ((element.username === user.username) && (element.password === user.password));
        })){
            return 1;
        }
        else{
            return 0;
        }
    }
    var [Table,setTable] = useState([]);
    function addEntry(entry){
        setTable(prev=>{
            return [...prev, entry];
        })
    }
    function DeleteEntry(id){
        setTable(prev=>{
            return prev.filter((e,index)=>{
                if(id === index){
                    return false;
                }
                return true;
            })
        })
    }
    function UpdateEntry(id){
        var newtitle = prompt("Enter title");
        var newdescription = prompt("Enter Description");
        var newEntry = {title:newtitle,description:newdescription};
        const newTable = Table.map((item,index) => {
            if (index === id) {
              const updatedItem = newEntry;
              return updatedItem;
            }
      
            return item;
          });
      
        setTable(newTable);
    }
    return (
        <Router>
            <Routes>
                <Route path='/login' element={<Login findUser={findUser} />} />
                <Route path='/signup' element={<Signup addUser={addUser} />} />
                <Route path='/Post' element={<Post Table={Table} addEntry={addEntry} DeleteEntry={DeleteEntry} UpdateEntry={UpdateEntry}/>} />
            </Routes>
        </Router>
    );
}

export default App;
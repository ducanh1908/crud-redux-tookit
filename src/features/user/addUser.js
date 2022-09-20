import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import Button from "../../components/button";
import TextField from "../../components/textField";
import {useNavigate} from 'react-router-dom'
import { addUser } from "./userSlice";
import { v4 as uuidv4 } from 'uuid'

function AddUser(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch()
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const handleSubmit = () => {
    setUser({
        name:'',
        email:''
    })
    dispatch(addUser ({
      id:uuidv4(), 
      name: user.name,
      email: user.email
    }))
   
    navigate('/')
  }
  return (
    <div className="mt-10 max-w-xl">
      <TextField
        label={"Name"}
        value={user.name}
        onChange={(e)=> setUser({...user, name: e.target.value})}
        inputProps={{ type: "text", placeholder: "Input name" }}
      />
      <TextField
      value={user.email}
        onChange={(e)=> setUser({...user, email: e.target.value})}
        label={"Email"}
        inputProps={{ type: "text", placeholder: "Input email" }}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
}

export default AddUser;

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import Button from "../../components/button"
import TextField from "../../components/textField"
import { editUser } from "./userSlice"



export const EditUser = () => {
  const users = useSelector(store => {
    console.log(store);
    return store.users
  });
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const existingUser = users.filter(user => user.id == params.id);
  const { name, email } = existingUser[0];
  const [values, setValues] = useState({
    name,
    email
  });

  const handleEditUser = () => {
    setValues({ name: '', email: '' });
    dispatch(editUser({
      id: params.id,
      name: values.name,
      email: values.email
    }));
    navigate('/');
  }

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        values={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Jhon Doe' }}
      />
      <br />
      <TextField
        label="Email"
        values={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: 'email', placeholder: 'jhondoe@mail.com' }}
      />
      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  )
}


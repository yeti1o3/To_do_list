import { useFormik } from 'formik'
import React from 'react'
function callapi({values,bag})
{
    console.log("calling api",values,bag);
    //want to use setUser here
}
function Login({user,setUser}) {
    let Formik=useFormik({
        initialValues:{username:"sanskar",password:"sharma"},
        onSubmit:(values)=>{
            setUser({username:values.username,password:values.password})
            console.log("lll",values,user)}
    })
    console.log("props",user,setUser);
    console.log("Formik",Formik);
  return (
    <div>
        <input name="username" onChange={Formik.handleChange} value={Formik.values.username}/>
        <input name="password" onChange={Formik.handleChange} value={Formik.values.password}/>
        <button type='submit' onClick={Formik.handleSubmit}>submit</button>
    </div>
  )
}

export default Login
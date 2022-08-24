import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LoginUser } from '../Redux/Service/AuthService'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [form, setForm] = useState({
        username: '',
        password: ''
    })

    const onSubmit = () => {
        dispatch(LoginUser(form)).then((res) => {
            if(!res.error){
                navigate('/dashboard')
                console.log(res)
            }else{
                console.log(res)
            }
        })
       
    }


    return (
        <div style={{ width: '50%', margin: 'auto'}}>
            <div style={{ display: 'flex', flexDirection: 'column', }}>
                <label htmlFor="">username</label>
                <input type="text" onChange={(v) => setForm({ ...form, username: v.target.value })} />
                <label htmlFor="">password</label>
                <input type="password" onChange={(v) => setForm({ ...form, password: v.target.value })} />
            </div>
            <button style={{margin: 'auto', display: 'block', marginTop: '10px'}} onClick={onSubmit}>login</button>
        </div>
    )
}

export default Login
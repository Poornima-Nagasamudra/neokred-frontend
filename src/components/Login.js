import React, {useState} from 'react'
import axios from 'axios'
import {Button, Input, Form } from 'antd'


function Login(props){
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const [form] = Form.useForm()

    function handleChange(e){
        if(e.target.name === "email"){
            setEmail(e.target.value)
        }else if(e.target.name === "password"){
            setPassword(e.target.value)
        }
    }

    const handleSubmit=(values)=>{
        // const formData={
        //     email,
        //     password
        // }
        // console.log(formData)
      
        axios.post('http://localhost:4005/user/login',values, props)
        .then((res)=>{
            const result=res.data
            if(result.hasOwnProperty('errors')){
                alert(result.errors)
            }else{
                alert("successfly logedin")
                localStorage.setItem("token",result.token) 
                props.history.push("/") 
                props.handleAuth()
            }
        })
        .catch((err)=>{
            alert(err.message)
        })

    }
    return(
        <div>
            <h1> Login Component</h1>
            <Form onFinish={handleSubmit} form={form} name="basic" labelCol={{ span: 8, }} wrapperCol={{ span: 16,}}
                 style={{maxWidth: 500, }}   initialValues={{ remember: true,}}>
                
                <Form.Item label="email" name="email" rules={[ { required: true,  message: 'Please input your email!',}, ]}>
                    <Input placeholder="email" value={email} onChange={handleChange} />
                </Form.Item>

                <Form.Item label="password" name="password" rules={[ { required: true,  message: 'Please input your password!',}, ]}>
                  <Input.Password placeholder="password" value={password} onChange={handleChange} />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8,   span: 16,  }}>
                    <Button type="primary" htmlType="submit">Login</Button>
                </Form.Item> 
            </Form>              
        </div>
    )
}

export default Login
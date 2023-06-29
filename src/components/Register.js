import React, {useState} from 'react' 
import axios from 'axios'
import { Button,  Form, Input } from 'antd';


function Register(props){
    const[username, setUserName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
   // const[confirmpassword, setConfirmPassword] = useState('')
    const[dateofbirth, setDateOfBirth] = useState('')
    const[phonenumber, setPhoneNumber] = useState(0)
    const[address, setAddress] = useState('')
    const[city, setCity] = useState('')
    const[state, setState] = useState('')
    const[zipcode, setZipCode] = useState(0)
    const[country, setCountry] = useState('')
    const[securityquestion, setSecurityQuestion] = useState('')
    const[securityanswer, setSecurityAnswer] = useState('')

    const [form] = Form.useForm()

    function handleChange(e){
        if(e.target.name === "username"){
            setUserName(e.target.value)
        }else if(e.target.name === "email"){
            setEmail(e.target.value)
        }else if(e.target.name === "password"){
            setPassword(e.target.value)
        }
        // else if(e.target.name === "confirmpassword"){
        //     setConfirmPassword(e.target.value)
        // }
        else if(e.target.name === "dateofbirth"){
            setDateOfBirth(e.target.value)
        }else if(e.target.name === "phonenumber"){
            setPhoneNumber(e.target.value)
        }else if(e.target.name === "address"){
            setAddress(e.target.value)
        }else if(e.target.name === "city"){
            setCity(e.target.value)
        }else if(e.target.name === "state"){
            setState(e.target.value)
        }else if(e.target.name === "zipcode"){
            setZipCode(e.target.value)
        }else if(e.target.name === "country"){
            setCountry(e.target.value)
        }else if(e.target.name === "securityquestion"){
            setSecurityQuestion(e.target.value)
        }else if(e.target.name === "securityanswer"){
            setSecurityAnswer(e.target.value)
        }
    }

    const handleSubmit=(values)=>{
    //     const formData = {
    //         username:username,
    //         email:email,
    //         password:password,
    //         dateofbirth: dateofbirth,
    //         phonenumber:phonenumber,
    //         address: address,
    //         city :city,
    //         state: state,
    //         zipcode:zipcode,
    //         country:country,
    //         securityquestion: securityquestion,
    //         securityanswer:securityanswer
    //     }
    //    console.log(formData)       
        axios.post('http://localhost:4005/user/register',values, props)
        .then((res)=>{
            const result=res.data
            if(result.hasOwnProperty('errors')){
                alert(result.message)
            }else{
                alert("successfly created user")
                props.history.push("/login")
            }
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }

    return(
        < div>
            <h1> Register Component</h1>
            <Form onFinish={handleSubmit} form={form}  name="basic" labelCol={{ span: 8, }} wrapperCol={{ span: 16,}}
                 style={{maxWidth: 500, }} initialValues={{ remember: true,}}>

                <Form.Item  label="username" name="username" rules={[ { required: true,  message: 'Please input your username!',}, ]}>
                 <Input type="text" value={username} name="username"  onChange={handleChange}  />
                </Form.Item>

                <Form.Item  label="email" name="email" rules={[ { required: true,  message: 'Please input your email!',}, ]}> 
                 <Input type="text" value={email} name="email"  onChange={handleChange}  />
                </Form.Item>

                <Form.Item label="password" name="password" rules={[ { required: true,  message: 'Please input your password',}, ]}>
                 <Input type="text" value={password} name="password"  onChange={handleChange}  />
                </Form.Item>

                {/* <label>confirmpassword</label> */} 
                {/* <input type="text" value={confirmpassword} name="confirmpassword"  onChange={handleChange}  /><br/> */}

                <Form.Item label="dateofbirth" name="dateofbirth" rules={[ { required: true,  message: 'Please input your dateofbirth',}, ]}>
                  <Input type="date" value={dateofbirth} name="dateofbirth"  onChange={handleChange}  />
                </Form.Item>

                <Form.Item  label="phonenumber" name="phonenumber" rules={[ { required: true,  message: 'Please input your phone number',}, ]}>
                 <Input type="number" value={phonenumber} name="phonenumber"  onChange={handleChange}  />
                </Form.Item>

                <Form.Item  label="address" name="address" rules={[ { required: true,  message: 'Please input your address',}, ]}>
                  <Input type="text" value={address} name="address"  onChange={handleChange}  />
                </Form.Item>

                <Form.Item label="city" name="city" rules={[ { required: true,  message: 'Please input your city',}, ]}>
                  <Input type="text" value={city} name="city"  onChange={handleChange}  />
                </Form.Item>

                <Form.Item label="state" name="state" rules={[ { required: true,  message: 'Please input your state',}, ]}>
                 <Input type="text" value={state} name="state"  onChange={handleChange}  />
                </Form.Item>

                <Form.Item label="zipcode" name="zipcode" rules={[ { required: true,  message: 'Please input your zipcode',}, ]}>
                 <Input type="number" value={zipcode} name="zipcode"  onChange={handleChange}  />
                </Form.Item>

                <Form.Item label="country" name="country" rules={[ { required: true,  message: 'Please input your country',}, ]}>
                 <Input type="text" value={country} name="country"  onChange={handleChange}  />
                </Form.Item>

                <Form.Item label="securityquestion" name="securityquestion" rules={[ { required: true,  message: 'Please input your securityquestion',}, ]}>
                 <Input type="text" value={securityquestion} name="securityquestion"  onChange={handleChange}  />
                </Form.Item>

                <Form.Item label="securityanswer" name="securityanswer" rules={[ { required: true,  message: 'Please input your ecurityanswer',}, ]} >
                 <Input type="text" value={securityanswer} name="securityanswer"  onChange={handleChange}  />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8,   span: 16,  }}>
                   <Button type="primary" htmlType="submit"> Register </Button> 
                </Form.Item>
            </Form>
        </div>
    )
}

export default Register
import React, {useEffect, useState } from 'react'
import axios from 'axios'

function Account(props){   
    const[user,setUser] = useState({})

    useEffect(()=>{
        axios.get('http://localhost:4005/user/account',{
            headers:{
                'Authorization':localStorage.getItem('token')
            }
        })
        .then((res)=>{
           setUser(res.data)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[])

    return(
        <div>
            {Object.keys(user).length !== 0 &&  (
                <div>
                    <h3 style={{ color: "navy" }}>User Name:</h3>
                    <h4>{user.username}</h4>

                    <h3 style={{ color: "navy" }}>Email Id :</h3>
                    <h4>{user.email}</h4>

                    <h3 style={{ color: "navy" }}>address :</h3>
                    <h4>{user.address}</h4>

                    <h3 style={{ color: "navy" }}>City :</h3>
                    <h4>{user.city}</h4>

                    <h3 style={{ color: "navy" }}>Country :</h3>
                    <h4>{user.country}</h4>

                    <h3 style={{ color: "navy" }}>DOB :</h3>
                    <h4>{user.dateofbirth}</h4>

                    <h3 style={{ color: "navy" }}>Phone number :</h3>
                    <h4>{user.phonenumber}</h4>

                    <h3 style={{ color: "navy" }}>Zip code :</h3>
                    <h4>{user.zipcode}</h4>

                </div>
            )}
           
        </div>
    )
}

export default Account
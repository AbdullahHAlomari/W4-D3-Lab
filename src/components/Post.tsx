import { Box, Button, Input } from '@chakra-ui/react'
import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Post() {

    const [fName, setfName] = React.useState("")
    const [lName, setlName] = React.useState("")
    const [Email, setEmail] = React.useState("")
    const [Number, setNumber] = React.useState<any>()

    const navigator = useNavigate()

        const api = 'https://63e20921ad0093bf29c66077.mockapi.io/Signup'
        
    const PostData =()=>{
        if(fName.length >=3 && lName.length >=3 && Email.length >=3 && Number.length >=3){
            axios.post(api,{
                fName,
                lName,
                Email,
                Number
            }).then(res=>{
                console.log(res);
            })
            
            axios.get('https://63e20921ad0093bf29c66077.mockapi.io/Signup')
            navigator('/')
        }
        else{
            alert("Incorrect information")

        }
    }



  return (
    <Box>
        <Input onChange={e=>{setfName(e.target.value)}} placeholder='First name: '></Input>
        <Input onChange={e=>{setlName(e.target.value)}} placeholder='Last name: '></Input>
        <Input onChange={e=>{setEmail(e.target.value)}} placeholder='Email: '></Input>
        <Input onChange={e=>{setNumber(e.target.value)}} placeholder='Number: '></Input>
        <Button onClick={PostData} p={4} borderRadius={"18px"} bgColor={"#3C84AB"}>SEND</Button>
    </Box>
  )
}

export default Post

import React from 'react'
import axios from 'axios'
import { Box, ListItem, UnorderedList,Text, Button } from '@chakra-ui/react'
import {useNavigate} from 'react-router-dom'
// import 

function effect() {
    const navigate = useNavigate()

    // const retrive = ()=>{
    //     navigate('/Signup')
    // }


    const [data, setData] = React.useState([])

    React.useEffect(() => {
        axios.get("https://63e20921ad0093bf29c66077.mockapi.io/Signup").then(res=>{
            console.log("-----------------")
            console.log(res.data)
            console.log("-----------------")
            setData(res.data)
        })

    }, [])


    const DeleteItem=(id:string)=>{
        console.log(id);

        axios.delete(`https://63e20921ad0093bf29c66077.mockapi.io/Signup/${id}`).then(res=>{
            data.filter((del:any)=>{
                console.log(res);
                return del.id !=id
            })
        })
        
        
    }

  return (

    <>
    <Text>Hello, </Text>
    <Button p={10} mt={10} mb={10} onClick={()=>{navigate("/CreateBlog")}}>Send Data</Button>
        {/* <button onClick={()=>{navigate("/CreateBlog")}}>SEND DATA</button> */}
        {data.map((item:any)=>
                <ul>
                    <li key={item.id}>
                        {"Welcome, " + item.fName + " " + item.lName}
                    </li>
                    <li key={item.id}>
                        {"Your email is: " + item.Email}
                    </li>
                    <li key={item.id}>
                        {"Your number is: " + item.Number}
                    </li>
                    <Button mt={10} p={10} bgColor={"#eee"} onClick={()=> {DeleteItem(item.id)}} >Delete</Button>

                </ul>        
        )}

          </>
  )
}

export default effect

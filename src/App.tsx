import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Box } from '@chakra-ui/react'
import Effect from './components/Effect'
import { Route, Routes } from 'react-router-dom'
import Post from './components/Post'
import './index.css'





function App() {
  const [count, setCount] = useState(0)

  return (
    <Box>
      <Routes>
        <Route path='/' element={<Effect/>}></Route>
        <Route path='/CreateBlog' element={<Post/>}></Route>
        {/* <Route path='/Signup' element={<Signup/>}></Route> */}
      </Routes>
    </Box>
     
  )
}

export default App

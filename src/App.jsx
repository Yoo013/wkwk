import React, { useEffect } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AOS from "aos"
import "aos/dist/aos.css"
import Signup from "./components/SIgnup"
import Login from "./components/Login"

import App2 from "./App2"
import ForgotPassword from "./components/forgotPassword"
import App3 from "./App3"




function App() {
	useEffect(() => {
		AOS.init()
		AOS.refresh()
	}, [])

	return (
		<>
<BrowserRouter>
<Routes>

	<Route path = "/" element={<App3/>}></Route>
	<Route path = "/signup" element={<Signup/>}></Route>
	<Route path = "/login" element={<Login/>}></Route>
	<Route path = "/home" element={<App2/>}></Route>
	<Route path = "/forgotpassword" element={<ForgotPassword/>}></Route>
	
</Routes>
</BrowserRouter>
		</>
	)
}

export default App

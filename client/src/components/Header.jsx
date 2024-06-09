import React from 'react'
import { Button, Navbar, TextInput } from "flowbite-react";
import logo from '/logo.png'


function Header() {
  return (
    <>
    <div className='border-b border-border-color'>
       <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          <img src={logo} className="w-[250px]" alt="food delivery Logo" />
        </Navbar.Brand>
        
        <div className="flex md:order-2">
          <Button className='bg-app-color button'>Login</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
    </>
  )
}

export default Header
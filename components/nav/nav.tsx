import React from 'react'
import Logo from './logo'
import Menu from './menu'
import Search from './search'

export default function Nav() {
  return (
    <>
      <div className='container-fluid navbar'>
          <div className='row'>
            <Logo />
            <Menu />
            <Search />
          </div>
      </div>
      <style jsx>{`
.navbar{
  background-color:#000;
}
`}
      </style>
    </>
  )
}

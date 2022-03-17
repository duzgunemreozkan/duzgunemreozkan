import React from 'react'
import { Global, css } from '@emotion/react'
import 'bootstrap/dist/css/bootstrap.css'

import Nav from './nav/nav';

export default function Layout({ children }) {
  return (
    <div className='layout'>
      <Nav />
      {children}
      </div>
  )
}

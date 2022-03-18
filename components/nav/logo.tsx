import React from 'react'

export default function Logo() {
  return (
    <>
      <div className='logo'>
        <a href='/.'>Logo</a>
      </div>

      <style jsx>
        {`
        .logo{
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .logo a {
          color:#fff;
          font-size: 30px;
        }
      `}
      </style>
    </>
  )
}

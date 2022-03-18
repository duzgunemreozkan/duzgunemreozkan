import React from 'react'

export default function Menu() {
  return (
    <>
      <div className='menu'>
        <ul>
          <li><a href=''>Product</a></li>
          <li><a href=''>Marvell</a></li>
        </ul>
      </div>
      <style jsx>{`
    .menu{
      flex: 1;
      color:#fff;
    }
    .menu > ul {
        list-style:none;
        display:flex;
        flex-direction:row;
        justify-content:flex-start;
        background:#333333;
        margin:5px 12px;
        padding:0px;
    }
    .menu > ul > li {
      text-align: center;
    }
    .menu > ul > li > a {
      display:block;
      padding:10px 22px;
      color:#ffffff;
      text-decoration:none;  
    }
     .menu > ul > li > a:hover {
      text-decoration: underline;
    }
    `}</style>
    </>
  )
}

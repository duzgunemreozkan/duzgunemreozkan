import React from 'react'

export default function Search() {
  return (
    <><div className='searchbar'>

      <div className="input-group">
        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
        <button type="button" className="btn btn-outline-primary">search</button>
      </div>
    </div>

      <style jsx>{`
.searchbar{
  flex:1;
   display: flex;
  justify-content: center;
  align-items: center;
}

  .searchbar .btn-outline-primary{ 
   
}
   
    `}</style>
    </>
  )
}

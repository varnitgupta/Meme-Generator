import React from 'react'

function App11() {
  return (
    <div>
        <h1>
            CRUD Applcation
        </h1> 
        <div className='form'> 
            <label>Movie Name</label>
            <input type="text" placeholder='Movie name' name='movieName'></input> 
            <label>Movie review</label>
            <input type="text" placeholder='Movie review' name='movieReview'></input> 
            <button>Submit</button>
        
        </div>
    </div>
  )
}

export default App11
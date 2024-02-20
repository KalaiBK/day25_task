import React, { useState } from 'react'

function Filter({handleAll, handleCompleted, handleNotcompleted,}) {
    
    const [selectedFilter, setSelectedFilter] = useState("All")
    const changeFilterValue = (value) => {
        setSelectedFilter(value)
    }

    return (
        <div className='container d-flex flex-row mt-5 justify-content-between'>
            <div style={{fontWeight:'bolder'}}>My Todos</div>
            <div class="dropdown">
            <span style={{fontWeight:'bolder'}}>Status Filter: </span>
                <button class="btn btn-danger dropdown-toggle" id='filterButton' type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {selectedFilter}
                <ul class="dropdown-menu">
                    <li><button class="dropdown-item" type="button" onClick={(e) => { changeFilterValue("All"); handleAll()}}>All</button></li>
                    <li><button class="dropdown-item" type="button" onClick={(e) => { changeFilterValue("Completed"); handleCompleted()}}>Completed</button></li>
                    <li><button class="dropdown-item" type="button" onClick={(e) => { changeFilterValue("Not Completed"); handleNotcompleted()}}>Not Completed</button></li>
                </ul>
                </button>
            </div>
        </div>
    )
}

export default Filter
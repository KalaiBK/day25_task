import React from 'react'

function Card({ cards, handleStatus, handleDelete, handleEdit }) {
    const edit = () => {
        console.log("Edit")
    }
    return (
        <div className='container'>
            <div className='row'>
                {cards.map(card => {
                    // console.log(card.name)
                    return <div className='col lg-4 mt-4' key={card.name}>
                        <div className="card bg-success-subtle" style={{ width: '25rem', height: '15rem' }}>
                            <div className="card-body">
                                <p>Name: {card.name}</p>
                                <p>Description: {card.description} </p>
                                <div className='dropdown'>
                                    <span>Status:</span>
                                    <button className={card.status ? "btn btn-success dropdown-toggle ms-1" : "btn btn-danger dropdown-toggle ms-1"} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {card.status ? "Completed" : "Not Completed"}
                                        <ul className="dropdown-menu">
                                            {card.status ?
                                                <li>
                                                    <button className="dropdown-item" type="button" id={card.name} onClick={(e) => { handleStatus(e.target.id) }} >Not Completed</button>
                                                </li>
                                                :
                                                <li>
                                                    <button className="dropdown-item" type="button" id={card.name} onClick={(e) => { handleStatus(e.target.id) }}>Completed</button>
                                                </li>}
                                        </ul>
                                    </button>
                                </div>
                                <div className='mt-5 d-flex justify-content-end'>
                                    <button type="button" className="btn btn-success"  id={card.name} onClick={(e) => handleEdit(e.target.id)} disabled={card.status ? "disabled" : undefined}>Edit</button>

                                    <button type="button" className="btn btn-danger ms-3" id={card.name} onClick={(e) => { handleDelete(e.target.id) }}>Delete</button>

                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>

    )
}

export default Card
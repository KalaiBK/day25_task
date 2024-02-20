import React, { useEffect } from 'react'
import { useState } from 'react'
import Card from './Card';

function Createtodo({func,edit,handleUpdate,editName,editDescription}) {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    
    useEffect(() => {
        // console.log(editName)
      edit ? (setName(editName), setDescription(editDescription)) : (setName(''), setDescription(''))
    }, [edit])
    

    const handleName = (event) => {
        setName(event.target.value)
    };

    const handleDescription =(event) => {
        setDescription(event.target.value)
    };
    return (
        <div>
            <div className='text-center'>
                <h4 style={{color:'green'}}>My todo</h4>
            </div>
           
            <form className='row g-3 mt-5' style={{marginLeft:'15rem'}}>
                   
                    <div className='col-4'>
                    <input type="text" className="form-control" id="inputPassword2" placeholder="Todo Name" onChange={handleName} value={name} />
                    </div>
                    <div className='col-4'>
                    <input type="text" className="form-control" id="inputPassword2" placeholder="Todo Description" onChange={handleDescription} value={description} />
                    </div>
                    <div className='col-2'>
                        { edit ? <button type="button" class="btn btn-success" onClick={() => handleUpdate(name, description)}>Update</button> : <button type="button" class="btn btn-success" onClick={() => {func(name,description); setName(""); setDescription("")}}>Add Todo</button> }
                    </div>

            </form>
        </div>
    )
}

export default Createtodo
import React from "react"
import Delete from './deleteItem'

function TodoItem(prop) {
    const styleCompleteItem ={
        color : '#cdcdcd'
    }

    return (
        <div className="row mb-1">
            <div className='col-9'>
               <label
                    className="text-left align-self-center"
                    style={prop.item.complete ? styleCompleteItem : null}
                >{prop.item.status_task}
                </label>
            </div>

            <div className='col-1 form-check text-center align-self-center'>
                 <input className=""
                   type="checkbox"
                   checked={prop.item.complete}
                   onChange={() => prop.handleChange(prop.item.id)}
                 />
            </div>

            <div className='col-2 align-self-center'>
                {prop.item.complete ? <Delete id={prop.item.id}/>:null}
            </div>
        </div>
    )
}

export default TodoItem
import React from "react";

function deleteItem(prop){


    function todelete() {
        console.log('remove id '+prop.id)
        fetch(`http://127.0.0.1:8000/api/taskData/${prop.id}/` , {
                      method: 'Delete',
                      headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                      },
                      // body: JSON.stringify({complete: !todo.complete})
                    })
        window.location.reload()
    }

     return (
            <button
                className='btn btn-sm btn-outline-danger'
                onClick={()=>{todelete()}}
            >remove</button>
        );
}

export default deleteItem

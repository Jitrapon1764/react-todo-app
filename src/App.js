import React from "react"
import Add from './AddItem'
import TodoItem from "./TodoItem";


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading : true,
            todos : null,
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id){
        this.setState(prevState => {
            const updateState = prevState.todos.map(todo =>{
                if(todo.id === id){
                    fetch(`http://127.0.0.1:8000/api/taskData/${id}/` , {
                      method: 'PATCH',
                      headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({complete: !todo.complete})
                    })
                    return {
                        ...todo,
                        complete: !todo.complete
                    }
                }

                return todo
            })
            return{
                todos : updateState
            }

        })
    }

    componentDidMount() {
        fetch("http://127.0.0.1:8000/api/taskData/")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    isLoading:false,
                    todos:data
                })
            })
    }
    render() {
        return (
            <div className="card ml-auto mr-auto mt-5" style={{maxWidth:'50rem'}}>
                <div className="card-header">
                    <div className='form-row'>
                        <div className='col'>
                            <h1>ToDo List</h1>
                        </div>
                        <div className='col align-self-center'>
                             <Add/>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    {!this.state.isLoading ?
                        this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
                        :'Dataloading...'
                    }
                </div>
            </div>
        );
    }
}

export default App
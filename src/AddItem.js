import React from "react";



class add extends React.Component{
    constructor() {
        super();
        this.state={
            text:'',
            complete:false
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    setdata(){
        if (this.state.text===''){
            alert('Please enter in the text box.')
        }
        else{
            var data = {
               "status_task": this.state.text,
               "complete": this.state.complete
            }
           fetch("http://127.0.0.1:8000/api/taskData/", {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data)
            })
            window.location.reload()
        }
    }

    render() {
        return (
        <div className='form-inline ml-5'>
            <input
                className='form-control'
                name="text"
                value={this.state.text}
                onChange={this.handleChange}
                placeholder={'your todo List'}

            />
            <button
                className='btn btn-success ml-2'
                onClick={()=>{this.setdata()}}
            >Add</button>
        </div>

        );
    }
}

export default add;
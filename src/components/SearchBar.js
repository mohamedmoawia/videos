import React from 'react';

class SearchBar extends React.Component{
    state ={
        input: ''
    }
    onInputChange = (event)=>{
        this.setState({
            input: event.target.value
        })
    }
    onFormSubmit = event=>{
        event.preventDefault();
        this.props.onFormSubmit(this.state.input);
    }
    
    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit} className="form-group bg-dark text-white py-2 px-2 my-2" style={{width: '75%', marginLeft: 'auto',marginRight:'auto'}}>
                    <label>Video Search:</label>
                    <input value={this.state.input} onChange={this.onInputChange} className="form-control mb-3 " type="text" placeholder="search for video" />
                </form>
            </div>
        );
    }
}

export default SearchBar
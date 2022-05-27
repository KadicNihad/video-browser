import React, { Component } from 'react'

export default class SearchBar extends Component {
    state= {
        searchTerm:'',
        invalidMsg:''
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }
    handleSubmit = (event) => {

        event.preventDefault();

         if(this.state.searchTerm === '') {
             this.setState({invalidMsg:'Please insert something'})
         } else {

            this.setState({invalidMsg:''})
            const {searchTerm} = this.state;
            const {onFormSubmit} = this.props;

            onFormSubmit(searchTerm);
         }
    }

  render() {
    return (
      <div  style={{padding:'25px'}}>
          <form onSubmit={this.handleSubmit}>
              <input onChange={this.handleChange} style={{width:'90%',height:'35px'}} label='Search...' /> &nbsp;
              <button onClick={this.handleSubmit} className='btn btn-secondary' >Search</button>
              <h3 style={{color:'red'}}>{this.state.invalidMsg}</h3>
          </form>
      </div>
    )
  }
}

import React from 'react';

// import axios from 'axios';


class AddUser extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            name : '',
      
        };
        this.handleChange = this.handleChange.bind(this);
    }
 
    // componentDidMount() {
    //     axios.get("http://127.0.0.1:8000/user/")
    //         .then(response => response.data)
    //         .then(data => {
    //             this.setState({
    //                 user : data
    //             }); 
    //         });
    // }

    handleChange(event) {
        this.setState({ name: event.target.value,
                    });
        } 


    

    render(){  
        return(
            <div>
                <h2> Add User </h2>
                <form>
                    <label>
                        Name:
                        <input type="text" value={this.state.name} onChange={this.handleChange} />
                    </label>
                   
                </form>                    
            </div>
        )
    };
}

export default AddUser;

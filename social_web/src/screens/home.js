import React from 'react';

import axios from 'axios';


class Home extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            user : []    
        }
    }
 
    componentDidMount() {
        axios.get("http://127.0.0.1:8000/user/")
            .then(response => response.data)
            .then(data => {
                this.setState({
                    user : data
                }); 
            });
    }

    alldata() {
        return this.state.user.map((item,index) => (            
            <div key={index}>
                <h1>
                {item.name}
                </h1>
                
            </div>  
            )            
        )
    }

    render(){
        console.log('checking....')
        const user = this.state.user; 
        console.log(user)       
        return(
            <div>
                <h2> Data </h2>
                    <div>
                        {this.alldata()}
                    </div>
            </div>
        )
    };
}

export default Home;

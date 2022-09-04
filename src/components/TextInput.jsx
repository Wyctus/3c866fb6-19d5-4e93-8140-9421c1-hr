import React, {Component} from "react";



class TextInput extends Component {
    constructor(props){
        super(props);

        this.state = {
            error: ''
        }

        this.onChange = this.onChange.bind(this);
    }

    render(){
        return <div style={style.container}>
            <input style={style.input} type="text" onChange={(event) => this.onChange(event.target.value)}/>
            <span style={style.error}>{this.state.error}</span>
        </div>
    }

    async onChange(value) {
        if(0 < value.length && value.length < 4) {
            this.setState({error: "Username must be at least 4 characters long!"});
            

        }else {
            // Long enough so remove the error
            this.setState({error: ""});

            // Send the request to validate
            const taken = await this.validateUsername(value);
            if(taken){
                this.setState({error: "The username is taken!"});
            }
        }
    } 

    async validateUsername(username) {
        const url = `https://hxj1tck8l1.execute-api.us-east-1.amazonaws.com/default/users/taken?username=${username}`;
        
        const resp = await fetch(url);
        const data = await resp.json();

        console.log(data.taken);

        return data.taken;
    }
}

const style = {
    container: {
        display: 'flex',
        flexDirection: 'column' 
    },
    input: {
        marginBottom: 15
    },
    error: {
        color: "red"
    }
}

export default TextInput;
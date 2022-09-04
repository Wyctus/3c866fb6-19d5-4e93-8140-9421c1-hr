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

    onChange(value) {
        if(0 < value.length && value.length < 4) {
            this.setState({error: "Username must be at least 4 characters long."});
            

        }else {
            this.setState({error: ""});
        }
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
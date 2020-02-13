import React, { Fragment, Component } from 'react';

class Home extends Component {

    state={
        text:{
          recipient:"",
          textMessage:""
        }
      }
    
      sendText = _ =>{
        const {text} = this.state
    try{
        fetch(`http://localhost:5000/sendtext?recipient=${text.recipient}&&textMessage=${text.textMessage}`)
    }          
        catch(err){console.error(err)}
      }
    
    render() {
        const {text} = this.state
        return (
            <Fragment>
                 <h3>Form</h3>


    <label> Number </label><input placeholder="Enter Number" cols="30" rows="1" value={text.recipient}
    onChange={e=> this.setState({text:{...text, recipient: e.target.value}})}/>
<br/> <br/>
    <label> Message </label><input placeholder="Enter Message"cols="30"
        rows="1" value={text.textMessage} onChange={e=> this.setState({text:{...text, textMessage: e.target.value}})}/>

   <br/> <br/>
            <button onClick={this.sendText}> Send </button>
            </Fragment>
        );
    }
}

export default Home;
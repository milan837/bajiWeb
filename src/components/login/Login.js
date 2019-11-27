import React,{Component, Fragment} from 'react'
import { Card, CardContent, CardHeader ,TextField,Button} from '@material-ui/core';

const card={
    marginTop:'100px',
    width:'400px',
    textAlign:'left'
}


const padding={
    paddingLeft:'20px',
    paddingRight:'20px',
    paddingTop: '5px',
    paddingBottom:'5px'
}

class Login extends Component{

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            usernameErrorText:'',
            passwordErrorText:'',
            usernameError:false,
            passwordError:false
        };
    }

    onHaldler=(e)=>{
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    validate=()=>{
        let isError=false;
        const field=this.state;
        if(!field.username){
            isError=true;
            field.usernameError=true;
            field.usernameErrorText="Please enter the username"
        }

        if(!field.password){
            isError=true;
            field.passwordError=true;
            field.passwordErrorText="Please enter the password"
        }

        if(field.username && field.password){
            isError=false;
            field.usernameError=false;
            field.passwordError=false;
            field.passwordErrorText="";
            field.usernameErrorText="";
        }

        this.setState({
            field
        });

        return isError;
    }

    onLogin=(e)=>{
       const isErrorValidate=this.validate();
       if(!isErrorValidate){
           this.props.history.push("/home");
       }
    };
    render(){
        return(
            <Fragment>
                <center>
                    <Card style={card} >
                       <CardHeader
                       title="Login"
                       subheader="Admin Please Login" style={padding}/>
                       <CardContent style={padding}>
                           <div>
                           <TextField
                                id="filled-basic"
                                label="Username"
                                type="text"
                                margin="normal"
                                variant="filled"
                                fullWidth
                                name="username"
                                data={this.state.username}
                                onChange={this.onHaldler}
                                error={this.state.usernameError}
                                helperText={this.state.usernameErrorText}
                            />
                           </div>
                           <div style={{marginTop:'0'}}>
                           <TextField
                           type="password"
                                id="filled-basic"
                                label="Password"
                                margin="normal"
                                variant="filled"
                                fullWidth
                                name="password"
                                data={this.state.password}
                                onChange={this.onHaldler}
                                error={this.state.passwordError}
                                helperText={this.state.passwordErrorText}
                            />
                           </div>
                       </CardContent>
                       <div a style={padding}>
                            <Button variant="contained" color="primary" fullWidth style={{height:'50px',marginBottom:'20px'}}
                            onClick={this.onLogin}>
                                Login
                            </Button>
                       </div>
                    </Card>
                </center>
            </Fragment>
        );
    }
}

export default Login;
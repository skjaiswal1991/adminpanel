import React, { Component } from 'react';
import { Form,Button,Container } from './../../../node_modules/react-bootstrap/';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn,MDBNav,MDBNavItem,MDBNavLink,MDBTabContent,MDBTabPane } from 'mdbreact';
import axios from 'axios';

class Login extends Component {

    constructor(props){
            super(props);
            this.state = {activeItem: "1"};
    }

    input_handle = (e) =>{
           const {name,value} = e.target;
           this.setState({ [name] : value});
    }

    submit_signup = (e) =>{
        e.preventDefault();
        console.log(e.target.elements);

        let name = e.target.elements.name.value;
        let email = e.target.elements.email.value;
        let password = e.target.elements.password.value;
        console.log("name"+name);
        if(!name){            
            alert("Please Enater Name");
            e.target.elements.name.focus();
        }
        
        let fdata = {'action': 1,'name':name,'email':email,'passwors':password};
        this.saveData(fdata);
        
    }

    //componentDidMount() {
        saveData = async(data) =>{
            const response = await axios.post(
                'http://localhost/express/reactAdmin/services.php',
                data,
                { headers: { 'Content-Type': 'application/json' } }
            )
            .then((res)=>{
                console.log(res);
            })
        }
     // }

  
      toggle = tab => e => {
        if (this.state.activeItem !== tab) {
          this.setState({
            activeItem: tab
          });
        }
      };


    render() { 
        return ( 
            <MDBContainer>

            <MDBNav className="nav-tabs mt-3">
                <MDBNavItem>
                        <MDBNavLink to="#" active={this.state.activeItem === "1"} onClick={this.toggle("1")} role="tab" >
                        Login
                        </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                        <MDBNavLink to="#" active={this.state.activeItem === "2"} onClick={this.toggle("2")} role="tab" >
                        Register
                        </MDBNavLink>
                </MDBNavItem>          
        </MDBNav>
        <MDBTabContent activeItem={this.state.activeItem} >
          <MDBTabPane tabId="1" role="tabpanel">
          <MDBRow>
                    <MDBCol md="6">
                    <form>
                        <p className="h5 text-center mb-4">Sign in</p>
                        <div className="grey-text">
                        <MDBInput
                            label="Type your email"
                            icon="envelope"
                            group
                            type="email"
                            name="email"
                            validate
                            error="wrong"
                            success="right"
                        />
                        <MDBInput
                            label="Type your password"
                            icon="lock"
                            name="password"
                            group
                            type="password"
                            validate
                        />
                        </div>
                        <div className="text-center">
                        <MDBBtn>Login</MDBBtn>
                        </div>
                    </form>
                    </MDBCol>
                </MDBRow>
          </MDBTabPane>
          <MDBTabPane tabId="2" role="tabpanel">
            <MDBRow>
                <MDBCol md="6">
                <form onSubmit={this.submit_signup}>
                    <p className="h5 text-center mb-4">Sign up</p>
                    <div className="grey-text">
                    <MDBInput
                        label="Your name"
                        icon="user"
                        group
                        type="text"
                        name="name"
                        validate
                        error="wrong"
                        onChange={this.input_handle}
                        value ={this.state.name}
                        success="right"
                    />
                    <MDBInput
                        label="Your email"
                        icon="envelope"
                        group
                        type="email"
                        name="email"
                        validate
                        error="wrong"
                        onChange={this.input_handle}
                        value ={this.state.email}
                        success="right"
                    />
                    <MDBInput
                        label="Confirm your Password"
                        icon="exclamation-triangle"
                        group
                        type="password"
                        name="password"
                        validate
                        error="wrong"
                        onChange={this.input_handle}
                        value ={this.state.password}
                        success="right"
                    />
                    <MDBInput
                        label="Your Confirm password"
                        icon="lock"
                        group
                        type="password"
                        name='cnfpasss'
                        onChange={this.input_handle}
                        value ={this.state.cnfpasss}
                        validate
                    />
                    </div>
                    <div className="text-center">
                    <MDBBtn color="primary" type="submit">Register</MDBBtn>
                    </div>
                </form>
                </MDBCol>
            </MDBRow>
          </MDBTabPane>
          
        </MDBTabContent>

                
            </MDBContainer>
                // <Container>
                //         <h3>Login</h3>
                //         <Form>
                //             <Form.Group controlId="formBasicEmail">
                //                 <Form.Label>Email address</Form.Label>
                //                 <Form.Control type="email" placeholder="Enter email" />
                //                 <Form.Text className="text-muted">
                //                 We'll never share your email with anyone else.
                //                 </Form.Text>
                //             </Form.Group>

                //             <Form.Group controlId="formBasicPassword">
                //                 <Form.Label>Password</Form.Label>
                //                 <Form.Control type="password" placeholder="Password" />
                //             </Form.Group>
                //             <Button variant="primary" type="submit">
                //                 Submit
                //             </Button>
                //         </Form>
                // </Container>
         ); 
    }
}
 
export default Login;
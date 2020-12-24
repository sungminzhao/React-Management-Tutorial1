import React from 'react';

class Customer extends React.Component{
    render(){
        return (
        <div>
            <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name}/>
            <CustomerInfo Birthday={this.props.Birthday} Gender={this.props.Gender} Job={this.props.Job}/>
        </div>
        )
    }
}

class CustomerProfile extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.image} alt="profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.Birthday}</p>
                <p>{this.props.Gender}</p>
                <p>{this.props.Job}</p>
            </div>
        )
    }
}
export default Customer;
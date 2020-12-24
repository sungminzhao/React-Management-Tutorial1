import React, { Component } from 'react'
import './App.css';
import Customer from './components/customer';

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/128/128/1',
  'name': '조성민',
  'Birthday': '961222',
  'Gender': 'male',
  'Job' : 'student'
 },
 {
  'id': 2,
  'image': 'https://placeimg.com/128/128/2',
  'name': '홍길동',
  'Birthday': '961222',
  'Gender': 'male',
  'Job' : 'student'
 },
 {
  'id': 3,
  'image': 'https://placeimg.com/128/128/3',
  'name': '이순신',
  'Birthday': '961222',
  'Gender': 'male',
  'Job' : 'student'
 }
]

class App extends Component {
  render() {
    return (
    <div>
      {
        customers.map(c => {
        return(
        <Customer
        key={c.id}
         id={c.id}
         image={c.image}
         name={c.name}
         Birthday={c.Birthday}
         Gender={c.Gender}
         Job={c.Job}
        />
        );
      })
  }
    </div>
  );
}
}

export default App;

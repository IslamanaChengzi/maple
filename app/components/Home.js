import React from 'react';
import { Link, Redirect } from 'react-router';

class Home extends React.Component {
  render() {
    return (
      <div className='alert alert-info'>
        Hello from Home Component
        <Link to="a">home2</Link>
      </div>
    );
  }
}

export default Home;
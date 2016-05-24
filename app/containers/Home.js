import React from 'react';
import { Link, Redirect } from 'react-router';

class Home extends React.Component {
  render() {
    return (
      <div className='alert alert-info'>
        <Link to="/demo">Home</Link>
      </div>
    );
  }
}

export default Home;
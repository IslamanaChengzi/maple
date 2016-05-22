import React from 'react';
import { Link, Redirect } from 'react-router';

class Home extends React.Component {
  render() {
    return (
      <div className='alert alert-info'>
        Hello from Home Component22
        <Link to="/">home</Link>
      </div>
    );
  }
}

export default Home;
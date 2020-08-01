import React, { Component } from 'react';
import NavBar from './NavBar';
import Home from './pages/Home.js';
import Interests from './pages/Interests';
import Javascript from './pages/Javascript';
import SchoolWork from './pages/SchoolWork';
import Python from './pages/Python';

class Portfolio extends Component {
  state = {
    currectPage: 'Profile'
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  }

  renderTitle() {
    return (
      <h1>
        <small>{this.state.currentPage ? this.state.currentPage : 'Profile'}</small>
      </h1>
    )
  }

  renderPage = () => {
    switch(this.state.currentPage) {
      case 'Profile':
        return <Home />;
      case 'Interests':
        return <Interests />;
      case 'Javascript':
        return <Javascript />;
      case 'SchoolWork':
        return <SchoolWork />;
      case 'Python':
        return <Python />;
      default:
        return <Home />;
        
    }
  }

  render() {
    return (
      <div>
        {this.renderTitle()}
        <NavBar 
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
        <footer class='sticky'>
          <p>ELLIOTT A. RODGERS</p>
        </footer>
      </div>
    )
  }
}

export default Portfolio;
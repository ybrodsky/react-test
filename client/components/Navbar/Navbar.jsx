import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Index from 'components/Index/Index';
import Country from 'components/Country/Index';

class NavbarComponent extends Component {
	render() {
		return (
			<Router>
		    <div>
		      <ul>
		        <li><Link to="/">Cities</Link></li>
		        <li><Link to="/countries">Countries</Link></li>
		      </ul>

		      <hr/>

		      <Route exact path="/" component={Index}/>
		      <Route path="/countries" component={Country}/>
		    </div>
		  </Router>
		)
	}
}

export default NavbarComponent;
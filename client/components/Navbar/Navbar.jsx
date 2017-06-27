import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  hashHistory
} from 'react-router-dom';
import Index from 'components/Index/Index';
import CityEdit from 'components/Index/Edit';
import Country from 'components/Country/Index';
import App from 'components/App/Index';

class NavbarComponent extends Component {
	render() {
		return (
			<Router history={hashHistory}>
		    <div>
		      <ul>
		        <li><Link to="/cities">Cities</Link></li>
		        <li><Link to="/countries">Countries</Link></li>
		      </ul>

		      <hr/>

		      <Switch>
		      	<App>
		      		<Switch>
						      <Route path="/cities" component={Index}/>
						      <Route path="/countries" component={Country}/>
						      <Route path="/cities/:id" component={CityEdit}/>
				     	</Switch>
			      </App>
		      </Switch>
		    </div>
		  </Router>
		)
	}
}

export default NavbarComponent;
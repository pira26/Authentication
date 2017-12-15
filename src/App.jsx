import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import Route from './routes';

ReactDOM.render((
	<BrowserRouter>
	    <Route />
	</BrowserRouter>), document.getElementById('root'));

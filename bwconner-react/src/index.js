import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from "./reducers";
import Header from './components/header'
import App from './components/app';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<div>
			<BrowserRouter >
				<div>
					<Header />
					<Switch>
						<Route path="/" component={App} />
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	</Provider>
, document.querySelector('.container'));

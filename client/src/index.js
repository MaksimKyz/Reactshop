import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './state/reducers'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import { BrowserRouter } from "react-router-dom";


const client = new ApolloClient({
    uri: 'http://localhost:3005/graphql',
    cache: new InMemoryCache(),
})


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ApolloProvider client={client}>
                    <App/>
                </ApolloProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

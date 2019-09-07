import React from 'react'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from '@apollo/react-hooks'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from 'views/Main'

const httpLink = createHttpLink({
  uri: 'http://localhost:8000/graphql/'
})
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink
})

const App: React.FC = () => {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Router>
          <Route exact={true} path="/" component={Main} />
        </Router>
      </ApolloProvider>
    </div>
  )
}

export default App

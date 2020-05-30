import React, {PureComponent} from 'react';
import Layout from './container/Layout/Layout';
import Routes from './routes';
import './App.css';

class App extends PureComponent{
  
  render() {
      return (
        <Layout>
          <Routes/>
        </Layout>
      );
  }

}
export default App;

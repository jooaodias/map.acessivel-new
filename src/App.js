import React, {PureComponent} from 'react';
import Layout from './container/Layout/Layout';
import Routes from './routes';

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

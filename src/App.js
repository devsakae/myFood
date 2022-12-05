import React, { Fragment } from 'react';
import Comidas from './components/Comidas/Comidas';
import Header from './components/Layout/Header';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Comidas />
      </main>
    </Fragment>
  );
}

export default App;

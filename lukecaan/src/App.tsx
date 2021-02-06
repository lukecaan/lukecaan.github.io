import React from 'react';
import styles from './App.module.scss';
import Home from './Components/Pages/Home/Home';
import Ribbit from './Components/Pages/Ribbit/Ribbit';
import Steel from './Components/Pages/Steel/Steel';

function App() {
  return (
    <div
      className={styles.app}
    >
      <Home />
      <Steel />
      <Ribbit />
    </div>
  );
}

export default App;

import React from 'react';
import styles from './App.module.scss';
import Home from './Components/Pages/Home/Home';
import Ribbit from './Components/Pages/Ribbit/Ribbit';
import Steel from './Components/Pages/Steel/Steel';
import Intro from './Components/Pages/Intro/Intro';
import ScreenSizeWarning from './Components/ScreenSizeWarning/ScreenSizeWarning';

function App() {
  return (
    <div
      className={styles.app}
    >
      <Home />
      <Intro/>
      <Steel />
      <Ribbit />

      <ScreenSizeWarning/>
    </div>
  );
}

export default App;

import {Clock} from './Clock';
import styles from './Clock.module.scss';

function App() {
  return (
    <div className={styles['clock-container']}>
      <h1>Current Time:</h1>
      <Clock />
    </div>
  );
}

export default App;
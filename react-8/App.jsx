import AlertClock from './AlertClock';

function App() {
  const handleAlertClick = () => {
    const currentTime = new Date().toLocaleTimeString();
    alert(`Current time is: ${currentTime}`);
  };

  return (
    <div>
      <h1>Ciao Mondo!</h1>
      <AlertClock handleClick={handleAlertClick} />
    </div>
  );
}

export default App;
import { Header } from './components/layout';

// Import the webfonts via fontsource
import '@fontsource-variable/open-sans';
import '@fontsource-variable/raleway';

// Import custom modules
import { DimmedLight, Dimmer, Light } from './components/lights';
import { ParkingGaragesRealtime } from './components/ghent_parkings';

function App() {
  return (
    <div className="app">
      <ParkingGaragesRealtime />
      {/* <Header />
      <h1>The quick brown fox ...</h1>
      <h2>The quick brown fox ...</h2>
      <h3>The quick brown fox ...</h3>
      <DimmedLight /> */}
    </div>
  );
}

export default App;

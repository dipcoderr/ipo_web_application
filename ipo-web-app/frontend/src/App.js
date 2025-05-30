import './App.css';
import Header from './ipo-related-components/header';

function App() {
  return (
    <div className="App">
      <Header />
      {/* Add other components here */}
      <main className="p-6">
        <h1 className="text-2xl font-semibold">Welcome to Bluestock</h1>
        <p>This is your main content area.</p>
      </main>
    </div>
  );
}

export default App;

import { Header } from './components/Header/Header';
import { Search } from './components/Search/Search'
import { ThemeContextWrapper } from './contexts/theme-context';

import './App.css';

function App() {
  return (
    <ThemeContextWrapper>
      <div className="App">
        <Header />
        <Search />
      </div>
    </ThemeContextWrapper>
  );
}

export default App;

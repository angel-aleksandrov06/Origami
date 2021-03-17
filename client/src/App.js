import Header from './components/Header';
import Menu from './components/Menu';

import style from './App.module.css';

function App() {
  return (
    <div className={style.app}>
        <Header />
        <Menu />
    </div>
  );
}

export default App;

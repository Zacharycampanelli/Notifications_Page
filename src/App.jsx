import {notifications} from './assets/data/notifications';
import Header from './components/Header';
import MessageBoard from './components/MessageBoard';
import './styles/App.scss'





function App() {

  return (
    <>
      <Header />
      <MessageBoard notifications={notifications} />
    </>
  )
}

export default App

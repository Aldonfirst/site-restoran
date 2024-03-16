import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>Скачайте наше приложение</p>
        <div className="app-download-platform">
            <img src={assets.play_store} alt="Play-Market" />
            <img src={assets.app_store} alt="App-Store" />
        </div>
    </div>
  )
}

export default AppDownload;
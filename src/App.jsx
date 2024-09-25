
import Mynav from './components/nav'
import ContuctUs from './components/contuctUs'
import Mybtn from './components/mybtn'
import Myform from './components/fotm'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
 

  return (
    <div className='main'>
      <Mynav />
      <div className='myBody'>
        <ContuctUs />
        <div className="boxs">
          <div className="box1">
            <div className="btnContainer">
              <Mybtn btnText="💬 VIA SUPPORT CHAT" onClick={() => alert("Sorry! I am Busy Now")} />
              <Mybtn btnText="📞 VIA CALL" onClick={() => alert("Sorry! I am Busy Now")} />
            </div>
            <Myform />
            
          </div>
          <div className="box2">
              <img src="/src/assets/girl.svg" alt="" />
            </div>
        </div>


      </div>
    </div>
  )
}

export default App

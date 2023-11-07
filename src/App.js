
import "./App.css"
import NavigationBar from "./components/NavigationBar"
import Intro from "./components/intro"
import Trending from "./components/Trending"
import Asia from "./components/Asia"
import Barat from "./components/Barat"
import "./style/landingPage.css"
import TimurTengah from "./components/Timurt Tengah"
import Footer from "./components/Footer"

function App() {
  return (
  <div>
    <div className="myBG">
      <NavigationBar />
      <Intro />
    </div>

    <div className="trending">
      <Trending />
    </div>

    <div className="asia">
      <Asia />
    </div>

    <div className="barat">
      <Barat />
    </div>

    <div className="barat">
      <TimurTengah />
    </div>

    <div className="barat">
      <Footer />
    </div>
  </div>
  )
}

export default App;

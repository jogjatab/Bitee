import { Navbar, Hero, Community, Features, Market, Testimonials, Explore, Footer, Connect, Converter, PopUp } from "./components";
import styles from './styles/styles';
import { useState, useEffect } from "react";
import {useScrollPosition} from './components/Hooks/useScrollPosition';

const App = () => {
  const [showPopUp, setshowPopUp] = useState(false)
  const scrollPosition = useScrollPosition()

  useEffect(() => {
    setshowPopUp(true)
  }, [])
  
  const closePopUp = () => {
    setshowPopUp(false)
  }
  
  return (
    <div className={`bg-primary text-white w-full overflow-hidden`}>
      <div className={`${scrollPosition > 300 && "fixed z-50 top-0 w-full drop-shadow-2xl transparent_box_shadow bg-primary"} ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Community />
          <Converter />
          <Features />
          <Market />
          <Testimonials />
          <Explore />
          <Connect />
          <Footer />
          {
            showPopUp &&  <PopUp close={closePopUp} />
          }
        </div>
      </div>
    </div>
  )
}



export default App;

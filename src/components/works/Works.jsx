import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import "./works.scss";

export default function Works() {

  return(
      <div className="works" id="works">
        <div className="Slider" style={{ overflow: "hidden"}}>
          
          <AwesomeSlider>


            <div className="emulatorFreighter">
              
              <h1>EmulatorFreighter</h1>



            </div>

            <div className="openCuisine">

              <h1>OpenCuisine</h1>
              <p>Test</p>

            </div>

            <div className="mastermind">

              <h1>Mastermind</h1>
              <p>Test</p>

            </div>

            <div className="portfolio">

              <h1>Portfolio</h1>
              <p>Test</p>

            </div>
            
          </AwesomeSlider>
        </div>
      </div>
    );
}
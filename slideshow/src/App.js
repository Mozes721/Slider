import React from 'react';
import Carousel from "react-bootstrap/Carousel"

function App() {
  return (
    <div className="App">
    <Carousel>
     {/*Fall*/}
      <Carousel.Item>
      <img className="d-block w-100" src={require("./Images/Fall.jpg")} 
      alt="Fall Image" style={{height: "100vh"}}
      />
      <Carousel.Caption>
      <h3>First Slide</h3>
      <p>Fall</p>
      </Carousel.Caption>
      </Carousel.Item>
    {/*Spring*/}
       <Carousel.Item>
      <img className="d-block w-100" src={require("./Images/Spring.jpg")} 
      alt="Spring Image" style={{height: "100vh"}}
      />
      <Carousel.Caption>
      <h3>Second Slide</h3>
      <p>Spring</p>
      </Carousel.Caption>
      </Carousel.Item>
    {/*Summer*/}
       <Carousel.Item>
      <img className="d-block w-100" src={require("./Images/Summer.jpg")} 
      alt="Summer Image" style={{height: "100vh"}}
      />
      <Carousel.Caption>
      <h3>Third Slide</h3>
      <p>Summer</p>
      </Carousel.Caption>
      </Carousel.Item>
    {/*Winter*/}
       <Carousel.Item>
      <img className="d-block w-100" src={require("./Images/Winter.jpg")} 
      alt="Winter Image" style={{height: "100vh"}}
      />
      <Carousel.Caption>
      <h3>Fourth Slide</h3>
      <p>Winter</p>
      </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default App;

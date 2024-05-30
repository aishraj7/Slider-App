import React from "react";
import "./App.css"; 

function App () {
  render() {
    return (
      <div className="App">
        <div className="number">
            <div className="number">1</div>
            <div className="number">2</div>
            <div className="number">3</div>
        </div>
        <div className="context">
          <div className="nessage">
           <p>Message</p>
          </div>
          <div className="buttons">
           <button>Pre</button>
           <button>Next</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

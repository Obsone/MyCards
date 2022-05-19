import React, {useState} from 'react'
import './Card.css'

const Card = () => {
    const [isToggled, setIsToggled] = useState(false);
  
    return (
        <div className="app">
            <div className="info">
                <div className="card" onClick={() => setIsToggled(!isToggled)}>
                    <div class={`front ${isToggled ? "flipped" : ""}`}>front Info
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div class={`back ${isToggled ? "flipped" : ""}`}>back Info</div>
                </div>
                <div className="card" onClick={() => setIsToggled(!isToggled)}>
                    <div class={`front ${isToggled ? "flipped" : ""}`}>front Info
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div class={`back ${isToggled ? "flipped" : ""}`}>back Info</div>
                </div>
                <div className="card" onClick={() => setIsToggled(!isToggled)}>
                    <div class={`front ${isToggled ? "flipped" : ""}`}>front Info
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div class={`back ${isToggled ? "flipped" : ""}`}>back Info</div>
                </div>
            </div>
        </div>
  );
};
  export default Card

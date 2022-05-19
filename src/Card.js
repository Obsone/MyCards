import React, {useState} from 'react'
import './Card.css'

const Card = () => {
    const [isToggled, setIsToggled] = useState(false);
  
    return (
        <div className="app">
            <div className="info">
                <div className="card" onClick={() => setIsToggled(!isToggled)}>
                    <div class={`front ${isToggled ? "flipped" : ""}`}>front</div>
                    <div class={`back ${isToggled ? "flipped" : ""}`}>back</div>
                </div>
                <div className="card" onClick={() => setIsToggled(!isToggled)}>
                    <div class={`front ${isToggled ? "flipped" : ""}`}>front</div>
                    <div class={`back ${isToggled ? "flipped" : ""}`}>back</div>
                </div>
                <div className="card" onClick={() => setIsToggled(!isToggled)}>
                    <div class={`front ${isToggled ? "flipped" : ""}`}>front</div>
                    <div class={`back ${isToggled ? "flipped" : ""}`}>back</div>
                </div>
            </div>
        </div>
  );
};
  export default Card

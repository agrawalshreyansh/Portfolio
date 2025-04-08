


import * as d3 from "d3";
import { useEffect, useRef } from "react";
import "./cube.css";

const SolidComponent = () => {

  const ImageLinks = [
    'React.png',
    'express.svg' ,
    'django.svg' ,
    'mysql.svg' ,
    'jslog.webp' ,
    'nodejsDark.svg',
    'python.png',
    'mongo.svg'
  ]


  const solidRef = useRef(null);

  useEffect(() => {
    const el = d3.select(solidRef.current);
    let rotateY = Math.random() * 360;

    const animateRotation = () => {
      rotateY += 0.25;
      el.style("transform", `scale(1.5) rotateY(${rotateY}deg)`);
      requestAnimationFrame(animateRotation);
    };

    animateRotation();
  }, []);

  return (
    <div className="solid" ref={solidRef}>
      {ImageLinks.map((src, idx) => (
        <div className="side" key={idx}>
          <img src={src} alt={`face-${idx}`} className={`face-${idx}`}/>
        </div>
      ))}
    </div>
  );
  
  
};

export default SolidComponent;
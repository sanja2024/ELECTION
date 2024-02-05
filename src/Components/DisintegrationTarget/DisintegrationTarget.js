import React, { useEffect, useState } from 'react';
import html2canvas from 'html2canvas'; // Import html2canvas
import "./DisintegrationTarget.css"
// import hello from "../../Common/Assets/Images/SVG/hello.pdf"

const DEBUG = false;
const REPETITION_COUNT = 2;
const NUM_FRAMES = 40;

const generateFrames = (canvas, count = 32) => {
  const width = canvas.width;
  const height = canvas.height;
  const ctx = canvas.getContext("2d");
  const originalData = ctx.getImageData(0, 0, width, height);
  const imageDatas = [...Array(count)].map((_, i) =>
    ctx.createImageData(width, height)
  );

  for (let x = 0; x < width; ++x) {
    for (let y = 0; y < height; ++y) {
      for (let i = 0; i < REPETITION_COUNT; ++i) {
        const dataIndex = Math.floor(
          count * (Math.random() + (2 * x) / width) / 3
        );
        const pixelIndex = (y * width + x) * 4;

        for (let offset = 0; offset < 4; ++offset) {
          imageDatas[dataIndex].data[pixelIndex + offset] =
            originalData.data[pixelIndex + offset];
        }
      }
    }
  }

  return imageDatas.map((data) => {
    const clonedCanvas = canvas.cloneNode(true);
    clonedCanvas.getContext("2d").putImageData(data, 0, 0);
    return clonedCanvas;
  });
};

const replaceElementVisually = (oldElement, newElement) => {
  const parentElement = oldElement.offsetParent;
  newElement.style.top = `${oldElement.offsetTop}px`;
  newElement.style.left = `${oldElement.offsetLeft}px`;
  newElement.style.width = `${oldElement.offsetWidth}px`;
  newElement.style.height = `${oldElement.offsetHeight}px`;
  parentElement.appendChild(newElement);
  oldElement.style.visibility = "hidden";
};

const disintegrateElement = (elm) => {
  html2canvas(elm).then((canvas) => {
    const container = document.createElement("div");
    container.classList.add("disintegration-container");

    const frames = generateFrames(canvas, NUM_FRAMES);
    frames.forEach((frame, i) => {
      frame.style.transitionDelay = `${(1.35 * i) / frames.length}s`;
      container.appendChild(frame);
    });

    replaceElementVisually(elm, container);

    // Assign container.offsetLeft to a variable or use it in a function
    const offsetLeft = container.offsetLeft;

    if (!DEBUG) {
      frames.forEach((frame) => {
        const randomRadian = 2 * Math.PI * (Math.random() - 0.5);
        frame.style.transform = `rotate(${15 * (Math.random() - 0.5)}deg) translate(${60 * Math.cos(randomRadian)}px, ${30 * Math.sin(randomRadian)}px) rotate(${15 * (Math.random() - 0.5)}deg)`;
        frame.style.opacity = 0;
      });
    } else {
      frames.forEach((frame) => {
        frame.style.animation = `debug-pulse 1s ease ${frame.style.transitionDelay} infinite alternate`;
      });
    }
  });
};

const X = () => {
  const [disintegrated, setDisintegrated] = useState(false);

  const handleClick = () => {
    if (disintegrated) return;
    setDisintegrated(true);
    disintegrateElement(document.getElementById('disintegration-target'));
  };

  useEffect(() => {
    const disintegrationTarget = document.getElementById('disintegration-target');
    if (disintegrationTarget) {
      disintegrationTarget.addEventListener("click", handleClick);
    }
  }, []);

  return (
    <div 
    // id="disintegration-target"
     className="disintegration-target">
      <div className="container grid">
        {/* <div className="xsmall-10 bg-warning" style={{ margin: '2em', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/022/666/061/small/owl-face-silhouettes-owl-face-svg-black-and-white-owl-vector.jpg" alt="Thanos" className="thanos" />
        </div> */}
      
        <div className=" disintegration-target grid" 
        id="disintegration-target"
        >
           {/* <iframe src={hello} style={{width:"500px", aspectRatio:'1/1', }}/> */}
          <div className="xsmall-12">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/022/666/061/small/owl-face-silhouettes-owl-face-svg-black-and-white-owl-vector.jpg" alt="Captain America" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default X;

// // import React, { useState } from 'react';
// // import '../styles/vs.css';
// import img from '../images/sailhome1.png';
// // const VerticalSlider = () => {
// //   const [startIndex, setStartIndex] = useState(0);
  
// //   const cards = [
// //     {
// //       title: "Card One",
// //       image: img
// //     },
// //     {
// //       title: "Card Two",
// //     image: img
// //     },
// //     {
// //       title: "Card Three",
// //     image: img
// //     },
// //     {
// //       title: "Card Four",
// //       image: img
// //     },
// //     {
// //       title: "Card Five",
// //       image: img
// //     }
// //   ];

// //   const handleSlide = (direction) => {
// //     if (direction === 'up' && startIndex > 0) {
// //       setStartIndex(prev => prev - 1);
// //     } else if (direction === 'down' && startIndex < cards.length - 2) {
// //       setStartIndex(prev => prev + 1);
// //     }
// //   };

// //   return (
// //     <div className="slider-outer-container">
// //       <div className="slider-container">
// //         <div className="cards-viewport">
// //           <div 
// //             className="cards-wrapper"
// //             style={{ transform: `translateY(-${startIndex * 190}px)` }} 
// //           >
// //             {cards.map((card, index) => (
// //               <div 
// //                 key={index}
// //                 className={`card ${
// //                   index >= startIndex && index < startIndex + 2 
// //                     ? 'visible' 
// //                     : 'hidden'
// //                 }`}
// //               >
// //                 <div className="card-content">
// //                   <h3>{card.title}</h3>
// //                  <p>{card.content}</p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>

// //       <div className="navigation-panel">
// //         <button 
// //           onClick={() => handleSlide('up')}
// //           className={`nav-button ${startIndex === 0 ? 'disabled' : ''}`}
// //           disabled={startIndex === 0}
// //         >
// //           ▲
// //         </button>
// //         {/* <div className="nav-indicator">
// //           {startIndex + 1}/{cards.length - 1}
// //         </div> */}
// //         <button 
// //           onClick={() => handleSlide('down')}
// //           className={`nav-button ${startIndex >= cards.length - 2 ? 'disabled' : ''}`}
// //           disabled={startIndex >= cards.length - 2}
// //         >
// //           ▼
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default VerticalSlider;


// import React, { useState } from 'react';
// import '../styles/vs.css';
// const VerticalSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const cards = [
//     { image: img, title: 'Alumni Awards 1', description: 'Horem ipsum dolor 1.' },
//     { image: img, title: 'Alumni Awards 2', description: 'Horem ipsum dolor 2.' },
//     { image:img, title: 'Alumni Awards 3', description: 'Horem ipsum dolor 3.' },
//     { image: img, title: 'Alumni Awards 4', description: 'Horem ipsum dolor 4.' },
//   ];

//   const cardHeight = 15; // Exact height of one card in pixels

//   const handleDown = () => {
//     if (currentIndex < cards.length - 2) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const handleUp = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   return (
//     <div className="vertical-slider">
//       <div
//         className="cards-container"
//         style={{ transform: `translateY(-${currentIndex * cardHeight}vw)` }}
//       >
//         {cards.map((card, index) => (
//           <div className="card" key={index}>
//             <img src={card.image} alt={card.title} className="card-image" />
//             <h3 className="card-title">{card.title}</h3>
//             <p className="card-description">{card.description}</p>
//           </div>
//         ))}
//       </div>
//       {currentIndex > 0 && (
//         <button className="up-arrow" onClick={handleUp}>
//           &#9652;
//         </button>
//       )}
//       {currentIndex < cards.length - 2 && (
//         <button className="down-arrow" onClick={handleDown}>
//           &#9662;
//         </button>
//       )}
//     </div>
//   );
// };

// export default VerticalSlider;
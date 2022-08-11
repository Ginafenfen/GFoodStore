// import React from "react";

// const uselater = () => {
//   const [seconds, setSeconds] = useState(10);
//   const [minutes, setMinutes] = useState(0);
//   const [countdown, setCountdown] = useState(false);

//   const confirmOrder = () => {
//     setCountdown(true);
//     return countdown("Confirmed");
//   };

//   let timer;
//   useEffect(() => {
//     timer = setInterval(() => {
//       setSeconds(seconds - 1);

//       if (seconds === 0) {
//         setMinutes(minutes - 1);
//         setSeconds(59);
//       }
//       if (minutes === 0 && seconds === 0) {
//         setMinutes(0);
//         setSeconds(0);
//         console.log("time's up ");
//       }
//     }, 1000);

//     return () => clearInterval(timer);
//   });

//   return (
//     <>
//       <h1 className="text-red-700">waiting time...</h1>
//       <h1>
//         {minutes}:{seconds}
//       </h1>
//     </>
//   );
// };

// export default uselater;

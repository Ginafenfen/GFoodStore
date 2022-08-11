import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  let navigate = useNavigate();
  const [completed, setCompleted] = useState([]);
  const [seconds, setSeconds] = useState(15);
  const [minutes, setMinutes] = useState(0);
  const [countdown, setCountdown] = useState(false);

  const fetchData = async () => {
    const response = await fetch(
      "http://localhost:5001/products/completedlist"
    );
    const data = await response.json();
    setCompleted(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(completed);

  let timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds - 1);

      if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
      if (minutes === 0 && seconds === 0) {
        setMinutes(0);
        setSeconds(0);
        console.log("time's up ");
        setCountdown(<h2>READY FOR COLLECTION</h2>);
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  const handleCollection = (id) => {
    var raw = "";

    var requestOptions = {
      method: "PATCH",
      body: raw,
      redirect: "follow",
    };

    fetch(`http://localhost:5001/products/collected/${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))

      .catch((error) => console.log("error", error));

    alert("Thank you for your order");
  };

  const handleclick = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div>
      <button onClick={handleclick}>(*૭^⤙^)૭ </button>
      {completed.length > 0 && (
        <div class="grid gap-x-0 gap-y-4 grid-cols-4">
          {completed &&
            completed.map((list) => (
              <div class="w-full max-w-sm max-h-fit overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-xl ">
                <div key={list._id}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="mx-auto mt-8 h-16 w-16 text-green-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <div className="container min-h-60 mx-h-96 p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
                    <img src={list.img} />
                    <h2>{list.title}</h2>
                  </div>
                  <p class="my-4 text-center text-xl text-gray-500 ">
                    <div className="animate-spin ease duration-300"> ⌛</div>
                    Waiting time... {minutes}:{seconds}
                  </p>
                  <div class="space-x-4 bg-gray-100 py-4 text-center">
                    <button class="inline-block rounded-md bg-pink-500 px-10 py-2 font-semibold text-red-100 shadow-md duration-75 hover:bg-red-400">
                      {countdown}
                    </button>
                    <button
                      class="inline-block rounded-md bg-green-500 px-6 py-2 font-semibold text-green-100 shadow-md duration-75 hover:bg-green-400"
                      onClick={() => handleCollection(list._id)}
                    >
                      Click here for collection
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;

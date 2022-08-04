import React, { useState } from "react";

const Signup = () => {
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [usernameReg, setUsernameReg] = useState("");
  const [phoneReg, setPhoneReg] = useState("");

  const handleNewaccount = (e) => {
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: emailReg,
      password: passwordReg,
      username: usernameReg,
      phone: phoneReg,
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:5001/users/create", requestOptions)
      .then((response) => response.text())

      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <main className="relative min-h-screen w-full bg-white">
        <div className="p-6" x-data="app">
          <header className="flex w-full justify-between">
            <svg
              class="h-7 w-7 cursor-pointer text-gray-400 hover:text-gray-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
            >
              <path
                stroke-width="1"
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>

            <button
              type="button"
              className="rounded-2xl border-b-2 border-b-gray-300 bg-white py-3 px-4 font-bold text-blue-500 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200"
            >
              SIGN UP
            </button>
          </header>

          <section className="absolute top-1/2 left-1/2 mx-auto max-w-sm -translate-x-1/2 -translate-y-1/2 transform space-y-4 text-center">
            <div x-show="isLoginPage" className="space-y-4">
              <header className="mb-3 text-2xl font-bold">
                Create your Account
              </header>
              <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                <input
                  type="text"
                  placeholder="Email.."
                  className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                  onChange={(e) => setEmailReg(e.target.value)}
                />
              </div>
              <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                <input
                  type="password"
                  placeholder="Password"
                  className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                  onChange={(e) => setPasswordReg(e.target.value)}
                />
              </div>
              <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                <input
                  type="number"
                  placeholder="Phone (optional)"
                  className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                  onChange={(e) => setPhoneReg(e.target.value)}
                />
              </div>
              <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-blue-400">
                <input
                  type="text"
                  placeholder="Name"
                  className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                  onChange={(e) => setUsernameReg(e.target.value)}
                />
              </div>
              <button
                className="w-full rounded-2xl border-b-4 border-b-blue-600 bg-blue-500 py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400"
                onClick={handleNewaccount}
                type="submit"
              >
                CREATE ACCOUNT
              </button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Signup;

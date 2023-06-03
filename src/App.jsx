import { useRef, useState } from "react";
import iconList from "./images/icon-list.svg";
import bgDesktop from "./images/illustration-sign-up-desktop.svg";

function App() {
  const [email, setEmail] = useState(null);
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const inputRef = useRef(null);

  // const inputFocus = (e) =

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("valid email required");
      setTimeout(() => {
        setError(null);
      }, 1500);
    } else {
      setSubmitted(true);
    }
  };
  return (
    <>
      <main>
        {!submitted ? (
          <article className="bg-white pl-12 pr-4 py-8 rounded-3xl grid grid-cols-2  ">
            <section className="mt-12">
              <h1 className="text-dark-slate-grey text-[42px] font-bold mb-4 ">
                Stay updated!
              </h1>
              <p>
                Join 60,000+ product managers receiving monthly <br /> updates
                on:
              </p>
              <div className="flex mt-6">
                <img className="mr-2" src={iconList} />{" "}
                <p>Product discovery and building what matters</p>
              </div>
              <div className="flex mt-2">
                <img className="mr-2" src={iconList} />{" "}
                <p>Measuring to ensure updates are a success</p>
              </div>
              <div className="flex mt-2">
                <img className="mr-2" src={iconList} /> <p>And much more!</p>
              </div>
              <div>
                <form onSubmit={handleSubmit} className="mt-12 grid">
                  <div className="flex justify-between">
                    <h3 className="text-sm text-dark-slate-grey font-bold">
                      Email address
                    </h3>
                    <p className="text-tomato">{error}</p>
                  </div>
                  <input
                    className={`mt-2 px-8 py-4 border-[1px] border-solid rounded-xl pointer ${
                      error && "border-tomato bg-red-200 text-tomato"
                    }`}
                    type="email"
                    placeholder="email@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    ref={inputRef}
                  />
                  <button
                    onClick={() => inputRef.current.focus()}
                    className="px-8 py-4 text-white bg-dark-slate-grey mt-6 rounded-[10px] font-bold pointer hover:bg-tomato transition-all duration-400 "
                  >
                    Subscribe to monthly newsletter
                  </button>
                </form>
              </div>
            </section>
            <div className="ml-14">
              <img className="w-full" src={bgDesktop} />
            </div>
          </article>
        ) : (
          <section className="bg-white rounded-3xl py-8 px-14">
            <div>
              <img className="mb-8 w-[20%]" src={iconList} />
              <h1 className="text-6xl font-bold text-dark-slate-grey mb-6 ">
                Thanks for <br /> subscribing
              </h1>
              <p>
                A confirmation email has been sent to <br />{" "}
                <span className="text-dark-slate-grey font-bold">{email} </span>
                Please open it and click <br /> the button inside to confirm
                your subscription.
              </p>
              <div className="grid place-items-center">
                <button
                  onClick={() => setSubmitted(!submitted)}
                  className="px-20 py-4 text-white bg-dark-slate-grey mt-8 rounded-[10px] font-bold pointer hover:bg-tomato transition-all duration-400 "
                >
                  Dismiss message
                </button>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}

export default App;

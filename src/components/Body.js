import React, { useState } from "react";
import checkIcon from "../images/icon-check.svg"

function Body() {
  const [valuee, setvalue] = useState(2);
  const [isMonthly, setIsMonthly] = useState(true);
 
  const values = ["10K", "50K", "100K", "500K", "1M"];
  const prices = ["8", "12", "16", "24", "36"];

  const min = 0;
  const max = 4;
  const value = valuee;

  function oninput() {
    this.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${
      ((this.value - this.min) / (this.max - this.min)) * 100
    }%, #DEE2E6 ${
      ((this.value - this.min) / (this.max - this.min)) * 100
    }%, #DEE2E6 100%)`;
  }

  return (
    <main className="flex flex-col items-center ">
      <div className=" w-[80%] flex flex-col items-center sm:w-[360px] rounded-md bg-white shadow-xl">
        <div className=" w-full flex flex-col items-center ">
          {/* 
- 10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month */}
          <label
            htmlFor="views"
            className="text-[hsl(225_20%_60%)] 
       text-base font-bold tracking-widest my-4"
          >
            {values[valuee]} PAGEVIEWS
          </label>
          <input
            type="range"
            className="range my-5"
            id="myinput"
            style={{
              background: `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${
                ((value - min) / (max - min)) * 100
              }%, #DEE2E6 ${
                ((value - min) / (max - min)) * 100
              }%, #DEE2E6 100%)`,
            }}
            oninput={() => oninput()}
            value={valuee}
            min={min}
            max={max}
            onChange={(e) => setvalue(e.target.value)}
            step="1"
          />
          <p className="my-4 text-[hsl(225_20%_60%)] font-bold">
          <span className="text-[hsl(227_35%_25%)] font-extrabold text-2xl leading-4">$</span>
            <span className="text-[hsl(227_35%_25%)] font-extrabold text-2xl leading-4">
              {isMonthly?prices[valuee]:prices[valuee]-(prices[valuee])*25/100}
           
            </span>
            / month
          </p>
          <div>
            <p className="text-[hsl(225_20%_60%)] mb-7 mt-2 font-bold text-sm flex items-center">
              Monthly Billing
              <span
                className="w-9 h-5 mx-3 rounded-full cursor-pointer bg-[hsl(223_50%_87%)] relative flex"
                onClick={() => setIsMonthly(!isMonthly)}
              >
                {isMonthly?
                <span
                  className="h-4 w-4 bg-white inline-block rounded-full absolute
                top-[2px] left-[2px] cursor-pointer"
                ></span>
                :
                <span
                className="h-4 w-4 bg-white inline-block rounded-full absolute
              top-[2px] right-[2px] cursor-pointer"
              ></span>}
              </span>
              Yearly Billing
              <span className="w-8 h-4 mx-2 rounded-full bg-[hsl(14_92%_95%)] text-[hsl(15_100%_70%)] text-[12px] relative justify-center flex items-center">
                -25%
              </span>
            </p>
          </div>
        </div>

        <div className=" bg-white border-t w-full flex justify-center ">
        <div className="flex flex-col">
          <div className="flex flex-row my-2 justify-center text-[hsl(225_20%_60%)]  text-sm"><img className=" m-1 w-2 h-2" src={checkIcon} alt="check"></img> <p className="font-[600]">Unlimited websites</p></div>
          <div className="flex flex-row my-2 justify-center text-[hsl(225_20%_60%)] text-sm"><img className=" m-1 w-2 h-2" src={checkIcon} alt="check"></img> <p className="font-[600]">100% data ownership</p></div>
          <div className="flex flex-row my-2 justify-center text-[hsl(225_20%_60%)] text-sm"><img className=" m-1 w-2 h-2" src={checkIcon} alt="check"></img> <p className="font-[600]">Email reports</p></div>
          <div className="m-5">
            <button className="text-[hsl(226_100%_87%)] text-sm font-bold w-44 h-9 bg-[hsl(227_35%_25%)] rounded-full m-auto ">Start my trial</button>
          </div>
        </div>
        </div>
       
      </div>
      
    </main>
  );
}

export default Body;

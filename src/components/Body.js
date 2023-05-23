import React, { useState } from "react";

function Body() {
  const [valuee, setvalue] = useState(2);

  const values = ["10K", "50K", "100K", "500K", "1M"];

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
        <div className="h-40 w-full flex flex-col items-center ">
          {/* 
- 10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month */}
          <label
            for="views"
            className="text-[hsl(225_20%_60%)] 
       text-base font-bold tracking-widest"
          >
            {values[valuee]} PAGEVIEWS
          </label>
          <input
            type="range"
            className="range"
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
        </div>

        <div className="h-40 bg-white border-t w-full"></div>
      </div>
      <div></div>
    </main>
  );
}

export default Body;

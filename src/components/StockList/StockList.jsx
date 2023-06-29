/* eslint-disable react/prop-types */
import { useMemo, useState } from "react";
import stock from "../../data/stockDetails.json";

export default function StockList() {
  // state to store the stock items
  let [stockItems] = useState(stock);

  //   memoizing the Stock items array and will only be created when the stock details file changes
  let stockItemsList = useMemo(() => {
    return stockItems.map((stockItem) => {
      return <StockItem key={stockItem.symbol} data={stockItem} />;
    });
  }, [stockItems]);

  return (
    // black stip of stock list
    <section className="w-full h-8 bg-black flex p-[3px] pl-2 pr-2 mobile:pl-1 mobile:pr-1 overflow-hidden">
      {/* container for scrolling flow of stock items */}
      <div className="flex items-center animate-scroll-right-to-left">
        <div className="h-full w-max flex gap-4 items-center">
          {stockItemsList}
        </div>
        <div className="h-full w-max flex gap-4 items-center">
          {stockItemsList}
        </div>
      </div>
    </section>
  );
}

// Stock item component
function StockItem({ data }) {
  return (
    <div className="h-full text-sm pl-2 pr-2 text-white flex justify-center items-center gap-2 rounded-md">
      {/* Stock name */}
      <div>{data.symbol}</div>
      <div className="flex justify-center items-center divide-x-2">
        {/* stock price */}
        <div className="pr-2">{data.price}</div>

        {/* stock pandl */}
        <div
          className={`pl-2 font-bold ${
            data.pandl < 0 ? " text-red-500" : " text-green-500"
          }`}
        >
          {data.pandl}%
        </div>
      </div>
    </div>
  );
}

"use server";

import { Suspense } from "react";
import Deals from "./actions/deals";
// import { getAllDeals } from "./actions/deals";

export default async function Home() {
  // const [inputValue, setInputValue] = useState("");
  // const [deals, setDeals] = useState([]);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputValue(e.target.value);
  //   console.log(inputValue);
  // };

  // const handleAddDeed = async (e: React.MouseEvent<HTMLElement>) => {
  //   e.preventDefault();
  //   // await addDeal(inputValue);
  //   // console.log(deals);
  //   setInputValue("");
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("http://localhost:3010/api/deal");
  //     const data = await response.json();
  //     setDeals(data);
  //   };
  //   fetchData();
  // }, []);

  return (
      <div className="">
        <form className="" action="">
          <div className="flex flex-col gap-2 my-4">
            <label className="font-semibold text-lg self-center" htmlFor="">
              Deed title
            </label>
            <input
              className="border border-slate-300 bg-transparent rounded-sm p-2"
              type="text"
              placeholder="Deed"
              // value={inputValue}
              // onChange={handleChange}
            />
          </div>
          <button
            className="w-full p-2 text-black bg-slate-200 rounded-sm"
            type="submit"
            // onClick={handleAddDeed}
          >
            Add deed
          </button>
        </form>
        {/* <div className="my-4">
          {deals.map((deal) => (
            <div key={deal} className="">
              {deal}
            </div>
          ))}
        </div> */}
        <Suspense fallback={<p>Loading feed...</p>}>
          <Deals />
        </Suspense>
      </div>
  );
}

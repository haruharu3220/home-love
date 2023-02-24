import React from 'react'
import { useEffect,useState } from 'react'

type SidebarProps = {
    onButtonClick: (item: string) => void;
  }

export const Sidebar: React.FC<SidebarProps> = ({ onButtonClick }) => {

const FacilityContext=React.createContext('');
const [facility, setFacility] = useState(0);


// const selectFacility = () =>{
//     const buttonText = event.target.textContent;
//     setFacility(buttonText);
//     alert(facility);
// };

    return(
        <div className='w-1/3 bg-blue-300 h-screen flex flex-col'>

        <form className='my-4' id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>




            <button onClick={() => onButtonClick("全体")}  className='py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  opacity-70 cursor-not-allowed rounded-lg my-4'>全体</button>
            <button onClick={() => onButtonClick("キッチン")}  className='py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  opacity-70 cursor-not-allowed rounded-lg my-4'>キッチン</button>
            <button onClick={() => onButtonClick("リビング")}  className='py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  opacity-70 cursor-not-allowed rounded-lg my-4'>リビング</button>
            <button onClick={() => onButtonClick("洗面")}  className='py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  opacity-70 cursor-not-allowed rounded-lg my-4'>洗面</button>

        </div>
    )


}
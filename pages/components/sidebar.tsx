import React from "react";
import { useEffect, useState } from "react";

type SidebarProps = {
  onButtonClick: (item: string) => void;
};

export const Sidebar: React.FC<SidebarProps> = ({ onButtonClick }) => {
  const FacilityContext = React.createContext("");

  //設備の一覧を保持するstate
  const [facility, setFacility] = useState([
    { name: "全体", status: "未完了" },
    { name: "キッチン", status: "未完了" },
    { name: "リビング", status: "未完了" },
    { name: "洗面", status: "未完了" },
    { name: "トイレ", status: "未完了" },
    { name: "洗濯", status: "未完了" },
    { name: "玄関", status: "未完了" },
    { name: "その他", status: "未完了" },
  ]);

  //選択中の設備を保持するstate
  const [selectedFacility, setSelectedFacility] = useState("");

  //選択中の設備のステータスを保持するstate
  const [selectedFacilityStatus, setSelectedFacilityStatus] = useState("");

  //モーダルを表示するかどうかのstate
  const [showModal, setShowModal] = useState(false);

  //選択中の設備を更新する関数
  const handleClick = (name: string, status: string) => {
    setSelectedFacilityStatus(status);
    setShowModal(true);
    setSelectedFacility(name);
  };

  //選択中の設備を更新する関数
  const handleStatusChange = (newStatus: string) => {
    const updatedFacility = facility.map((f) => {
      //選択中の設備のみステータスを更新する
      if (f.name === selectedFacility) {
        return { ...f, status: newStatus };
      } else {
        return f;
      }
    });
    setFacility(updatedFacility);
    setShowModal(false);
  };

  return (
    <div className="w-1/3 bg-blue-300 h-screen flex flex-col">
      <form className="my-4" id="search-form" role="search">
        <input
          id="q"
          aria-label="Search contacts"
          placeholder="Search"
          type="search"
          name="q"
        />
        <div id="search-spinner" aria-hidden hidden={true} />
        <div className="sr-only" aria-live="polite"></div>
      </form>

      {facility.map((item) => {
        return (
          <div key={item.name} className="flex">
            <div
              onClick={() => handleClick(item.name, item.status)}
              className={`py-2 my-4 w-1/5 text-center cursor-pointer ${
                selectedFacility === item.name ? "bg-gray-300" : ""
              }`}>
              {item.status}
            </div>
            <div className="py-2 px-4 w-4/5 ">
              <button
                onClick={() => onButtonClick(item.name)}
                className=" bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  opacity-70 cursor-not-allowed rounded-lg my-4">
                {item.name}
              </button>
            </div>

            {/* <button
              onClick={() => setSelectedFacility(item.name)}
              className="py-2 px-4 w-4/5  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  opacity-70 cursor-not-allowed rounded-lg my-4">
              {item}
            </button> */}
          </div>
        );
      })}
      {/* モーダルを表示するかどうかのstate */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="z-2 w-1/2 p-4 h-32 bg-white">
            <button onClick={() => setShowModal(false)}>Close</button>
            <br />
            <button onClick={() => handleStatusChange("未完了")}>未完了</button>
            <br />
            <button onClick={() => handleStatusChange("進行中")}>進行中</button>
            <br />
            <button onClick={() => handleStatusChange("完了")}>完了</button>
          </div>
        </div>
      )}
    </div>
  );
};

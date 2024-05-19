import React, { useEffect, useRef, useState } from "react";
// import { SERVER_URL } from "../config";
import { RxCross1 } from "react-icons/rx";
const DialogBox = ({ handleSubmit, subtopics, setSubtopics }) => {
  const [searchTerm,handleSearch] = useState("");
  const inpRef = useRef();
  useEffect(() => {
    console.log("subtopics", subtopics,typeof(subtopics));
  }, [subtopics]);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center h-full w-full z-50">
      <div
        className="bg-stone-700 rounded-xl lg:py-4 sm:py-10 md:py-10 px-10 card-shadow-black"
        style={{ width: "800px" }}
      >
        <div className="text-gray-200 lg:text-xl sm:text-3xl md:text-3xl font-medium mb-8 ">
          Add subtopics relevant to the blog. (upto 5)
        </div>

        <div className="bg-gray-300 rounded-xl min-h-8 w-full mb-10 flex items-center p-2">
          {subtopics.map((el, i) => {
            return (
              <div key={i} className="bg-gray-700 rounded-lg text-xl text-white px-2 py-1 flex justify-between gap-x-1 mr-1 w-max items-center pt-[8px]">
                <p className="w-max ">{el}</p>
                <button
                  onClick={(e) => {
                    setSubtopics(subtopics.filter((el, ind) => ind != i));
                  }}
                ><RxCross1 size={15}/></button>
              </div>
            );
          })}

          {subtopics.length < 5 ? (
            <>
              <input
                type="text"
                className="h-full w-full outline-none bg-transparent"
                ref={inpRef}
                onChange={(e) => {
                  handleSearch(e.target.value);
                }}
                value={searchTerm}
              />
            </>
          ) : (
            <></>
          )}
        </div>
        {
            subtopics.length < 5 ? (
            <>
              <button
                className="bg-gray-300 border-t-2 border-gray-400 text-center flex justify-center min-h-full hover:bg-gray-800 hover:text-gray-200 min-w-full"
                disabled={searchTerm === ""}
                onClick={()=>{
                    let arr = subtopics;
                    arr.push(searchTerm)
                    console.log(arr);
                    setSubtopics(arr);
                    handleSearch("");
                    inpRef.current.focus();
                }}
              >
                Add New
              </button>
            </>
          ) : (
            <></>
          )}
        <div className="flex justify-end lg:space-x-4 sm:space-x-12 md:space-x-12">
          <button
            className="bg-gray-500 hover:bg-gray-600 text-white rounded-lg lg:px-4 lg:py-2 sm:p-4 md:p-4 lg:text-base sm:text-3xl md:text-3xl"
            onClick={() => handleSubmit(false)}
          >
            Cancel
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white rounded-lg lg:px-4 lg:py-2 sm:p-4 md:p-4 lg:text-base sm:text-3xl md:text-3xl"
            onClick={() => handleSubmit(true)}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;

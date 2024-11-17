import { useRef } from "react";
import { IoClose } from "react-icons/io5";

const Modal = ({ children }) => {
  const modalDiv = useRef();
  function toggleModal() {
    console.log(modalDiv.current.classList.toggle("hidden"));
  }
  return (
    <>
      <div
        ref={modalDiv}
        className="w-full h-full bg-[#000000b3] fixed top-0 left-0 z-20 flex justify-center items-center"
      >
        <div className="bg-white p-4 rounded-md min-h-[45dvh] min-w-[90dvw]">
          <IoClose
            className="text-3xl fixed right-10 md:right-16 cursor-pointer hover:text-gray-700 hover:rotate-180 duration-500"
            onClick={() => {
              toggleModal();
            }}
          />
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;

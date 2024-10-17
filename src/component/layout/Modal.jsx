import { useRef, useState } from "react"

const Modal = ()=>{
    const [profState, setState] = useState(true);
    const modalDiv = useRef();
    function toggleClass(){
        modalDiv.current.classList.toggle("hidden")
    }
    toggleClass()
    return(
        <>
            {profState && <div ref={modalDiv} className="w-screen fixed top-0 right-0 z-50 h-screen bg-[#374151cc] flex justify-center items-center">
                <div className="bg-red-600" onClick={toggleClass}>X</div>
                <div className="bg-white p-10 rounded shadow-lg max-h-60 max-w-96">
                    <h1 className="">Hello World</h1>
                </div>
            </div>}
        </>
    )
}

export default Modal
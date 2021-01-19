import { useState } from "react"

export default function Navbar(){

    const [navBarState, setState] = useState(false);

    return(
        <>
        <div className={"lg:hiddden z-40 fixed top-0 left-0 w-full min-h-screen bg-black transform-gpu " + ( navBarState ? "bg-opacity-70" : "bg-opacity-0") + " transition -delay-150"} onClick={() => { if(navBarState) setState(false) }}></div>
        <nav className={"fixed lg:relative z-50 top-0 left-0 w-56 min-h-screen lg:min-h-auto lg:justify-self-start transform " + ( navBarState ? "translate-x-0" : "-translate-x-56") + " lg:transform-none transition bg-purple-400"}>
            NAVIGATION
        </nav>
        <button className="lg:hidden z-50 fixed bottom-2 right-2 w-20 h-20 rounded-full bg-white text-xl" onClick={() => setState(!navBarState)}>
            {navBarState ? "Hide" : "Show"}
        </button>
        </>
    )
}
import { useState } from "react"

export default function Navbar(){

    const [navBarState, setState] = useState(false);

    return(
        <>
            {navBarState && <nav className="fixed top-0 left-0 w-56 min-h-screen bg-purple-400">
                    NAVIGATION
            </nav>}
            <nav className="hidden lg:flex w-56 justify-self-start bg-purple-400">
                    NAVIGATION
            </nav>
            <button className="lg:hidden fixed bottom-2 right-2 w-20 h-20 rounded-full bg-white text-xl" onClick={() => setState(!navBarState)}>
                {navBarState ? "Hide" : "Show"}
            </button>
        </>
    )
}
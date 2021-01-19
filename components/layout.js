
import Navbar from './navbar'

export default function Layout(props){
    return(
        <>                
        <div className="flex flex-col w-full min-w-screen-sm min-h-screen items-center">
            <header className="space-y-1 p-1 w-full h-16 flex justify-center rounded-md bg-blue-400">
                <div className="w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl h-full bg-green-400">
                    HEADER
                </div>
            </header>
            <div className="space-y-1 w-full max-w-screen-xl flex flex-grow justify-center rounded-md bg-blue-400">
                <Navbar />
                <main className="p-1 w-full flex flex-wrap flex-grow content-start rounded-md bg-red-400">
                    {props.children}
                </main>
            </div>        
            <footer className="space-y-1 p-1 w-full h-24 rounded-md bg-blue-400">FOOTER</footer>
        </div>
        </>
    )
}
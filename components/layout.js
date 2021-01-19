
import Navbar from './navbar'
import Related from './related'

export default function Layout(props){
    return(
        <>                
        <div className="flex flex-col w-full min-w-screen-sm min-h-screen items-center">
            <header className="space-y-1 p-1 w-full h-16 flex justify-center rounded-md bg-blue-400">
                <div className="w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl h-full flex justify-between bg-green-400">
                    <div className="w-24 h-full bg-yellow-400">LOGO</div>
                    <div className="w-24 h-full bg-yellow-400">RESTO</div>
                </div>
            </header>
            <div className="w-full max-w-screen-2xl flex flex-grow flex-wrap justify-center rounded-md bg-blue-400">
                <Navbar />
                <main className="p-1 w-full lg:max-w-screen-md flex flex-grow flex-wrap content-start rounded-md bg-red-400">
                    {props.children}
                </main>
                <Related />
            </div>        
            <footer className="space-y-1 p-1 w-full h-36 flex justify-center rounded-md bg-blue-400">
                <div className="w-full max-w-screen-lg bg-red-400">
                    FOOTER
                </div>
            </footer>
        </div>
        </>
    )
}
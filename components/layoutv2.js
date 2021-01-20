import Navbar from "./navbar";
import Related from "./related";

export default function LayoutV2(props){
    return(
        <>
            <div className="flex flex-col w-full min-w-screen-sm min-h-screen items-center bg-black 2xl:bg-white">
                <div className="w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl min-h-full flex flex-col flex-grow bg-white">
                    <header className="w-full h-16 bg-green-900">
                        HEADER
                    </header>
                    <main className="w-full flex flex-row flex-grow bg-gray-900">
                        <Navbar />
                        <div className="flex flex-col xl:flex-row flex-grow">
                            <div className="max-w-screen-md 2xl:max-w-none flex-grow bg-red-900">
                                {props.children}
                            </div>
                            <Related>
                                RELATED
                            </Related>
                        </div>
                    </main>
                    <footer className="w-full h-36 bg-blue-900">
                        FOOTER
                    </footer>
                </div>
            </div>
        </>
    )
}
import Footerbar from "./footerbar";
import Headerbar from "./headerbar";
import Navbar from "./navbar";
import Related from "./related";

export default function LayoutV2(props){
    const contentCount = 5;
    let contentList = Array.from(Array(contentCount).keys());   

    return(
        <>
            <div className="flex flex-col w-full min-w-screen-sm min-h-screen items-center bg-black 2xl:bg-white">
                <div className="w-full max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl min-h-full flex flex-col flex-grow bg-white">
                    <Headerbar />
                    <main className="w-full flex flex-row flex-grow bg-gray-900">
                        <Navbar />
                        <div className="flex flex-col xl:flex-row flex-grow">
                            <div className="md:max-w-screen-md 2xl:max-w-screen-xl flex flex-wrap flex-grow bg-red-900">
                                {props.children}
                            </div>
                            <Related>
                                RELATED
                            </Related>
                        </div>
                    </main>
                    <Footerbar />
                </div>
            </div>
        </>
    )
}
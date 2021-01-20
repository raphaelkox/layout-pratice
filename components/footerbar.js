export default function Footerbar(){
    return(
        <footer className="p-1 w-full flex flex justify-center items-center bg-blue-900">
            <div className="space-y-1 p-1 w-full h-full xl:max-w-screen-md 2xl:max-w-screen-xl flex flex-col justify-between items-stretch rounded-md bg-blue-500">
                <div className="space-x-1 p-1 w-full h-full  flex justify-between items-stretch bg-blue-300">
                    <div className="p-1 flex-grow bg-blue-100">
                        LINKS 1
                        <ul>
                            <li><a>LINK</a></li>
                            <li><a>LINK</a></li>
                            <li><a>LINK</a></li>
                            <li><a>LINK</a></li>
                            <li><a>LINK</a></li>
                            <li><a>LINK</a></li>
                        </ul>
                    </div>
                    <div className="p-1 flex-grow bg-blue-100">
                        LINKS 2
                        <ul>
                            <li><a>LINK</a></li>
                            <li><a>LINK</a></li>
                            <li><a>LINK</a></li>
                        </ul>
                    </div>
                    <div className="p-1 flex-grow bg-blue-100">
                        LINKS 3
                        <ul>
                            <li><a>LINK</a></li>
                            <li><a>LINK</a></li>
                            <li><a>LINK</a></li>
                            <li><a>LINK</a></li>
                        </ul>
                    </div>                        
                </div>    
                <div className="p-1 w-full flex-grow bg-blue-300">
                    COPYRIGHT INFO
                </div>  
            </div>                   
        </footer>
    )
}

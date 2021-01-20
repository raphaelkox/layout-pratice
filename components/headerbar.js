export default function Headerbar(){
    return(
        <header className="p-1 w-full h-20 flex justify-center items-center bg-green-900">
            <div className="space-x-1 p-1 w-full h-full xl:max-w-screen-md 2xl:max-w-screen-xl flex justify-between items-center rounded-md bg-green-700">
                <div className="space-x-1 flex">
                    <div className="w-12 h-12 bg-green-500">LOGO</div>
                    <div className="hidden md:flex w-52 h-12 bg-green-500">LOGO TYPOGRAPHY</div>
                </div>
                <div className="space-x-1 flex">
                    <div className="w-80 h-12 bg-green-500">SEARCH BAR?</div>
                    <div className="w-16 h-12 bg-green-500">AVATAR?</div>
                </div>
            </div>
        </header>
    )
}

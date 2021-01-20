export default function Related(props){
    return(
    <div className="space-x-1 xl:space-x-0 xl:space-y-1 p-1 w-full max-w-screen-sm md:max-w-screen-md x xl:w-56 h-48 xl:h-auto xl:min-h-full flex flex-row xl:flex-col flex-wrap xl:flex-nowrap items-center bg-yellow-900">
        {props.children}
    </div>
    )
}
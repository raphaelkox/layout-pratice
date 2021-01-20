export default function Related(props){
    return(
    <div className="space-x-1 xl:space-x-0 xl:space-y-1 overflow-scroll p-1 h-36 xl:w-56 xl:h-auto xl:min-h-full flex flex-row xl:flex-col justify-center bg-yellow-900">
        {props.children}
    </div>
    )
}
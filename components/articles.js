export default function Articles(){
    const contentCount = 5;
    let contentList = Array.from(Array(contentCount).keys());    

    let imageIds = ['00', '01', '02', '03', '04'];
    let imagesPath = "images/";

    return(
        <>
            {contentList.map(x => {
                return(
                <div className="p-1 w-full md:w-1/2 md:first:w-full h-96 bg-red-700" key={"contentSlot" + x} >
                    <div className="w-full h-full flex flex-col justify-between rounded-md bg-red-500" >
                        CONTENT
                        <div className="overflow-hidden w-full h-48">
                            <img className="object-cover w-full h-full transition-transform transform xl:hover:scale-110" src={imagesPath + imageIds[x] + ".jpg"} />
                        </div>
                    </div>
                </div>
                )
            })}
        </>
    )
}
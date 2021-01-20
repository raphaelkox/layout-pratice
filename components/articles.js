import moment from 'moment'

export default function Articles(props){    
    let imagesPath = "images/";

    return(
        <>
            {props.data.map(article => {
                return(
                <div className="p-1 w-full md:w-1/2 md:first:w-full h-96 bg-red-700" key={"contentSlot" + article} >
                    <div className="p-1 w-full h-full flex flex-col justify-around rounded-md bg-red-500" >
                        <div className="w-full text-2xl">{article.title}</div>
                        <div className="w-full text-xl">{article.subtitle}</div>
                        <div className="overflow-hidden w-full h-48">
                            <img className="object-cover w-full h-full transition-transform transform xl:hover:scale-110" src={imagesPath + article.imageId + ".jpg"} loading="lazy" />
                        </div>
                        <div className="w-full text-sm">{article.tags.join(' ')}</div>
                        <div className="w-full text-sm">{moment(article.date).fromNow()}</div>
                        <div className="w-full text-sm">por Raphael Kox</div>                        
                    </div>
                </div>
                )
            })}
        </>
    )
}


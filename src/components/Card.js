

const Card = ({id , imageSrc, languageName, author, description, yearCreated ,removeHandler})=>{
    
    return(
        <div className="w-[300px] h-[480px] bg-white rounded-xl p-4 flex flex-col justify-between">
            <div className="w-full h-[40%] border-b-2 flex justify-center items-center">
                <img src={imageSrc} className="object-cover w-[150px] h-auto mx-auto pb-4"></img>
            </div>
            <div className=" h-[45%] flex flex-col justify-around">
                <div>
                    <div>
                        <p className="text-xl font-bold uppercase ">{languageName}</p>
                        <p className="text-sm">{author}</p>
                    </div>
                    <p className="mt-2">{yearCreated}</p>
                </div>
                
                <span className="text-">
                    {description}
                </span>
                
            </div>
            <button onClick={() => removeHandler(id)} className="bg-blue-200 w-full h-10 rounded-lg text-xl font-smibold">NOT INTRESTED</button>
        </div>
    );
}

export default Card;


const Card = ({id , imageSrc, languageName, author, description, yearCreated}, {removeHandler})=>{
    return(
        <div className="w-[250px] ">
            <img src={imageSrc}></img>
            <div>
                <div>
                    <div>
                        <p>{languageName}</p>
                        <p>{author}</p>
                    </div>
                    <p>{yearCreated}</p>
                </div>
                
                <span>
                    {description}
                </span>
            </div>
            <button onClick={() => removeHandler(id)}>NOT INTRESTED</button>
        </div>
    );
}

export default Card;


const Card = ({id , imageSrc, languageName, author, description, yearCreated}, {removeHandler})=>{
    return(
        <div>
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
                <button onClick={() => removeHandler(id)}>NOT INTRESTED</button>
            </div>
        </div>
    );
}

export default Card;
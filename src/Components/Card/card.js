import "./card.css";
const Card = (props) => {
    
    return (
        <div className="card w-14">
        <img src={props.data.url} className="card-img-top" alt={props.data.title} />
        <div className="card-body">
            <h5 className="card-title">Photo Id: {props.data.id}</h5>
            <p className="card-text">{props.data.title}</p>
        </div>
    </div>
    
     
     )
}
 
export default Card;
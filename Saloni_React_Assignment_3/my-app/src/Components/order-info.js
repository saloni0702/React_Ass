import "./style.css"

function Orderinfo(props){
    return(
        <div className="container" id="side">
            <div>
                <p className="label">Status</p>
                <ul>
                    <li><span>{props.obj.Status}</span>
                        </li></ul>
            </div>
            <div>
                <p className="label">Door</p>
                <p>{props.obj.Door}</p>
            </div>
            <div>
                <p className="label">Time</p>
                <p>{props.obj.Time}<span className="grey">{props.obj.Date}</span></p>
            </div>
        </div>
    )
}
export default Orderinfo
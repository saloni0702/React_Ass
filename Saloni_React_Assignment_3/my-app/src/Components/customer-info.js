import "./style.css"

function Customerinfo(props){
    console.log(props)
    return(
        <div className="second">
            <p><span className="label">Appointment: </span>
            <span className="">{props.obj.appointment}</span></p>
            <p><span className="label">Email: </span>
            <span className="">{props.obj.Email}</span></p>
            <p><span className="label">Phone: </span>
            <span className="">{props.obj.Phone}</span></p>
            
        </div>
    );
}
export default Customerinfo
import "./style.css"

const header=(props)=>{
    return(
        <div id="header">
            <a href="prev" id="prev" >&#8249;</a>
            <p id="name">
            <span>{props.obj.Name}</span></p>
            <p id="name">
            
            <span className="grey">{props.obj.EmployeeID}</span>
            </p>
            <a href="print" id="button" onclick="window.print();return false;">Print</a>
        </div>
    )
}
export default header
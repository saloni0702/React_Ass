import "./style.css"

function Productlist(props){
    return(
        <div id="third">
           <div> <input type="checkbox" id="product" className="product"></input>
            <img src={props.obj.profileImg} alt="profileimg"></img></div>
            <div id="P"><h3>{props.obj.Product}</h3>
            <p id="description" className="grey">{props.obj.Description}</p></div>
            <div className="right"><a href="next" id="next" >&#8250;</a></div>
            
        </div>
            
    )
}

export default Productlist
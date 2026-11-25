function Skillcard({ name,icon:Icon,color }){
    return(
        <div className="skillcard">
            <Icon style ={{color: color }}/>
            <h2>{name}</h2>
           
            
        </div>
    );
}

export default Skillcard;
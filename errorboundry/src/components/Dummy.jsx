export function Dummy (props){
    if(props.Country === "usa"){
        throw new Error("error in Dummy")
    }
    return(
        <p>{props.Country}</p>
    )
}
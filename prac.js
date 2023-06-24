const fetchs=async(dispatch)=>{
    const response=await fetch("http://localhost:9000/todos");
    const data= await response.json();
    dispatch(added(data));

}
export default fetchs;
const adds=(text)=>{
    return async(dispatch)=>{
        const response=await fetch('http://localhost:9000/todos',{
            method:"POST",
            body:JSON.stringify({
                color:"",
                text:text
            }),
            headers:{
                "Content-type":"application/json; charset=UTF-8"
            },
        
        });
        const data=await response.json();
        dispatch(added(data.text));


    }
}
export default adds;
const updates=(id,status)=>{
    return async(dispatch)=>{
        const response=await fetch(`http://localhost:9000/todos/${id}`,{
            method:"PATCH",
            body:JSON.stringify({
                status:!status
            }),
            headers:{
                "Content-type":"application/json; charset=UTF-8"
            },
        });
        const data=await response.json();
        dispatch(updts(data.id,data.status));
    }
}
export default updates;
const del=(id)=>{
      return async(dispatch)=>{
        const response=await fetch(`http://localhost:9000/todos/${id}`,{
            method:"DELETE",
        })
        dispatch(dels(id));
      }
}
export default del;

const mxid=(toso)=>{
    const maxid=toso.reduce((maxid,toso)=>Math.max(toso.id,maxid),-1);
    return maxid+1;
}
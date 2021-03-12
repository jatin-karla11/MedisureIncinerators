import React from 'react'

function About() {
    return (
        <div className="conatiner">
            
             <div className="row " style={{ display:"flex" ,flexWrap:"wrap",flexDirection:"row",justifyContent: "center"}}>
           <div className="col-md-6" style={{float:"left",justifyContent: "space-between"}}>
           <div className="card " style={{marginLeft:"25%",marginTop:"15%",padding:" 20px",width: "27rem",height:"27rem"}}>
               <img   src="https://www.conserve-energy-future.com/wp-content/uploads/2016/04/environment-protection-from-various-environmental-issues.jpg" style={{width:"100%" ,height:"100%",padding:"0px", borderRadius: "8px",alignItems:"center",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",border:"7px solid black"}}/>
               </div>
               </div>
             
               <div className="col-md-6 " style={{float:"left",justifyContent: "space-between"}}>
                   <div className="card " style={{marginRight:"90%",marginLeft:"auto",marginTop:"8%",padding:"20px",width: "32rem",height:"37rem",marginBottom: "50px"}}>
                   <div className="card-body">
                       <div className="card-text" style={{textAlign:"left"}}>
                       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                   It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passage.
                       </div>
                   </div>
                   </div>
                   </div>
               </div> 
        </div>
    )
}

export default About;

import React from 'react';

const Cart = (props) => {
    const{cart}=props;
    
    const reducer = (prev,cur)=>prev + cur.salary;
     const total= cart.reduce(reducer,0)
    
    return (
        <div className="border border-success bg-light p-3 m-2 ">
<h6 className="text-center my-3 bolder text-danger border border-success p-2" >Hire Person and Calculation</h6>
       <h6 ><small className="text-success"><i className="fas fa-user-alt"></i> Developers added :</small> <small className="text-danger">{cart.length}</small></h6>
       <h5 ><small className="text-success"> Total Cost:</small> <small   className="text-danger "> ${total}</small></h5>
        <div >
             {
                 cart.map((cDev) =><div className="d-flex my-1 ">
                     
                    <div className=""> <img width="29" height="35.2" src={cDev.image}alt="" /></div>
                     <div style={{"width":"153px"}}   className="bg-success text-white text-center ">
                     <h6 className=" my-1 ">{cDev.name} <i className="fas fa-check-square "></i></h6>
                     </div>
                     </div>
                 )
             }
        
        </div>
       
        </div>
    );
};

export default Cart;
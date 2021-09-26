import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Developer from '../Developer/Developer';


const DeveloperHire = () => {
    const [developers,setDevelopers]=useState([]);
    const[cart,setCart]=useState([]);
    const cartHandler =(developer)=>{
        const newCart=[...cart,developer];
        setCart(newCart);

    }
    useEffect(()=>{
        fetch('developersData.JSON')
        .then(res=>res.json())
        .then(data=>setDevelopers(data))
    },[])

    return (
        <div>
           <div name="container">

<div className="row m-3">
    <div className="col-9">
    <div className="row">
        {developers.map(developer=><Developer
        key={developer.name}
        developer={developer} cartHandler={cartHandler} ></Developer>)}
    </div>
    </div>
    <div className="col-3">
   <Cart cart={cart}></Cart>
</div>
</div>


               </div> 
        </div>
    );
};

export default DeveloperHire;
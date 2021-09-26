import React from 'react';

const Developer = (props) => {
    const {name,image,profession,country,email,salary} =props.developer
    return (
        <div className="col-3 m-3"> 
        <div className="card border border-3 border-success" style={{"width": "18rem"}}>
  <img src={image} height="150" width="150" className="border border-dark rounded-2 mx-auto my-2" alt="..."/>
  <div className="card-body text-center">
    <h5 className="card-title">{name}</h5>
    <h6 className="fw-bolder text-dark "><small>{profession}</small> </h6>
    <h5>Country: <small>{country}</small></h5>
    <h6>Email: <small>{email}</small></h6>
    <h5>Salary: <small>{salary}</small>$</h5>
    <button className="btn btn-success" onClick={()=>props.cartHandler(props.developer)}><i className="fas fa-shopping-cart"></i>add to cart</button>
    <p><small><a href="https://www.fb.com/"><i className="fab fa-facebook text-secondary"></i></a></small>   <small><a href="https://www.github.com"><i className="fab fa-github text-secondary"></i></a></small></p>
    
  </div>
</div>
        </div>
    );
};

export default Developer;
import React, { Component } from 'react';
import json from './Product.json';
import { connect } from 'react-redux';

    class MyProduct extends Component {
        constructor(props) {
            super(props)
            this.state = {
                proData: [],
                pid: 0,
                pquantity:0
            };
    
        }
        componentDidMount() {
            this.setState({ proData: json.MyProduct })
    
        }

    addCart=(id)=>{
        if(localStorage.getItem('mycart')!=undefined){
            let arr = JSON.parse(localStorage.getItem('mycart'));
            if(arr.includes(id)){
                alert("Product Already Added");
                
            }
            else{
                arr.push(id);
                localStorage.setItem('mycart',JSON.stringify(arr));
                alert("Product Added to Cart");
                this.setState({ pid: this.state.pid + 1 })
            }
        }
        else{
            let arr = [];
            arr.push(id);
            localStorage.setItem('mycart',JSON.stringify(arr));
            alert("Product Added to Cart");
            this.setState({ pid: this.state.pid + 1 })
        }
    }

  render() {
    
    return (
        <>
        <nav class='nav'>
        <a class="nav-link active" href="#">Home</a>
        <a class="nav-link" href="#">About</a>
        <a class="nav-link" href="#">MyCart {this.state.pid}</a>
        <a class="nav-link" href="#">Contact Us</a>
        </nav> 
        <div className="card-columns">
            {json.products.map(data=>
            <div className="card bg.light">
            <div className="card-body">
                <img className="card-img-top" height="300px" src={`./${data.images}`} alt="image not found"></img>
                <p className="card-title">{data.pname}</p>
                <p className="card-text">
                    Id: {data.id}<br />
                    Pname: {data.pname}<br />
                    Price: <span style={{color:"red",fontsize:"large",fontWeight:"bold"}}>${data.price}</span><br />
                    Quantity: {data.quantity} remaining
                </p>
               
                <button className="btn btn-info" onClick={()=>this.addCart(data.id)}>
                    <i className="fa-solid fa-cart-shopping"></i>Add to Cart</button>
            </div>
            </div>
                )}
            
        </div>
       </>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
    return{
        item : function(){
            dispatch({type:'Additem'})
        }
    }
}
export default connect(null,mapDispatchToProps)(MyProduct);



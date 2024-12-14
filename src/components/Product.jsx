import './Product.css'
function Product(){

    return(
        <div>
            <div className="product-container">
            <div className="product-img-container">
                <div className="product-img-container-chaild">
                    {/* <img className="product-img"  src="https://res.cloudinary.com/muni/image/upload/v1731909217/e_igdwoy.jpg"></img> */}
                    <img className="product-img"  src="https://n2.sdlcdn.com/imgs/k/n/q/IVOC-Grey-100-Cotton-Regular-SDL559476395-1-4b8ca.jpg"></img>
                </div>
            </div>
            <div className="product-details-container">
                <div className="product-details-chaild">
                   <h2>IVOC - Grey 100% Cotton Regular Fit Men's Formal Shirt ( Pack of 1 )</h2>
                   <p>element is a container for different types of input elements, such as: text fields, checkboxes, radio buttons, submit buttons, etc.</p>
                   <div>5.8</div>
                    <select name="cars" id="cars">
                        <option value="volvo">M</option>
                        <option value="saab">L</option>
                        <option value="mercedes">XL</option>
                        <option value="audi">XXX</option>
                    </select><br></br>
                   <button className='login-from-button-item' >Buy</button>
                   <button className='login-from-button-item'>Cart</button>
                </div>
            </div>
        </div>

            <div className='product-reviews-details-container'>
               <div className='product-reviews-user-container'>
                    <div className='product-reviews-user'>
                        <img className='product-reviews-user-img' src="https://i.pinimg.com/280x280_RS/56/19/42/56194202fb7f731d2b59f7a6d913e335.jpg"></img>
                        <div>
                        <div className='product-reviews-user-name' >Munisekhar</div>
                        <div className='product-reviews-rating'>4.5</div>
                        <div className='product-reviews'>element is a container for different types of input elements, such as: text </div>
                        </div>
                    </div>  
                </div>

                <div className='product-reviews-user-container'>
                    <div className='product-reviews-user'>
                        <img className='product-reviews-user-img' src="https://i.pinimg.com/280x280_RS/56/19/42/56194202fb7f731d2b59f7a6d913e335.jpg"></img>
                        <div>
                        <div className='product-reviews-user-name' >Munisekhar</div>
                        <div className='product-reviews-rating'>4.5</div>
                        <div className='product-reviews'>element is a container for different types of input elements, such as: text </div>
                        </div>
                    </div>  
                </div>

                <div className='product-reviews-user-container'>
                    <div className='product-reviews-user'>
                        <img className='product-reviews-user-img' src="https://i.pinimg.com/280x280_RS/56/19/42/56194202fb7f731d2b59f7a6d913e335.jpg"></img>
                        <div>
                        <div className='product-reviews-user-name' >Munisekhar</div>
                        <div className='product-reviews-rating'>4.5</div>
                        <div className='product-reviews'>element is a container for different types of input elements, such as: text </div>
                        </div>
                    </div>  
                </div>

                <div className='product-reviews-user-container'>
                    <div className='product-reviews-user'>
                        <img className='product-reviews-user-img' src="https://i.pinimg.com/280x280_RS/56/19/42/56194202fb7f731d2b59f7a6d913e335.jpg"></img>
                        <div>
                        <div className='product-reviews-user-name' >Ram</div>
                        <div className='product-reviews-rating'>4.5</div>
                        <div className='product-reviews'>s of input elements, such as: text </div>
                        </div>
                    </div>  
                </div>
                
            </div>
        </div>
    )
}
export default Product;
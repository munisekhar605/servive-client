import  './Orders.css'
function Orders(){

    return(
        <div className="orders-container">
            <h2 className="orders-heading">Your Orders</h2>
          
            <div className='order-item-container'>
            <img className='order-item-img' src="https://n2.sdlcdn.com/imgs/k/n/q/IVOC-Grey-100-Cotton-Regular-SDL559476395-1-4b8ca.jpg"></img>
            <div className='order-item-details'>
                <h6 className='order-item-title' >IVOC - Grey 100% Cotton Regular Fit Men's Formal Shirt ( Pack of 1 )</h6>
                <p className='order-item-description'>element is a container for different types of input elements, such as: text fields, checkboxes, radio buttons, submit buttons, etc.</p>
            </div>
            <div className='order-item-price'>₹555</div>
           </div>
            
           
           <div className='order-item-container'>
            <img className='order-item-img' src="https://n2.sdlcdn.com/imgs/k/n/q/IVOC-Grey-100-Cotton-Regular-SDL559476395-1-4b8ca.jpg"></img>
            <div className='order-item-details'>
                <h6 className='order-item-title' >IVOC - Grey 100% Cotton Regular Fit Men's Formal Shirt ( Pack of 1 )</h6>
                <p className='order-item-description'>element is a container for different types of input elements, such as: text fields, checkboxes, radio buttons, submit buttons, etc.</p>
            </div>
            <div className='order-item-price'>₹555</div>
           </div>

        </div>
    )
}
export default Orders;
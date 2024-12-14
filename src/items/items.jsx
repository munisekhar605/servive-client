import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './items.css';
import {useNavigate} from 'react-router-dom'
function Items() {
  let data = [
    {
      id: 1,
      productImg: "https://res.cloudinary.com/muni/image/upload/v1731901101/S-K-CASUAL-Cotton-Blend-SDL251800163-1-8c992_hslnds.jpg",
      title: "Shirt",
      ratimg: 3,
      price: 555,
    },
    {
      id: 2,
      productImg: "https://res.cloudinary.com/muni/image/upload/v1731909217/e_igdwoy.jpg",
      title: "Shirt",
      ratimg: 3,
      price: 555,
    }
  ];


  const navigate = useNavigate();

  const handleClick = (id) => {
    console.log("hhh")
    navigate(`/product/${id}`); 
  };

  return (
    <div className="items-container"  >
      <Row>
        {data.map((dataitem) => (
          <Col xs={5} sm={5} md={4} lg={4} xl={2} xxl={2} key={dataitem.id} onClick={()=>handleClick(dataitem.id)} className='shadow-sm item-container'>
            <img className='nav-img-container' src={dataitem.productImg} alt={dataitem.title}></img>
            <p className='item-title'>{dataitem.title}</p>
            <button className='item-button' onClick={()=>handleClick(dataitem.id)}>Buy Now</button>
            <button className='item-rating' onClick={()=>handleClick(dataitem.id)}>
              {dataitem.ratimg}{" || 65 "}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
              </svg>
            </button>
            <p className='item-price'>{dataitem.price}₹</p>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Items;

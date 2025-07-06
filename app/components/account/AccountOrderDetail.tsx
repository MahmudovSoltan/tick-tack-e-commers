

const products = [
  {
    name: "Portağal 1kq",
    count: 10,
    price: "30m/pulsuz",
    image: "https://cdn-icons-png.flaticon.com/512/415/415682.png", // portağal şəkli
  },
  {
    name: "Portağal 1kq",
    count: 10,
    price: "30m/pulsuz",
    image: "https://cdn-icons-png.flaticon.com/512/415/415682.png",
  },
  {
    name: "Portağal 1kq",
    count: 10,
    price: "30m/pulsuz",
    image: "https://cdn-icons-png.flaticon.com/512/415/415682.png",
  },
];

const OrderDetails = () => {
  return (
    <div>
      <div className="order-info">
        <div>
          <p className="label">Sifariş nömrəsi</p>
          <p>#321321</p>
        </div>
        <div>
          <p className="label">Sifariş vaxtı</p>
          <p>10.09.2021 18:30</p>
        </div>
        <div>
          <p className="label">Sifariş nömrə</p>
          <p>#321321</p>
        </div>
        <div>
          <p className="label">Çatdırılma ünvanı</p>
          <p>Zərifə Əliyeva 55, Bakı, Azərbaycan</p>
        </div>
        <div>
          <p className="label">Sifariş nömrə</p>
          <p>#321321</p>
        </div>
        <div>
          <p className="label">Sifariş nömrə</p>
          <p>#321321</p>
        </div>
      </div>

      <h3 className="products-title">Məhsullar</h3>

      <div className="product-list">
        {products.map((product, index) => (
          <div className="product-row" key={index}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.count}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderDetails;

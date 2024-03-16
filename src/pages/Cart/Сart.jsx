import{ useContext } from "react";
import "./Сart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Сart = () => {
  const { cartItem, food_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate()

  return (
    <div className="cart">
      <div className="cart-items">
        <ul className="cart-items-title">
          <li>Товар</li>
          <li>Название</li>
          <li>Цена</li>
          <li>Количество</li>
          <li>Итого</li>
          <li>Удалить</li>
        </ul>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItem[item._id] > 0) {
            return (
              <>
              <div className="cart-items-item cart-items-title" key={item._id}>
               <img src={item.image} alt="" />
                <p className="item-name">{item.name}</p>
                <p>{item.price}&#8381;</p>
                <p>{cartItem[item._id]}</p>
                <p>{item.price*cartItem[item._id]} &#8381;</p>
                <p onClick={()=>removeFromCart(item._id)} className="cross">x</p>
               
              </div>
              <hr />
              </>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Сумма заказа</h2>
          <div>
            <div className="cart-total-details">
              <p>Цена</p>
              <p>{getTotalCartAmount()} &#8381;</p>
            </div>
            <div className="cart-total-details">
              <p>Скидка</p>
              <p>{getTotalCartAmount()===0?0:20} &#8381;</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Итого</b>
              <b>{getTotalCartAmount()===0?0: getTotalCartAmount()-20} &#8381;</b>
            </div>
          </div>
            <button onClick={()=>navigate('/order')}>Перейти к оплате</button>
        </div>
          <div className="cart-promocode">
            <div>
              <p>Если у вас есть промо-код, введите его здесь</p>
              <div className="cart-promocode-input">
                  <input type="text" placeholder="Promo code" />
                  <button>Применить</button>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Сart;

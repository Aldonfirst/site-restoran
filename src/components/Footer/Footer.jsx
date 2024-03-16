
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="Лого" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Aliquam consequatur sunt obcaecati alias? 
                     </p>
                <div className="footer-social-icon">
                    <img src={assets.facebook_icon} alt="Facebook" />
                    <img src={assets.linkedin_icon} alt="Linkedin" />
                    <img src={assets.twitter_icon} alt="Twitter" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Компания</h2>
                <ul>
                    <li>Главная</li>
                    <li>О нас</li>
                    <li>Доставка</li>
                    <li>Политика Конфиденциальности</li>
                </ul>
            </div>
            <div className="footer-content-right">
                 <h2>Связаться с нами</h2>
                    <ul>
                        <li>+7-123-345-67-89</li>
                        <li>contact@gmail.com</li>
                    </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copy-right'>
         	TG:@aldonfirst &#169;  All Right Reserved
        </p>
    </div>
  )
}

export default Footer
import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Наше меню</h1>
            <p className='explore-menu-text'>
            Выбирайте из разнообразного меню, включающего восхитительный выбор блюд. 
            Наша миссия - удовлетворить ваши пристрастия и улучшить впечатления от ужина, приготовив вкусное блюдо для вас.
                </p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => {
                    return (
                        <div className="explore-menu-list-item"
                            onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
                            key={index}>
                            <img src={item.menu_image}
                                alt={item.menu_name}
                                className={category === item.menu_name ? "active" : ""} />
                            <p className="explore-menu-item-name">{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu
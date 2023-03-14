import React from 'react'
import Styles from './grid.module.css'
import imgas from './Rectangle 632.png'

function Grid(props) {
  return (
    <div className={Styles.block}>
      <div className={Styles.title}>
        <h1 className={Styles.gridza}>Каталог впечатлений</h1>
      </div>
      <div className={Styles.gridt}>
            <div>
               <img className={Styles.gridimg} src={props.img} alt="" />
               <h2 className={Styles.gridtitle}>{props.title}</h2>
               <p className={Styles.gridsum}>{props.buy}</p>
               <button className={Styles.gridbutton}>Заказать</button>
               <a className={Styles.gridss} href="#">Подробнее</a>
            </div>
            
          
      </div>
    </div>
  )
}

export default Grid
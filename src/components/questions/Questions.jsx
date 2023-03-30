import React from 'react'
import Styles from './questions.module.css'

const Questions = () => {
  return (
   

  
    <div className={Styles.fuq}>
      <h1>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h1>
    <div className={Styles.fuqitem}>

    <label className={Styles.fuqtitle} For="fuq-1">Могу ли я купить сертификат в подарок?</label>
    <input className={Styles.fuqinput} type="checkbox" name="fuq" id="fuq_1" />

    <div className={Styles.fuqText}>
      <p>Да, конечно можете.</p>
    </div>

    </div>
    


    <div className={Styles.fuqitem}>

<label className={Styles.fuqtitle} For="fuq-2">Могу ли я поменять сертификат на другой?</label>
<input className={Styles.fuqinput} type="checkbox" name="fuq" id="fuq_2" />

<div className={Styles.fuqText}>
  <p>Да можете, если его срок действия не вышел.</p>
</div>

</div>


<div className={Styles.fuqitem}>

<label className={Styles.fuqtitle} For="fuq_3">Может ли сертификат просрочиться?</label>
<input className={Styles.fuqinput} type="checkbox" name="fuq" id="fuq_3" />

<div className={Styles.fuqText}>
  <p>Срок действия 3 месяца.</p>
</div>

</div>



<div className={Styles.fuqitem}>

<label className={Styles.fuqtitle} For="fuq-4">Могу ли я выбрать другой дизайн сертификата?
</label>
<input className={Styles.fuqinput} type="checkbox" name="fuq" id="fuq_4" />

<div className={Styles.fuqText}>
  <p>Да можете, но это будет стоить дороже.</p>
</div>

</div>




<div className={Styles.fuqitem}>

<label className={Styles.fuqtitle} For="fuq-5">Могу ли я вернуть сертификат?</label>
<input className={Styles.fuqinput} type="checkbox" name="fuq" id="fuq_5" />

<div className={Styles.fuqText}>
  <p>Нет, вы можете поменять его на другой.</p>
</div>

</div>

    </div>

   
  )
}
 
export default Questions

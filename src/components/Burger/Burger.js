import React  from "react";
import BurgerIngerdiant from "./BurgerIngrediants/BurgerIngrediant";
import "./Burger.css"

const Burger = (props) => {
    let sum = Object.values(props.ing).reduce((a,b)=>a+b)
    let ingrediants = <p>please start adding ingrediant !</p>
    if(sum>0){
    ingrediants = Object.keys(props.ing).map((ing)=>{
        return [...Array(props.ing[ing])].map((_,i)=>{
            return <BurgerIngerdiant key ={ing+i} type={ing}/>
        })        
    })
}
   return( <div className='Container'>
       {sum}
<BurgerIngerdiant type={ 'BreadTop' }/>
{ingrediants}
<BurgerIngerdiant type={'BreadBottom'}/>
</div>
)
}
export default Burger
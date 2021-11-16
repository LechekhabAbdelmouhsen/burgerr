import React  from "react";
import BurgerIngerdiant from "./BurgerIngrediants/BurgerIngrediant";
import "./Burger.css"

const Burger = (props) => {
    const ingrediants = Object.keys(props.ing).map((ing)=>{
        return [...Array(props.ing[ing])].map((_,i)=>{
            return <BurgerIngerdiant key ={ing+i} type={ing}/>
        })        
    })

   return( <div className='Container'>
<BurgerIngerdiant type={ 'BreadTop' }/>
{ingrediants}
<BurgerIngerdiant type={'BreadBottom'}/>
</div>
)
}
export default Burger
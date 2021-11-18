import React from "react";
import './BuildControls.css'
import BuildControl from "./BuildControl/BuildControl";
const controls = [
    {label:'Salad' , type:'Salad'},
    {label:'Bacon' , type:'Bacon'},
    {label:'Meat' , type:'Meat'},
    {label:'Cheese' , type:'Cheese'}
]
const BuildControls = (props) =>{
      return   <div className='BuildControls'> 
            <div><p> The Price Is : {props.totalePrice.toFixed(2)}</p></div>
           {controls.map(lb =>{
               
               return <BuildControl 
                        key={lb.label}
                        label={lb.label} 
                        add={()=>props.addIngrediant(lb.label)}
                        remove={()=> props.removeIngredient(lb.label)}
                        dis={props.disabledButton[lb.label]}
                        
                        />
           })}
           <button className='OrderButton' disabled={props.Purchasable} onClick={props.add}>ORDER NOW</button>
        </div>
}
export default BuildControls;
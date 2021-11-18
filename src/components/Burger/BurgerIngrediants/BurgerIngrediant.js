import React from 'react'

import PropTypes from 'prop-types'
import './BurgerIngrediant.css'
class  BurgerIngerdiant extends React.Component  {
  
    render(){
        let ingrediant = null
        switch(this.props.type) {
            case ('BreadBottom') :
                 ingrediant = <div className='BreadBottom'>&nbsp;</div>;
                 break;
            case ('BreadTop') :
                 ingrediant =  <div className='BreadTop'>&nbsp;
                                    <div className='Seeds1'>&nbsp;</div>
                                    <div className='Seeds2'>&nbsp;</div>
                                </div>
                     ;
                 break;
            case ('Meat') : 
            ingrediant = <div className='Meat'>&nbsp;</div> ;
            break;
            case ('Cheese') :
                 ingrediant =  <div className='Cheese'>&nbsp;</div> ;
                 break;
            case ('Salad') :
                 ingrediant = <div className='Salad'>&nbsp;</div> ;
                 break;
            case ('Bacon') :
                 ingrediant = <div className='Bacon'>&nbsp;</div> 
            ;break;
            default :
                 ingrediant=null;
    
        }
    
        return(ingrediant)
    }
   
}
BurgerIngerdiant.propTypes = {
        type:PropTypes.string.isRequired
}

export default BurgerIngerdiant;
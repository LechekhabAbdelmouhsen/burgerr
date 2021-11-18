
import React,{Component} from "react"
import Auxx from "../../hoc/Auxx"
import Burger from "../../components/Burger/Burger"
import BuildControls from "../../components/Burger/BuildControls/BuildControls"

const INGREDIANTS_PRICE = {
    Salad:0.5,
        Bacon:0.7,
        Cheese:0.6,
        Meat:1.3 
}

class BurgerBuilder extends Component {

constructor (props) {
    super(props)
    this.state ={
        Ingrediants:{
        Salad:0,
        Bacon:0,
        Cheese:0,
        Meat:0 },
        TotalePrice:4,
        Purchasable:true,
    }
}

    AddIngrediantHandler = (type) => {
        let updatedState = {...this.state.Ingrediants};
        updatedState[type] = this.state.Ingrediants[type]+1 ;
        const updatedPrice = this.state.TotalePrice + INGREDIANTS_PRICE[type]
        this.setState({Ingrediants:updatedState,TotalePrice:updatedPrice})
        this.PurchasableHandler(updatedState)
    }
    RemoveIngrediantHandler = (type) => {
        if(this.state.Ingrediants[type]<=0) return;
        let updatedState = {...this.state.Ingrediants};
        updatedState[type] = this.state.Ingrediants[type]-1 ;
        const updatedPrice = this.state.TotalePrice - INGREDIANTS_PRICE[type]
        this.setState({Ingrediants:updatedState,TotalePrice:updatedPrice})
        this.PurchasableHandler(updatedState)
    }
    PurchasableHandler = (Ingrediants) => {
        const sum = Object.values(Ingrediants).reduce((a,b)=>a+b);
        this.setState({Purchasable: !sum>0})
    }

    render(){
        let disabledButton = {...this.state.Ingrediants}
        for(let key in disabledButton){
            disabledButton[key]= disabledButton[key]<=0
        }
    return(
        <Auxx>
            <Burger ing={this.state.Ingrediants}/>
            <BuildControls 
                addIngrediant={this.AddIngrediantHandler}
                removeIngredient={this.RemoveIngrediantHandler}
                disabledButton={disabledButton}
                totalePrice={this.state.TotalePrice}
                Purchasable={this.state.Purchasable}/>
            
        </Auxx>
 
        )
    }
}
export default BurgerBuilder


import React,{Component} from "react"
import Auxx from "../../hoc/Auxx"
import Burger from "../../components/Burger/Burger"
class BurgerBuilder extends Component {

constructor (props) {
    super(props)
    this.state ={
        
        Salad:1,
        Bacon:1,
        Cheese:2
       
    }
}


    render(){
    return(
        <Auxx>
            <Burger ing={this.state}/>
            <div>Burger Controls</div>
        </Auxx>
 
        )
    }
}
export default BurgerBuilder

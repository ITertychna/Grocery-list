import { Component } from 'react';
import basket from './basket.png';

export class GroseryList extends Component {
    
    
    state = {
        userInput: "",
        groceryList: []
        }

        onChangeEvent(e) {// can also write (e)
            this.setState ( {userInput: e }) //acces to what user print; e.target.value
            console.log(e)
        }
        addItem(input){ //Make an array where texts will add together
            if (input === "") {
                alert ('Please enter an item');
            }
            else{
            let listArray = this.state.groceryList;
            // push - to add each text in the end of array
            listArray.push(input);
            //state that groceryList will be our listArray(where user add texts); userInput: "" - the text erase after adding to the array
            this.setState({groceryList: listArray, userInput: "" })
        }
        }

        deleteItem(){
            let listArray = this.state.groceryList;
            listArray = []; //2 way listArray.lenght = 0
            this.setState({groceryList: listArray})
        }

        crossWord(event){
            const li = event.target;
            li.classList.toggle('crossed'); //toggle add class(if there is no) and after erase this class(if it already there)
        }

      onFormSubmit(e){ //(e) so the page updated every time we push enter button
            e.preventDefault();
      }
        render() {
            return(
                <div>
                    <form onSubmit={this.onFormSubmit}> {/* When we have input we need to wrap all in form. And after we can add attribute onSubmit so the text can be entered by enter button on keyboard */}
                <div className='container'>
                    <input type="text" placeholder='What do you want to buy?' 
                    onChange ={ (e) => { this.onChangeEvent(e.target.value)}} // Old way:{ this.onChangeEvent } 
                    value = { this.state.userInput }/> 
                    {/* value is the acces (data) to what user type */}
                    </div>
                    <div className='container'>
                    {/* this.addItem(this.state.userInput) - Add what user type */}
                    <button className='btn-add' onClick={() => this.addItem(this.state.userInput)}>ADD</button> 
                    </div>
                    <ul>
                        {/* Map(item) - get asses to each taxt in array */}
                        {this.state.groceryList.map((item, index) => (
                            <li onClick={this.crossWord} key={index}>
                                <img src={basket} alt="Basket" width='20px' />
                                {item}
                                </li>
                        )) }
                    </ul>
                    <div className='container'>
                    <button className='btn-delete' onClick={() => this.deleteItem()}>DELETE</button>
                    </div>
                    </form>
                </div>
            )
        }
    }

    //Warning: Each child in a    list should have a unique "key" prop.
    //Error occures evry time in arrays when using map()
    // {this.state.groceryList.map((item, index) => ( - we need to add index which will be the unique key to our elements, 
    // <li key={index}>{item}</li> - add key={index}
    // )) }
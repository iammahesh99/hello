import React,{Component} from 'react';




class App extends Component {
 constructor(props) {
    super(props);
    this.state={
    	hit:[]
    }
    
  }


componentDidMount() {
    
    const uri='https://maheshpandey9919.000webhostapp.com/newproject/services/services/under_stock.php';
    //console.log(uri)

      fetch(uri,{
        method: 'GET',
        })
      .then(response =>  response.json())
      .then(resData => {
        //const Data=resData;

    
    
    this.setState({hit:resData});
                          
    
        
     //const arr=persons.map(pe => {return pe.supplier});

      });
    }
  
  render() 
  {
    
    return (
    	<div>
    	{this.state.hit.map(data =>{
    		return <li>{data.item}</li>
    	})}
    	</div>
      

      );
  }
}
export default App;

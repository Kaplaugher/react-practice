
function toCelcius(f){
  return(f - 32) * 5 / 9;
}

function toFahrenheit(c){
  return(c * 9 / 5) + 32;
}

function tryConvert(value,tUnit){
  var tryNumber = Number(value);
  if(isNaN(tryNumber)){
    return '';
  }else{
    if(tUnit == 'c'){
      var convertedNumber = toFahrenheit(tryNumber);
    }else{
      var convertedNumber = toCelcius(tryNumber);
    }
    return convertedNumber
  }
}
console.log(tryConvert(100,'f'));
console.log(tryConvert(0,'c'));



function BoilingVerdict(props) {
   if (props.celsius >= 100) {
       return(
           <p>The water would boil at {props.celsius}</p>
       )
   } else {
       return(
           <p>The water would not boil at {props.celsius}</p>
       )
   }
}

class TemperatureInput extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           value: ''
       };
       this.handleChange = this.handleChange.bind(this);
   }

   handleChange(event) {
       this.props.onChange(event.target.value)
     },


   render() {
     var value = this.props.value;
     var tUnits = this.props.tUnits;
       return(
           <div>
               <label>Enter temperature in question in {this.props.units}</label>
               <input placeholder="Temp" value={this.state.value} onChange={this.handleChange} />
           </div>
       )
   }

}

class Calculator extends React.Component {

  function handleCelciusChange(props){
    this.setState({
      scale: 'c'
      
    })
  }

   render() {
       return(
           <div>
               <TemperatureInput units="Celsius" value={} onChange={this.handleCelciusChange} />
               <TemperatureInput units="Fahrenheit" value={} onChange={}/>
               <BoilingVerdict celsius={Number(1)} />
           </div>
       )
   }
}

ReactDOM.render(
   <Calculator />,
   document.getElementById('container')
)

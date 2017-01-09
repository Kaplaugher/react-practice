function GoogleCity(props){
  return (
    <div className="cityName">
      {props.cityObject.city}
    </div>
  )
}
var Cities = React.createClass({
  render: function(){
    var cityRows = [];
    this.props.cities.map(function(currentCity,index){
      cityRows.push(<Googlecity cityObject={currentCity} key={index} />)
      console.log(city.city)
    })
    return(
      <div>
        {cityRows}
      </div>
    )
  }
})


ReactDOM.render(
  <Cities cities={cities} />,
  document.getElementById('cities-container')
);

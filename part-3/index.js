const Person = (props) => {
    const age = parseInt(props.age)
    let name;
    if(props.name.length > 8) {
        let arr = Array.from(props.name)
        let newArr = arr.slice(0,6)
        name = newArr.join('')
    } else {
        name = props.name
    }

    return(
    <div>
    <p>Learn some information about this person</p>
    <h3>{age >= 18 ? "Please go vote!" : "You must be 18"} </h3>
    <p>{name}</p>
   
    </div>
    )
}

const App = () => (
    <div>
        < Person age="9" name="NeilDegrasss"/>
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))
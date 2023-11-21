const Tweet = (props) => (
    <div>
    <p>{props.username}</p>
    <p><b>{props.name}</b></p>
    <p>{props.date}</p>
    <p>{props.message}</p>
    <hr></hr>
    </div>
)

const App = () => (
    <div>
        < Tweet username="wingman" name="Neil" date="11/11/2021" message="HAAAAVE you met Ted?"/>
        < Tweet username="cutiepatootie" name="ZinZin" date="11/21/2023" message="My toes look like little beans"/>
        < Tweet username="hooooorse" name="Ed" date="06/15/63" message="Peanut butter is sticky!"/>
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))
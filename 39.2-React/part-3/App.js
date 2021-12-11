
const personhobbies=['hob1', 'hob2', 'hob3']


// Main App component
const App = () => {
    return (
        <div>
            <h2>Person APP</h2>
            <Person person={persons[0]}/>
            <Person person={persons[1]}/>
        </div>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));
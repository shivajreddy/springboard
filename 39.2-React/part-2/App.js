const App = () => {
    return (
        <div>
            <h1>React - Part2</h1>
            < Tweet name="shiva" owner="Jocko " tweet="Discipline = Freedom" />
            < Tweet name="shiva" owner="Joe Rogan" tweet="The JRE show" />
            < Tweet name="shiva" owner="Jordan B Perterson" tweet="Walk with your shoulders back" />
        </div>

    );
};


ReactDOM.render(<App/>, document.getElementById('root'));


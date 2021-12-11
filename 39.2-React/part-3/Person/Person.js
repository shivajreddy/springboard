
const persons = [
{
    name : "shiva",
    age : 26,
    hobbies : ["code", "software", "games"]
},
{
    name: "england",
    age : 25,
    hobbies : ["reading", "movies", "dancing"]
}
];

const Person = ({person}) => {
    return (
        <div>

            <p>Learn some information about this person</p>
            <ul>
                <li>Name: {person.name}</li>
                <li>Age: {person.age}</li>
                <ul>
                    {person.hobbies.map(hobby=><li>{hobby}</li>)}
                </ul>
            </ul>

        </div>
    );
};

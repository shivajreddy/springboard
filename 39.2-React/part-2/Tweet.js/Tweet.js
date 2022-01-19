const Tweet = (props) => {

    let currentDate = new Date();
    let currentDay = currentDate.getDate()
    let currentTime = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

    const name = props.name
    const owner = props.owner
    const tweet = props.tweet

    return (
        <div className="tweet">
            <p>--------------------------------------</p>
            <h3>Tweet From: {owner}</h3>
            <h2>Tweet: {tweet}</h2>
            <h3>UserName: {name} </h3>
            <p>Date: {currentDay}, Time: {currentTime}</p>
        </div>
    );
};


import '../Pokecard/Pokecard.css'

const Pokecard = ({name, type, img, be}) => {
    return(
        <div className="pokecard">
            <h3 className='pokecard-item'>{name}</h3>
            <img className='pokecard-item'
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${img}.png`}>
            </img>
            <p className='pokecard-item'>Type:{type}</p>
            <p className='pokecard-item'>EXP:{be}</p>
        </div>
    )
};

export default Pokecard;
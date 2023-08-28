import cardCss from "./css/card.css"

function Card({songs, currentSongIndex}){
    return (
        <section className="card">
            <h2 className="a11y-hidden">Current Music</h2>
            <img src={process.env.PUBLIC_URL + songs[currentSongIndex].image} alt='Divide' className="album-img"></img>
            <h3>{songs[currentSongIndex].song}</h3>
            <p>{songs[currentSongIndex].artist}</p>
        </section>
    )
}
export default Card
function PlayList({ songs, isOpened }) {
    return (
    <ol className={isOpened ? "list-opened" : "hidden"}>
        {songs.map((item, i) => {
        return (
            <li key={i + 1}>
            <span>{`${i + 1}.`}</span>
            <span>{`${item.song} - ${item.artist}`}</span>
            </li>
        );
        })}
    </ol>
    );
}

export default PlayList;
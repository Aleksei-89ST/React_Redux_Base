function Likes (props) {
    console.log(props);
    return (
        <div className="button-controls">
            <button>❤ {props.likes}</button>
            <button>Dislike</button>
        </div>
    )
}
export default Likes;
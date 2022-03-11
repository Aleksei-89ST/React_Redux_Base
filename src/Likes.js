import { connect } from "react-redux";

function Likes (props) {
    console.log(props);
    return (
        <div className="button-controls">
            <button>❤ {props.likes}</button>
            <button>Dislike</button>
        </div>
    )
}
function mapStateToProps (state) {

}


export default connect (mapStateToProps)(Likes);
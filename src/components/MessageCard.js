import './MessageCard.css';
function MessageCard({ message }) {
    return (
        <div className="card">
            <div className="card-header">
                <h3>{ message.title }</h3>
            </div>
            <div className="card-body">
                <p>{ message.body }</p>
            </div>
        </div>
    )
}

export default MessageCard

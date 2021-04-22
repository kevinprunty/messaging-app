import MessageList from '../components/MessageList';
import MessageForm from '../components/MessageForm';

function Home() {
    return (
        <div>
           <h1>Home Page</h1> 
           <MessageForm />
           <MessageList />
        </div>
    )
}

export default Home

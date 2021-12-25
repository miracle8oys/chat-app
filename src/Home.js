import { db } from "./config/firebase";
import {collection, onSnapshot, Timestamp, addDoc, query, orderBy} from "firebase/firestore";
import { useEffect, useState } from "react";
import Form  from "react-bootstrap/Form";
import Button  from "react-bootstrap/Button";
import NavbarComponent from "./NavbarComponent";
import { Navbar } from "react-bootstrap";
const Home = ({user, signInWithGoogle, handleLogout}) => {

    const chatRef = query(collection(db, "chats"), orderBy('createdAt'));
    const [chat, setChat] = useState([]);

    useEffect(() => {
        onSnapshot(chatRef, (snapshot) => {
            setChat(snapshot.docs.map(doc => (
                    {
                            ...doc.data(),
                            id: doc.id
                        }
                    )));
            console.log("test");
        });
    }, []);

    //send message
    const [msg, setMsg] = useState('');

    const addChatRef = collection(db, "chats");

    const sendMessage = async (e) => {
        e.preventDefault();
        const currntTime = Timestamp.now();
        await addDoc(addChatRef, {
            user_profile: user.photoURL,
            createdAt: currntTime,
            msg,
            username: user.displayName,
            uid: user.uid
        });
        console.log(msg.length);
    }

    return ( 
        <div className="home">
             {user && 
                <>
                    <NavbarComponent user={user} handleLogout={handleLogout} />
                    <>
                        {chat.map(cht => ( 
                            <div key={cht.id}>
                                {cht.uid != user.uid ? 
                                    <div className="chat">
                                        <img src={`${cht.user_profile}`} alt="chat-profile" />
                                        <div className="chtdetail">
                                            <h5 className="msg-title">{cht.username}</h5>
                                            <h3 className="msg">{cht.msg}</h3>
                                        </div>
                                    </div> : 
                                    <div className="mychat">
                                        <div className="mychatdetail">
                                            <h5 className="msg-title">{cht.username}</h5>
                                            <h3 className="msg">{cht.msg}</h3>
                                        </div>
                                        <img src={`${cht.user_profile}`} alt="chat-profile" />
                                    </div>
                                }
                            </div>
                        ))}
                    </>
                    <Navbar className="chat-nav" fixed="bottom">
                        <Form fixed="bottom" onSubmit={sendMessage}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control onChange={(e) => setMsg(e.target.value)} type="text" autoComplete="off" />
                            </Form.Group>
                            <Button className="chat-btn" type="submit"><i className="far fa-paper-plane"></i></Button>
                        </Form>
                    </Navbar>
                </>
            }
        <div className="unauth">
            {!user && <Button className="mt-5" onClick={signInWithGoogle}>Login</Button>}
        </div>
            

        </div>
     );
}
 
export default Home;
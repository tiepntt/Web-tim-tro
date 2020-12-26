import React, { useEffect, useRef, useState } from "react";
import SendIcon from "@material-ui/icons/Send";
import io from "socket.io-client";
import CloseIcon from "@material-ui/icons/Close";
import "./style.scss";
import "react-chat-widget/lib/styles.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
const generateMessage = () => {
  const words = [
    "The sky",
    "above",
    "the port",
    "was",
    "the color of television",
    "tuned",
    "to",
    "a dead channel",
    ".",
    "All",
    "this happened",
    "more or less",
    ".",
    "I",
    "had",
    "the story",
    "bit by bit",
    "from various people",
    "and",
    "as generally",
    "happens",
    "in such cases",
    "each time",
    "it",
    "was",
    "a different story",
    ".",
    "It",
    "was",
    "a pleasure",
    "to",
    "burn",
  ];
  const text = [];
  let x = 7;
  while (--x) text.push(words[Math.floor(Math.random() * words.length)]);
  return text.join(" ");
};

interface Props {
  id?: any;
  room?: string;
}
interface Chat {
  userId: number;
  text: string;
}
let socket;
const END_POINT = "http://localhost:3000";
export const Chat = (props: Props) => {
  const { room } = props;
  const messageEl = useRef(null);
  const [messages, setMessages] = useState([] as Chat[]);
  const [textInput, setTextInput] = useState("");
  const [newMess, setNew] = useState(false);
  const user = useSelector((state: RootState) => state.UserReducer.account);

  useEffect(() => {
    if (messageEl) {
      (messageEl as any).current.addEventListener(
        "DOMNodeInserted",
        (event: any) => {
          const { currentTarget: target } = event;
          target.scroll({ top: target.scrollHeight, behavior: "smooth" });
        }
      );
    }
  }, []);
  useEffect(() => {
    socket = io(END_POINT);
    if (user?.name) {
      socket.emit("join", { name: user.name, room: "room" }, (error: any) => {
        if (error) {
          alert(error);
        }
      });
    }

    // socket.on()
  }, [END_POINT, user, room]);
  const send = () => {
    if (textInput !== "") {
      addMessenger(textInput);
      setTextInput("");
      setNew(true);
    }
  };
  useEffect(() => {
    if (newMess) {
      autoReply();
    }
  }, [newMess]);

  const autoReply = () => {
    setTimeout(
      () =>
        setMessages((prevMsg) => [
          ...prevMsg,
          { userId: 1, text: generateMessage() },
        ]),
      1000
    );
    setNew(false);
  };
  const addMessenger = (text: string) => {
    setMessages((prevMsg) => [...prevMsg, { userId: 2, text: text }]);
  };

  return (
    <div className="chat">
      <div className="head">Chat</div>
      <div className="messages" ref={messageEl}>
        {messages.map((m, i) => (
          <div className="content-chat-item">
            <div key={i} className={`msg${m.userId === 2 ? " dark" : ""}`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex footer ">
        <input
          style={{ flexGrow: 1 }}
          type="text"
          placeholder="Type here..."
          onKeyPress={(e) => e.key === "Enter" && send()}
          value={textInput}
          onChange={(e) => {
            setTextInput(e.target.value);
          }}
        />
        <div className="img" onClick={send}>
          <SendIcon color="error" />
        </div>
      </div>
    </div>
  );
};

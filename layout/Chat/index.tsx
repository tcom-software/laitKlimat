import { useCallback, useEffect, useRef, useState } from "react";
import cn from "classnames";

import { getChatOpen, getChatProps } from "@redux/selectors/site";
import { hideChat, showChat } from "@redux/actions/site";
import { useDispatch, useSelector } from "react-redux";

import Icon from "@atoms/Icon";
import Text from "@atoms/Text";
import { Message } from "./Message";
import { StyledChat } from "./styles";
import { getCookie, setCookie } from "utils/cookies";

import { Operator } from "./types";
import { mainChatStack, mainMesssage } from "./data";
import { useRouter } from "next/router";

const Chat = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isOpen = useSelector(getChatOpen);
  const chatProps = useSelector(getChatProps);
  const chatRef = useRef<HTMLDivElement>(null);
  const fieldRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<any[]>([]);

  const [operators, setOperators] = useState<Operator[]>([]);

  const showChatHandler = useCallback(() => dispatch(showChat()), []);
  const hideChatHandler = useCallback(() => dispatch(hideChat()), []);

  useEffect(() => {
    fetch("/api/getOnlineManagers")
      .then(response => {
        return response.json();
      })
      .then(data => setOperators(data));

    // setTimeout(
    //   () =>
    //     setMessages([
    //       {
    //         ...mainMesssage,
    //         buttons: [
    //           { title: "нет", onClick: hideChatHandler },
    //           { title: "да", onClick: () => handleOnYesClick(mainChatStack) },
    //         ],
    //       },
    //     ]),
    //   2000
    // );

    // if (
    //   !getCookie("ne_pokazat_ne_v_kartchke") &&
    //   !getCookie("ne_pokazat_chat")
    // ) {
    //   setTimeout(() => {
    //     if (isOpen === false) {
    //       setCookie("pervi_raz_den", true, 1);
    //       showChatHandler();
    //     }
    //   }, 2000);
    // }

    // setTimeout(() => {
    //   if (!getCookie("pokazat_malenki_v_kartchke") && isOpen === false) {
    //     setCookie("pervi_raz_den", true, 1);
    //     showChatHandler();
    //   }
    // }, 2000);

    // if user is first time set that user first time else set false
    const isUnique = getCookie("is_unique");
    if (isUnique === null) {
      setCookie("is_unique", true, 365);
    } else if (isUnique) {
      setCookie("is_unique", false, 365);
    }
  }, []);

  useEffect(() => {
    chatProps &&
      setMessages([
        {
          ...mainMesssage,
          id: "sale",
          message: (chatProps as any).text,
          buttons: [
            { title: "нет", onClick: hideChatHandler },
            {
              title: "да",
              onClick: () =>
                handleOnYesClick([
                  {
                    inComing: true,
                    avatar: { url: "" },
                    id: "sale",
                    message: (chatProps as any).text,
                  },
                  ...mainChatStack.slice(1),
                ]),
            },
          ],
        },
      ]);
  }, [chatProps]);

  useEffect(() => {
    if (
      !(
        router.pathname.includes("category") ||
        router.pathname.includes("product")
      ) &&
      messages[0]?.id !== "first main"
    ) {
      setMessages([
        {
          ...mainMesssage,
          buttons: [
            { title: "нет", onClick: hideChatHandler },
            { title: "да", onClick: () => handleOnYesClick(mainChatStack) },
          ],
        },
      ]);
    }
  }, [router.pathname]);

  const scrollToChatBottom = useCallback(() => {
    chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
  }, [chatRef]);

  const handleOnSubmit = (e: any) => {
    e.preventDefault();

    if (!message.trim()) {
      setMessage("");
      return;
    }

    const newMessage = {
      message,
      inComing: false,
      avatar: {
        url: "",
      },
    };

    fieldRef.current?.blur();

    setMessages(messages => [...messages, newMessage]);
    setMessage("");
  };

  const handleOnYesClick = (messagesStack: any[]) => {
    setMessages([messagesStack[0]]);
    let lastMessage: boolean = messagesStack[0].inComing;
    let time = -500;

    for (let message of messagesStack.slice(1)) {
      time += lastMessage === message.inComing ? 1500 : 500;
      lastMessage = message.inComing;
      setTimeout(() => setMessages(messages => [...messages, message]), time);
    }
  };

  return (
    <StyledChat className={cn("container")}>
      <div className={cn("content", { "chat-open": isOpen })}>
        <div className="chat-icon" onClick={showChatHandler}>
          <img src="/images/chat.png" alt="chat icon" />
        </div>
        <div className="chat">
          {/*///////////// HEADER ////////////////*/}
          <div className="chat-header">
            <Icon
              name="close"
              width={20}
              height={20}
              // @ts-ignore
              onClick={hideChatHandler}
            />
            <Text tag="p" className="title">
              {"оператор " + operators[0]?.username || ""}
            </Text>
            <div className="background-image" />
          </div>
          {/*///////////// MAIN ////////////////*/}
          <div className="chat-main" ref={chatRef}>
            {messages.map(props => (
              <Message
                key={props.id}
                scrollHandler={() => scrollToChatBottom()}
                {...props}
              />
            ))}
          </div>
          {/*///////////// FOOTER ////////////////*/}
          <div className="chat-footer">
            <div className="message-options">
              <Text
                tag="span"
                clr="primary"
                // @ts-ignore
                onClick={() => fieldRef.current?.focus()}
              >
                Ваше сообщение...
              </Text>
              <div className="message-tools">
                <button type="button">
                  <img src="/images/link.svg" alt="message toօl" />
                </button>
                <button type="button">
                  <img src="/images/plus.svg" alt="message toօl" />
                </button>
              </div>
            </div>
            <form onSubmit={handleOnSubmit}>
              <label className="srOnly" htmlFor="new_message">
                new message
              </label>
              <input
                readOnly
                id="new_message"
                ref={fieldRef}
                value={message}
                // readOnly
                onChange={e => setMessage(e.target.value)}
                className="message-field"
              />
            </form>
            <Text tag="p" clr="gray100">
              {"Нажмите <u>Enter</u> чтобы отправить сообшение"}
            </Text>
          </div>
        </div>
      </div>
    </StyledChat>
  );
};

export default Chat;

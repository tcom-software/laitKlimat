import { FC, isValidElement, useEffect, useState } from "react";

import Button from "@atoms/Button";
import Loader from "@atoms/Loader";
import { StyledMessage } from "./styles";
import { useChatContext } from "../context";

interface Props extends MessageContentProps {}

export const Message: FC<Props> = ({
  buttons,
  message,
  inComing,
  scrollHandler,
}) => {
  const {
    state: { operator },
  } = useChatContext();
  return (
    <StyledMessage
      className={inComing ? "operator" : "user"}
      inComing={inComing}
    >
      <MessageContent
        message={message}
        buttons={buttons}
        inComing={inComing}
        scrollHandler={scrollHandler}
      />
      <div className="avatar">
        <img
          src={
            inComing
              ? operator?.photo || " /images/chat_user.png"
              : "/images/chat_user.png"
          }
          alt="avatar"
        />
      </div>
    </StyledMessage>
  );
};

interface MessageContentProps {
  buttons?: any[];
  message: any;
  inComing: boolean;
  scrollHandler: () => void;
}

const MessageContent: FC<MessageContentProps> = ({
  message,
  buttons,
  inComing,
  scrollHandler,
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading && setTimeout(() => setLoading(false), inComing ? 1000 : 0);
    loading || (scrollHandler && scrollHandler());
  });

  // useEffect(() => {
  //   scrollHandler();
  // }, [loading]);

  const isJSXElement = isValidElement(message);

  return (
    <div className="message-container">
      <div className="message">
        {!loading ? (
          isJSXElement ? (
            message
          ) : (
            <p dangerouslySetInnerHTML={{ __html: message }} />
          )
        ) : (
          <Loader type="ThreeDots" className="loader" />
        )}
      </div>
      {buttons && !loading && (
        <div className="bts-group">
          <Button
            type="button"
            variant="secondary"
            title={buttons[0].title}
            {...buttons[0]}
          />
          <Button
            type="button"
            variant="primary"
            title={buttons[1].title}
            {...buttons[1]}
          />
        </div>
      )}
    </div>
  );
};

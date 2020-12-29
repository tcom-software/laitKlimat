import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";

import { Container } from "./styles";
import {
  getNotificationList,
  getNotificationPosition,
} from "@redux/selectors/notification";
import { removeNotification } from "@redux/actions/notification";
import { useEffect, useState } from "react";
import { Toast } from "@redux/reducers/notification";

const state = {
  success: { icon: "", backgrounColor: "green" },
  danger: { icon: "", backgrounColor: "red" },
  info: { icon: "", backgrounColor: "lightblue" },
  warning: { icon: "", backgrounColor: "yellow" },
};

const timeIds: any = {};

const Notification = () => {
  const [list, setList] = useState<Toast[]>([]);

  const dispatch = useDispatch();
  const toastList = useSelector(getNotificationList());
  const position = useSelector(getNotificationPosition());

  const remove = (id: number) => {
    dispatch(removeNotification(id));
    clearTimeout(timeIds[id]);
    Reflect.deleteProperty(timeIds, id);
  };

  useEffect(() => {
    const newList = toastList.filter(
      toast => !list.some(({ id }) => id === toast.id)
    );

    newList.forEach(toast => {
      const timeId = setTimeout(() => {
        remove(toast.id as number);
      }, 3000);
      timeIds[toast.id as number] = timeId;
    });

    setList([...toastList]);
  }, [toastList]);

  return (
    <Container className={cn([position, "container"])}>
      {list.map((toast, i) => (
        <div
          key={i}
          className={cn("notification", "toast", [position])}
          style={{ backgroundColor: state[toast.state].backgrounColor }}
        >
          <button onClick={() => remove(toast.id as number)}>X</button>
          {/* <div className="notification-image">
            <img src={icons[toast.state]} alt="" />
          </div> */}
          <div>
            <p className="notification-title">{toast.title}</p>
            <p className="notification-message">{toast.description}</p>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default Notification;

// {
//     id: 1,
//     title: 'Success',
//     description: 'This is a success toast component',
//     backgroundColor: '#5cb85c',
//     icon: ''
// }

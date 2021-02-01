import SubScribe from "./SubScribe";

export const mainMesssage = {
  inComing: true,
  avatar: { url: "" },
  id: "first main",
  message: "Здравствуйте!\nХотите получить лучшую цену на рынке?",
};

export const mainChatStack = [
  mainMesssage,
  {
    inComing: false,
    message: "да",
    id: "4512",
    avatar: { url: "/images/chat_user.png" },
  },
  {
    inComing: true,
    message: <SubScribe />,
    id: "45127",
    avatar: {
      url: "",
    },
  },
];

export const successEmailMessage = {
  inComing: true,
  message:
    'Спасибо , за интерес к нашей компании.\nЯ перезвоню Вам в течении 30 минут.\nС уважением,\nкоманда "Лайт Климат"',
  id: "45124",
  avatar: { url: "" },
};

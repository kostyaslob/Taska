import Mailbox from "./Mailbox/Mailbox";
import Mailbox2 from "./Mailbox/Mailbox2";
import List from "./List/List";
import Alert from "./Alert/Alert";
import Button from "./Button/Button"

const username = "Kostya";
const messages = [
  { id: 1, text: "Message 1" },
  { id: 2, text: "Message 2" },
];

const unreadMessages = ["Message 1", "Message 2", "Message 3 "];

export default function App() {
  return (
    <>
      <h1>Hello</h1>
      <Mailbox username={username} messages={messages} />
      <Mailbox2 username={username} unreadMessages={unreadMessages} />
      <List />
      <Alert message="Default color" />
      <Alert type="success" message="Green color" />
      <Alert type="error" message="Red color" />
      <Button text="Default"></Button>
      <Button type="search" text="Search"></Button>
      <Button type="reset" text="Reset"></Button>
    </>
  );
}

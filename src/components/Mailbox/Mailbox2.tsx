interface MailboxProps {
  username: string;
  unreadMessages: string[];
}

export default function Mailbox2({ username, unreadMessages }: MailboxProps) {
  return (
    <>
      <p>Hello, {username} </p>
      <div>
        {unreadMessages.length > 0 ? (
          <>
            <p>You have {unreadMessages.length} unread messages</p>
            <p>Check your inbox to read them!</p>
            <button>Open inbox</button>
          </>
        ) : (
          <p>No unread messages</p>
        )}
      </div>
    </>
  );
}

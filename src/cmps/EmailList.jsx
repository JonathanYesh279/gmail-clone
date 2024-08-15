import { EmailPreview } from "./EmailPreview.jsx";


export function EmailList({ emails }) {
  return (
    <section className="email-list">
      <ul>
        {emails.map(email => <li key={email._id}>
            <EmailPreview email={email} />
          </li>)}
      </ul>
    </section>
  );
}
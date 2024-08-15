

export function EmailPreview({ email }) {
    return (
      <section className='email-preview'>
        <div className="email-infos">
          <img src="../src/assets/imgs/star-black.png" alt="star" />
          <h4>{email.from.name}</h4>
          <p>{email.body}</p>
        </div>
        <p>{email.sentAt}</p>
      </section>
    );
}


import { useEffect, useState } from 'react';
import { emailService } from '../services/email.service.js';

import { EmailFilter } from '../cmps/EmailFilter.jsx'
import { EmailList } from '../cmps/EmailList.jsx'
import { AppHeader } from '../cmps/AppHeader.jsx';


export function EmailIndex() {
  const [emails, setEmails] = useState([]);
  const [currentFilter, setCurrentFilter] = useState(null)

  useEffect(() => {
      loadEmails()
  }, [currentFilter])
  

  async function loadEmails() { 
    try {
      const emails = await emailService.query(filterBy)
      setEmails(emails)
    } catch (err) {
      console.error('Error in fetching emails', err)
    }
  }

  function handleFilterClick(filter) {
    setCurrentFilter(filter)
  }


  if (!emails) return <div>Loading...</div>

  return (
    <section className='email-index'>
      <AppHeader onFilterChange={handleFilterClick} />
      <EmailFilter/>
      <EmailList emails={emails} />
    </section>
  );
}

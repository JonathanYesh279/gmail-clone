import { storageService } from './async-storage.service.js';
import { utilService } from './util.service.js';

export const emailService = {
    query,
    save,
    remove,
    getById,
}


const STORAGE_KEY = 'emails'

_createEmails()

async function query(filter) { 
  const emails = await storageService.query(STORAGE_KEY)

  if (!filter) return emails

  switch (filter) {
    case 'inbox':
      return emails.filter(email => email.inbox === true)
    case 'isStarred':
      return emails.filter(email => email.isStarred === true)
    case 'sentAt':
      return emails.filter(email => email.sentAt)
    default:  
      return emails
  }
}

function getById(id) {
  return storageService.get(STORAGE_KEY, id)
}

function remove(id) {
  return storageService.remove(STORAGE_KEY, id)
}

function save(emailToSave) {
  if (emailToSave.id) {
    return storageService.put(STORAGE_KEY, emailToSave)
  } else {
    return storageService.post(STORAGE_KEY, emailToSave)
  }
}

function _createEmails() {
  console.log('Creating emails...');
  let emails = utilService.loadFromStorage(STORAGE_KEY)
  
  if (!emails || !emails.length) {
   
    emails = []

    for (let i = 0; i < 40; i++) {
      emails.push({
        _id: utilService.makeId(),
        subject: utilService.makeLorem(5),
        body: utilService.makeLorem(50),
        isRead: utilService.getRandomBool(),
        isStarred: utilService.getRandomBool(),
        inbox: utilService.getRandomBool(),
        sentAt: utilService.getRandomDate(),
        removedAt: null, //for later use,
        from: {
          name: utilService.makeName(),
          emailAddress:utilService.makeEmail()
        },
        to: utilService.makeEmail(),
      })
    }
    utilService.saveToStorage(STORAGE_KEY, emails)
  }
    return emails
}

const _loggedinUser = {
  email: 'user@appsus.com',
  fullname: 'Mahatma Appsus',
}

window.rs = emailService;  
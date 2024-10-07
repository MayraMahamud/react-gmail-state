import { useState } from 'react'
import Header from './components/Header'
import initialEmails from './data/emails'
import emails from './data/emails'

import './styles/App.css'

function App() {

  const [emails, setEmails] = useState(initialEmails);
  const [activeEmailId, setActiveEmailId] = useState(null);
  // Use initialEmails for state
  console.log(initialEmails)

  const toggleReadStatus = (id) =>{
    const updatedEmails = emails.map((email)=> email.id === id ? {
      email, read: !email.read} : email);setEmails(updatedEmails);
    };

const handleEmailClick = (emailId) =>{
  setActiveEmailId(emailId);
  console.log(`Email with ID ${emailId} was clicked`);
}

const toggleStarred = (emailId) => {
  const updatedEmails = emails.map((email) => email.id === emailId ?{email, starred: !email.starred} : email);
  setEmails(updatedEmails);
};

  

  return (
    <>
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
             onClick={() => handleEmailClick(emails.id)}
             
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
     
     
     
     
      <main  className="emails">
 <ul>
      {emails.map((email, index) => (
        <li key={index} className={`email ${email.read ? "read" : "unread"}`}>
          <div className="select">
            <input className="select-checkbox" type="checkbox" />
          </div>
          <div className="star">
            <input
              className="star-checkbox"
              type="checkbox"
              onChange={(e) => setStarred(email.id, e.target.checked)}
              checked={email.starred}
            />
          </div>
          <div className="sender" onClick={() => readEmail(email.id)}>
            {email.sender}
          </div>
          <div className="title" onClick={() => readEmail(email.id)}>
            {email.title}
          </div>
        </li>
      ))}
    </ul>
</main>
          </div>
         




</>


    
  );
}

export default App

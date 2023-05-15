import '../css/footer.css'

export default function Footer() {
  return (
      <footer className="" id='contact'>
       <h2> <a href="https://docs.google.com/document/d/1r4IL3Uj3DdMqtqOzuhbrY11Uyr9x-xdqkABepARthRU/edit?usp=sharing" target='blank'> View My Resume</a> <a href="/assets/CindyK_Resume.pdf"><span><img src='/assets/icons/download.svg' title='Download my Resume' /></span> </a> </h2>
       <div>
          <a href='https://github.com/cindykandie' target='blank'>
          <img src='/assets/icons/github.svg' alt='my github profile' title='GitHub'/>
          </a>
          <a href='https://linkedin.com/in/cindykandie' target='blank'>
          <img src='/assets/icons/linkedin.svg' alt='my linkedin profile' title='LinkedIn'/>
          </a>
          <a href='mailto:cindyjk@gmail.com' target='blank'>
          <img src='/assets/icons/mail.svg' alt='email address' title='Email'/>
          </a>
          <a href='tel:0711392996' target='blank'>
          <img src='/assets/icons/phone-outgoing.svg' alt='my phone number' title='Call Me'/>
          </a>
       </div>
      </footer>
  );
}
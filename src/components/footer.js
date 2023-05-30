import '../css/footer.css'
import '@/app/globals.css'
import BtBanner from './btBanner';


export default function Footer() {
  return (
      <footer id='contact' className='py-6'>
       <h2> <a href="https://docs.google.com/document/d/1r4IL3Uj3DdMqtqOzuhbrY11Uyr9x-xdqkABepARthRU/edit?usp=sharing" target='blank'> View My Resume</a> <a href="/assets/CindyK_Resume.pdf" className='download-btn'><span><img src='/assets/icons/download.svg' title='Download my Resume' /></span> </a> </h2>
       <div className='footer-socials'>
          <a href='https://github.com/cindykandie' target='blank'>
          <img src='/assets/icons/github.svg' alt='my github profile' title='GitHub'/>
          </a>
          <a href='https://linkedin.com/in/cindykandie' target='blank'>
          <img src='/assets/icons/linkedin.svg' alt='my linkedin profile' title='LinkedIn'/>
          </a>
          <a href='mailto:cindyjk6@gmail.com' target='blank'>
          <img src='/assets/icons/mail.svg' alt='email address' title='Email'/>
          </a>
          <a href='tel:+254711392996' target='blank'>
          <img src='/assets/icons/phone-outgoing.svg' alt='my phone number' title='Call Me'/>
          </a>
       </div>
      </footer>
  );
}
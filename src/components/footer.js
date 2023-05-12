import '../css/footer.css'

export default function Footer() {
  return (
      <footer className="">
       <h2>Get My CV <span><img src='/assets/icons/download.svg' /></span> </h2>
       <div>
            <img src='/assets/icons/github.svg' alt=''/>
            <img src='/assets/icons/linkedin.svg' alt=''/>
            <img src='/assets/icons/mail.svg' alt=''/>
            <img src='/assets/icons/phone-outgoing.svg' alt=''/>
       </div>
      </footer>
  );
}
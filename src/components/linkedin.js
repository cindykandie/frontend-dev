import Link from 'next/link'
import '@/css/footer.css'


export default function LinkedinLogo() {
  return (
    <Link href='https://linkedin.com/in/cindykandie'>
      <div className='about-linkedin'>
        <img src='/assets/icons/linkedin.svg'/>
      </div>
    </Link>
      
  );
}
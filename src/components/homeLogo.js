import '../css/Home.css'
import Link from 'next/link'


export default function Logo() {
  return (
    <Link href='/'>
      <div className='logo-div'>
        <img src='/assets/icons/logo.png'/>
      </div>
    </Link>
      
  );
}
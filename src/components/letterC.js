import '../css/Home.css'
import Link from 'next/link'


export default function LetterC() {
  return (
      <section className="c-wrapper">
          <Link href="/projects">
          <div className="segment segment_one">
        </div>
          </Link>
          <Link href='/about'>
          <div className="segment segment_two">
        </div>
          </Link>
          <Link href='/about'>
          <div className="segment segment_three">
        </div>
          </Link>
          <Link href='https://cindykandie.hashnode.dev/'>
            <div className="segment segment_four">
        </div>
          </Link>
        
      </section>
  );
}
import Link from 'next/link';

function Nav(){
  return(
  <section id="nav-section">
  <Link href="/">
      <img className="wordmark" src="/branding/small-wordmark.svg" alt="Modern Shed Wordmark" />
  </Link>

   <ul>

     <li>
        <Link href="/sheds">
          <a> Sheds </a>      
        </Link>
      </li>

      <li>
        <Link href="/story">
          <a> Our Story </a>      
        </Link>
      </li>

      <li>
        <Link href="/process">
          <a> Process </a>      
        </Link>
      </li>

      <li>
        <Link href="/contact">
          <a> Contact </a>      
        </Link>
      </li>


    </ul>
  </section>
  );
}

export default Nav;
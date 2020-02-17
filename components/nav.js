import Link from 'next/link';

function Nav(){
  return(
  <section id="nav-section">
    <div id="wordmark-container">
      <Link href="/">
          <img className="wordmark" id="nav-left" src="/branding/small-wordmark-white.svg" alt="Modern Shed Wordmark" />
      </Link>
    </div>

   <ul id="nav-right">

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
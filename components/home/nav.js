import Link from 'next/link';

const Nav = () => {
  return(
  <section id="nav-section">
    <div id="wordmark-container">
      <a href="/">
          <img className="wordmark" id="nav-left" src="/graphics/small-wordmark-white.svg" alt="Modern Shed Wordmark" />
      </a>
    </div>

   <ul id="nav-right">

     <li>
          <a href="/sheds"> Sheds </a>      
      </li>

      <li>
         <a href="/story"> Our Story </a>      
      </li>

      <li>
          <a href="/process"> Process </a>      
      </li>

      <li>
          <a href="/contact"> Contact </a>      
      </li>


    </ul>
  </section>
  );
}

export default Nav;
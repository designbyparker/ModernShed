import Link from 'next/link';

function Nav(){
  return(
  <>
  <Link href="/">
    Modern Shed
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
  </>
  );
}

export default Nav;
import Link from "next/link";

function NavBar(params) {
  return (
    <nav>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
    </nav>
  )
}

export default NavBar;
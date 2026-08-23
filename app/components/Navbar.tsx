import Link from "next/link";
export default function Navbar(){
    return(
        <nav>
            <Link href="/">DevHum</Link>
            <div className="flex">
                <Link href="/">Home</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/developers">Discover</Link>
                <Link href="/connections">Connection</Link>
                <Link href="/profile">Profile</Link>
            </div>


        </nav>
    )
}
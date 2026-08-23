import Link from "next/link";
export default function Navbar(){
    return(
        <nav className="bg-orange-500 flex justify-between items-center p-4">
            <Link className="font-black" href="/">DevHum</Link>
            <div className="flex justify-evenly gap-4 px-4">
                <Link href="/">Home</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/developers">Discover</Link>
                <Link href="/connections">Connection</Link>
                <Link href="/profile">Profile</Link>
            </div>


        </nav>
    )
}
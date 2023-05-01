import { RoutePaths } from "@/constants/RoutePaths";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full sticky z-999 top-0 bg-white-50">
      <nav className="main-container flex justify-between items-center py-16">
        <div className="rounded-full shrink-0">
          <Image
            className="rounded-full"
            src="/logo.jpeg"
            width="80"
            height="80"
            alt="site-logo"
          />
        </div>

        <div className="flex flex-row gap-32 items-center text-24 text-black">
          <Link href={RoutePaths.HOME}>Home</Link>
          <Link href="#">Cart</Link>
          <Link href="#">Products</Link>
          <Link href="#">Auction</Link>
          <Link href="#">Search</Link>
        </div>

        <button className="btn-btn">Logout</button>
      </nav>
    </header>
  );
};

export default Header;

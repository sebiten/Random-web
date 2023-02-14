import Link from 'next/link';

const Navbar = () => (
  <nav className="flex items-center justify-between px-4 py-7 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
    <div className="flex items-center">
      <Link href="#">
        <span className="text-white font-bold text-xl">Random Website</span>
      </Link>
    </div>
    <div className="flex items-center">
      <Link href="#">
        <span className="px-3 py-2 text-white hover:bg-gray-700 rounded">Home</span>
      </Link>
      <Link href="#">
        <span className="px-3 py-2 text-white hover:bg-gray-700 rounded">About</span>
      </Link>
      <Link href="#">
        <span className="px-3 py-2 text-white hover:bg-gray-700 rounded">Contact</span>
      </Link>
    </div>
  </nav>
);

export default Navbar;

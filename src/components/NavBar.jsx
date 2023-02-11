import Link from 'next/link';

const Navbar = () => (
  <nav class="flex items-center justify-between px-4 py-3 bg-gray-800">
    <div class="flex items-center">
      <Link href="#">
        <span class="text-white font-bold text-xl">Random Web</span>
      </Link>
    </div>
    <div class="flex items-center">
      <Link href="#">
        <span class="px-3 py-2 text-white hover:bg-gray-700 rounded">Home</span>
      </Link>
      <Link href="#">
        <span class="px-3 py-2 text-white hover:bg-gray-700 rounded">About</span>
      </Link>
      <Link href="#">
        <span class="px-3 py-2 text-white hover:bg-gray-700 rounded">Contact</span>
      </Link>
    </div>
  </nav>
);

export default Navbar;

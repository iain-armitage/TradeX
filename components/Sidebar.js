
import Link from 'next/link';

const links = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Contacts', href: '/contacts' },
  { name: 'Quotes', href: '/quotes' },
  { name: 'Projects', href: '/projects' },
  { name: 'Reports', href: '/reports' },
  { name: 'Settings', href: '/settings' }
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white p-4 flex flex-col">
      <div className="text-2xl font-bold mb-8">TradeX</div>
      <nav className="flex flex-col space-y-4">
        {links.map((link) => (
          <Link key={link.name} href={link.href} className="hover:text-blue-400">
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}

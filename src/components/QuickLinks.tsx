import { Link } from "react-router-dom";

export default function QuickLinks() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Packages", path: "/packages" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div>
      <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
      <ul className="space-y-3 text-gray-400">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              className="hover:text-orange-500 transition-colors cursor-pointer"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

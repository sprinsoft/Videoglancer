import React from "react";
import { useLocation, Link } from "react-router-dom";
export default function NavbarLink({ item }) {
    const { pathname } = useLocation();
    const isActive = pathname === item.path;

    return (
        <Link
            className={`text-sm flex items-center gap-3 px-3 py-3 rounded-md text-base hover:no-underline hover:bg-stone-50 ${isActive ? 'bg-stone-100 px-6 text-cyan-800 font-medium' : 'text-stone-500 font-normal'}`}
            to={item.path}
        >
            <span className='text-lg'>{item.icon}</span>
            {item.label}
        </Link>
    );
}
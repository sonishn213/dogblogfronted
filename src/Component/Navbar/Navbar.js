import React from "react";
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  const activeClassName = "text-slate-800 ";
  const NormalClassName = "text-slate-500 ";

  return (
    <section id="navbar" className="border-b-2 border-neutral-200">
      <nav className="fluid-container flex justify-between py-6">
        <Link to="/">
          <h1 className="text-2xl">DOG BLOG</h1>
        </Link>

        <div className="flex space-x-12">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeClassName : NormalClassName
            }
          >
            Home
          </NavLink>
          <NavLink
            to="allpost"
            className={({ isActive }) =>
              isActive ? activeClassName : NormalClassName
            }
          >
            All Posts
          </NavLink>
          {/* <NavLink
            to="uploadpost"
            className={({ isActive }) =>
              isActive ? activeClassName : NormalClassName
            }
          >
            upload post
          </NavLink> */}
        </div>
      </nav>
    </section>
  );
};

export default Navbar;

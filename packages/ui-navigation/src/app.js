import React from "react";
import { links } from "./links.helper.js";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export default function Root(props) {
  return (
    <Router>
    <div className="h-16 flex items-center justify-between px-6 bg-primary text-white">
      <div className="flex items-center justify-between">
        <Link className="p-6" to={'/'}>Home</Link>
        {links.map((link) => {
          return (
            <Link key={link.href} className="p-6" to={link.href}>
              {link.name}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center justify-between">
        <a
          href="https://github.com/philcon93/mono-microfrontends-example"
          className="externalLink"
        >
          Github project
        </a>
      </div>
    </div>
    </Router>
  );
}

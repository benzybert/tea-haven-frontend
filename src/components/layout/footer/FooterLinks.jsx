import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';

const FooterLinks = () => (
  <div>
    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
    <ul className="space-y-2">
      <li>
        <Link to={ROUTES.HOME} className="text-gray-300 hover:text-white">
          Home
        </Link>
      </li>
      <li>
        <Link to={ROUTES.LOGIN} className="text-gray-300 hover:text-white">
          Sign In
        </Link>
      </li>
      <li>
        <Link to={ROUTES.REGISTER} className="text-gray-300 hover:text-white">
          Register
        </Link>
      </li>
    </ul>
  </div>
);

export default FooterLinks; 
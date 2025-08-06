'use client';

import { useState } from 'react';
import OrganizationContactForm from './OrganizationContactForm';
import IndividualContactForm from './IndividualContactForm';

export default function ContactReachUs() {
  const [isOrganization, setIsOrganization] = useState(true);
  const toggleUserType = () => setIsOrganization((prev) => !prev);

  return (
    <div>
      {/* Toggle Button */}
      <div className="flex flex-col items-center space-y-2 mb-4 font-poppins font-light text-white text-lg">
        <label className="mb-4 mt-5">Choose User Type</label>

        <button
          type="button"
          onClick={toggleUserType}
          className="relative w-[220px] h-10 rounded-full border border-white text-lg font-semibold transition-colors duration-300 mb-5 bg-transparent text-white px-2"
        >
          {/* Knob */}
          <div
            className={`absolute top-1 w-8 h-8 rounded-full bg-white shadow-md transition-transform duration-300 ${
              isOrganization ? 'translate-x-[170px]' : 'translate-x-0'
            }`}
          ></div>

          {/* Centered Text */}
          <span className="relative z-10 block w-full text-center">
            {isOrganization ? 'Organization' : 'Individual'}
          </span>
        </button>
      </div>

      {/* Render the appropriate form based on user type */}
      {isOrganization ? <OrganizationContactForm /> : <IndividualContactForm />}
    </div>
  );
}
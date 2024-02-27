import React from "react";
import FooterDomains from "./FooterDomains";
import Location from "./Location";

const CATEGORY_VALUES = [
  "Web Builder",
  "Hosting",
  "Data Center",
  "Robotic-Animation",
];
const CONTACT_VALUES = [
  "Contact",
  "Privacy Policy",
  "Terms of Service",
  "Categories",
  "About",
];
export default function Footer() {
  return (
    <div className="bg-[#212731] flex justify-between items-start w-full max-w-screen lg:py-10 lg:px-36 sm:py-7 sm:px-8 py-4 px-6">
      <div className="flex flex-col justify-between">
        <h4 className="text-white lg:text-xl sm:text-lg text-base font-normal">
          CATEGORIES
        </h4>
        {CATEGORY_VALUES.map((domain) => {
          return <FooterDomains domain={domain}></FooterDomains>;
        })}
      </div>

      <div className="flex flex-col justify-between">
        <h4 className="text-white lg:text-xl sm:text-lg text-base font-normal">
          CONTACT
        </h4>
        {CONTACT_VALUES.map((domain) => {
          return <FooterDomains domain={domain}></FooterDomains>;
        })}
      </div>

      <Location></Location>
    </div>
  );
}

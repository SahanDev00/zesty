"use client";

import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export function FooterComponent() {
  return (
    <Footer className="bg-transparent p-5 dark:bg-black/30">
      <div className="w-[90%] mx-auto">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
          <h1 className='mt-5 uppercase text-white sm:text-center text-3xl font-semibold leading-snug text-transparent dark:text-gray-300 cursor-pointer'>ZESTY</h1>
          </div>
          <div className="grid grid-cols-1 mt-5 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" className="dark:text-gray-400 text-white" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#" className="text-white">Company</Footer.Link>
                <Footer.Link href="#" className="text-white">Documents</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" className="dark:text-gray-400 text-white" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="https://github.com/SahanDev00" className="text-white">Github</Footer.Link>
                <Footer.Link href="#" className="text-white">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className="dark:text-gray-400 text-white" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#" className="text-white">Privacy Policy</Footer.Link>
                <Footer.Link href="#" className="text-white">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Zesty™" year={2024} className="text-white dark:text-gray-400"/>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon className="hover:text-white" href="https://www.facebook.com/syntaxware.org/" icon={BsFacebook} />
            <Footer.Icon className="hover:text-white" href="https://www.instagram.com/syntaxware/" icon={BsInstagram} />
            <Footer.Icon className="hover:text-white" href="#" icon={BsTwitter} />
            <Footer.Icon className="hover:text-white" href="https://github.com/SahanDev00" icon={BsGithub} />
            <Footer.Icon className="hover:text-white" href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

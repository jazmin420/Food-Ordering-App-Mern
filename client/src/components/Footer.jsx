import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import logo from '/logo.png'

function FooterComp() {
  return (
    <>
      <Footer container className="border border-t-4 border-border-color">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid w-full justify-between sm:flex md:grid-cols-1">
            <div className="mt-5 w-1/4">
              <Link
                to="/"
              >
                <img src={logo} className="w-[150px]" alt="" />
              </Link>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti doloremque tempore ipsam provident neque repellendus dignissimos delectus quas nesciunt vitae quaerat ea laudantium exercitationem, qui doloribus aut esse. Eveniet, nesciunt!
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                
                <Footer.Title title="About" />
                <Footer.LinkGroup col>
                  <Footer.Link
                    href="https://www.google.com"
                    target="_blank"
                    //to prevent blocking of opening new tab
                    rel="noopener noreferrer"
                  >
                    Our Website
                  </Footer.Link>
                  <Footer.Link
                    href="/about"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                   mealMover
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col>
                  <Footer.Link
                    href="https://github.com/jazmin420/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </Footer.Link>
                  <Footer.Link href="#">Instagram</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>

          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright
              href="#"
              by="Weaving Threads"
              year={new Date().getFullYear()}
            />
            <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
}

export default FooterComp;

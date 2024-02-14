import {TextInput, Textarea } from "flowbite-react";
import { HiUser } from "react-icons/hi";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaHandHoldingDollar } from "react-icons/fa6";


const ContactSection = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 shadow-2xl min-h-[85vh] textPrimary">
        <div className="primaryBgColor h-full flex items-center">
          <div className="px-20">
            <h1 className="text-4xl font-bold textPrimary">
              Book An Appointment
            </h1>
            <div className="my-10">
              <div className="flex gap-x-7 items-center">
                <MdEmail className="w-12 h-12 icon-clr" />
                <div className="flex flex-col">
                  <span className="font-bold text-xl">Email Us</span>
                  <span className="text-xl">lavish@lux.gmail.com</span>
                </div>
              </div>
              <div className="flex gap-x-7 items-center mt-4">
                <MdPhone className="w-12 h-12 icon-clr" />
                <div className="flex flex-col">
                  <span className="font-bold text-xl">Call Us</span>
                  <span className="text-xl">647-496-0826</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="secondaryBgColor p-16">
          <div className="max-w-md mb-5">
            <TextInput
              id="firstname"
              type="text"
              icon={HiUser}
              placeholder="First Name *"
              required
            />
          </div>
          <div className="max-w-md mb-5">
            <TextInput
              id="lastname"
              type="text"
              icon={HiUser}
              placeholder="Last Name *"
              required
            />
          </div>
          <div className="max-w-md mb-5">
            <TextInput
              id="phone"
              type="text"
              icon={MdPhone}
              placeholder="Phone *"
              required
            />
          </div>
          <div className="max-w-md mb-5">
            <TextInput
              id="email"
              type="text"
              icon={MdEmail}
              placeholder="Email *"
              required
            />
          </div>
          <div className="max-w-md mb-5">
            <TextInput
              id="budget"
              type="text"
              icon={FaHandHoldingDollar}
              placeholder="Your Budget"
              required
            />
          </div>
          <div className="max-w-md mb-5">
            <Textarea
              id="budget"
              placeholder="Project Description *"
              required
              rows={4}
            />
          </div>

          <button className="py-2 px-8 bgBtn text-white">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

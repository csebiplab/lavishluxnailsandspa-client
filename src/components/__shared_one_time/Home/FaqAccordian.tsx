import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

export default function FaqAccordian() {
  return (
    <div className="w-full md:w-4/6 mx-auto">
      <div>
        <div className="mb-4">
          <h2 className="title font-semibold">
            Frequently Asked Questions for our Nail Places Mississauga
          </h2>
          <p className="mt-2 text-xl">
            Certainly! Here are some frequently asked questions (FAQs) for our
            nail places in Mississauga:
          </p>
        </div>
        <Accordion>
          <AccordionPanel>
            <AccordionTitle>
              What services do Lavish Lux Nails & Spa in Mississauga offer?
            </AccordionTitle>
            <AccordionContent>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Nail salons typically offer a range of services, including
                manicures, pedicures, nail extensions, gel polish, nail art, and
                more.
              </p>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle>
              How much do manicures and pedicures cost on average in
              Mississauga?
            </AccordionTitle>
            <AccordionContent>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Prices can vary, but on average, a basic manicure may range from
                $20 to $40, while a pedicure may cost between $30 and $60.
                Prices may be higher for additional services or premium
                treatments.
              </p>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle>
              What brands of nail polish and products do these salons use?
            </AccordionTitle>
            <AccordionContent>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Nail salons often use a variety of brands for polish and
                products. You can inquire about the specific brands they use if
                you have preferences or concerns about the quality of products.
              </p>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle>
              Is Lavish Lux Nails & Spa following COVID-19 safety protocols?
            </AccordionTitle>
            <AccordionContent>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Yes, our nail salon is implementing COVID-19 safety measures,
                including regular sanitization, mask-wearing, social distancing,
                and limited occupancy. It's recommended to check with the
                specific salon for their current protocols.
              </p>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle>
              Can I bring my nail polish or products for the salon to use?
            </AccordionTitle>
            <AccordionContent>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Some salons may allow you to bring your own polish, but it's
                best to check with the salon beforehand. They might have
                policies or prefer to use their own products for consistency.
              </p>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle>
              Does our salon offer group bookings for events like weddings or
              birthdays?
            </AccordionTitle>
            <AccordionContent>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Our nail salon does offer group bookings for special occasions.
                It's recommended to contact the salon in advance to discuss the
                details and make arrangements.
              </p>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle>
              What is the cancellation policy for appointments?
            </AccordionTitle>
            <AccordionContent>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Our salon may have its own cancellation policy. It's important
                to be aware of their terms, including any fees for late
                cancellations or no-shows.
              </p>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
        <div className="mt-1">
          <p className="text-xl textPrimary font-semibold">
            <span className="text-yellow-600">*</span> Remember to contact the
            specific nail salon for the most accurate and up-to-date
            information.
          </p>
        </div>
      </div>
    </div>
  );
}

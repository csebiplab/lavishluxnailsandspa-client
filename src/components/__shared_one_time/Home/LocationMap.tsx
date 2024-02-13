import React from "react";

const LocationMap = () => {
  return (
    <div>
      <div className="w-max mx-auto mb-8">
        <h2 className={`title font-semibold textPrimary text-center`}>
          Our Location
        </h2>
        <div className="sm-bb" />
      </div>
      <div className="">
        {/* <aside>aside</aside> */}
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10137.86126830681!2d90.21584239430842!3d22.973995331994356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755422099b0bc15%3A0x8fce52e1c06103f1!2sGournadi!5e0!3m2!1sen!2sbd!4v1706603380760!5m2!1sen!2sbd"
            // width="1200"
            height="450"
            style={{ border: 0, width: "100%" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;

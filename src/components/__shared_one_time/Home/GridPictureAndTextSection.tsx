import Image from "next/image";
import IsLavishCostly from "@/assets/images/is-lavish-costly.jpg";
import DesignNailsWithLavish from "@/assets/images/lavish-design-nails.jpg";
import DesignNailsArtistry from "@/assets/images/Lavish-nail-artistry.jpg";

const GridPictureAndTextSection = () => {
  return (
    <div className="flex justify-center">
      <div className="mx-auto flex flex-col gap-y-10 items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
          <div>
            <Image
              src={IsLavishCostly}
              alt="lavish picture"
              width={400}
              height={400}
              className="h-auto md:h-[48rem] w-full"
            />
          </div>
          <div className="textPrimary flex flex-col justify-center items-center gap-y-6 w-full">
            <div className="mx-auto">
              <h2 className={`title font-semibold`}>
                Is the best nail salon costly?
              </h2>
              <div className="sm-bb" />
            </div>
            <p className="text-base">
              The notion of the "best" nail salon being costly is subjective and
              varies based on individual preferences and priorities. Some people
              might associate high prices with quality services, expecting
              top-notch treatments, skilled technicians, and luxurious
              amenities. In this perspective, the best nail salon is often
              perceived as an upscale establishment where clients are willing to
              pay a premium for an exceptional and indulgent experience.
              However, others may argue that the best nail salon doesn't
              necessarily have to be the most expensive. Quality can be found in
              more affordable options, where skilled technicians provide
              excellent services without breaking the bank. Therefore, the
              perception of the best nail salon being costly depends on one's
              expectations and values.
            </p>
            <p className="text-base">
              On the other hand, the idea that the best nail salon is costly can
              be debunked by considering factors beyond price alone. While some
              high-end salons may indeed offer premium services, a more
              affordable salon can provide excellent value for money. The best
              nail salon for an individual might prioritize factors such as
              cleanliness, friendliness of staff, a wide range of nail art
              options, or convenient location. In this context, the definition
              of "best" extends beyond the price tag and emphasizes the overall
              experience and satisfaction of the customer. Therefore, it's
              essential to consider personal preferences and priorities when
              determining what makes a nail salon the best choice, recognizing
              that cost is just one aspect of the decision-making process.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
          <div className="order-2">
            <Image
              src={DesignNailsWithLavish}
              alt="lavish picture"
              width={400}
              height={400}
              className="h-auto md:h-[48rem] w-full"
            />
          </div>
          <div className="textPrimary flex flex-col justify-center items-center gap-y-6 w-full order-1">
            <div className="mx-auto">
              <h2 className={`title font-semibold self-start`}>
                Designed your nails with the best spa in Mississauga{" "}
              </h2>
              <div className="sm-bb" />
            </div>
            <p className="text-base">
              Indulge in the ultimate pampering experience at Lavish Lux Nails &
              Spa, the best spa in Mississauga, where nail design becomes an art
              form. Our skilled technicians at this luxurious oasis are
              dedicated to transforming your nails into stunning masterpieces.
              From classic manicures to intricate nail art, our spa offers a
              diverse range of services to suit every style and preference.
              Immerse yourself in a tranquil atmosphere, adorned with soothing
              scents and calming music, as our expert nail artists work their
              magic. You'll leave not only with beautifully designed nails but
              also with a sense of relaxation and rejuvenation that can only be
              achieved at the finest spa in Mississauga.
            </p>
            <p className="text-base">
              At the best spa in Mississauga, we believe that nail care is not
              just a routine, but an expression of individuality. Our curated
              selection of premium nail products and personalized design
              consultations ensure that each client receives a unique and
              tailored experience. Whether you prefer timeless elegance or bold,
              avant-garde styles, our spa in Mississauga is dedicated to
              bringing your vision to life. Step into a world where creativity
              meets precision, and let our skilled professionals pamper you with
              the finest nail services, making your visit a memorable and
              transformative experience at the top spa in Mississauga.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
          <div>
            <Image
              src={DesignNailsArtistry}
              alt="lavish picture"
              width={400}
              height={400}
              className="h-auto md:h-[48rem] w-full"
            />
          </div>
          <div className="textPrimary flex flex-col justify-center items-center gap-y-6 w-full">
            <div>
              <h2 className="title self-start">
                <span className="font-semibold">Nail Artistry and Beyond:</span>{" "}
                Why Nail Salons Deserve Your Attention?
              </h2>
              <div className="sm-bb" />
            </div>
            <p className="text-base">
              Nail artistry has evolved into a captivating form of
              self-expression, and nail salons stand as the vibrant canvases
              where creativity flourishes. Beyond the conventional manicure,
              these establishments offer a spectrum of artistic possibilities
              for individuals seeking to make a statement through their
              fingertips. Talented nail technicians masterfully transform nails
              into miniature works of art, showcasing intricate designs,
              patterns, and even thematic creations. With a diverse range of
              techniques, from hand-painted details to the application of
              crystals and textured finishes, nail salons have become immersive
              spaces where clients can explore the boundaries of their personal
              style.
            </p>
            <p className="text-base">
              The appeal of nail salons extends beyond aesthetics; it
              encompasses the therapeutic experience they provide. In today's
              fast-paced world, these havens offer a retreat where clients can
              unwind and pamper themselves. The meticulous care and attention
              given during a manicure or pedicure elevate the overall well-being
              of individuals. The soothing ambiance, aromatherapy, and
              personalized service contribute to a holistic relaxation that
              transcends the mere embellishment of nails. Nail salons have
              become sanctuaries for self-care, fostering a sense of
              rejuvenation that goes beyond the visual allure of beautifully
              adorned nails.
            </p>
            <p className="text-base">
              Nail salons are not just about vanity; they play a pivotal role in
              fostering a sense of community and empowerment. These
              establishments often serve as platforms for networking and
              socializing, bringing together individuals who share a passion for
              nail artistry. The supportive environment encourages both clients
              and technicians to exchange ideas, tips, and inspiration, creating
              a collaborative culture within the beauty industry. Additionally,
              nail salons provide opportunities for entrepreneurship, allowing
              skilled nail artists to establish their own businesses and
              cultivate a loyal clientele. By giving due attention to nail
              salons, we acknowledge their multifaceted contributions to
              creativity, self-care, and community building.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridPictureAndTextSection;

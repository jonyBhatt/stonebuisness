import MaxWithWrapper from "@/components/MaxWithWrapper";
import MdWahidulHaque from "../assets/MdWahidul.jpg";
import Rubayet from "../assets/rubu.jpg";
export default function Management() {
  return (
    <div className="  w-full">
      {/** Wahidul Profile  */}
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center items-center place-content-center">
        <div className="bg-primary text-primary-foreground w-full h-full p-16">
          <MaxWithWrapper>
            <div className="flex justify-center items-center flex-col">
              <img
                src={MdWahidulHaque}
                alt="MdWahidulHaque"
                className="rounded  max-w-sm"
              />
              <h2 className="font-bold text-lg text-center">
                Md. Wahidul Haque
              </h2>
              <span className="font-medium text-base text-center">
                A Visionary Leader, Community Advocate and the Proprietor of
                Jahanara Enterprise
              </span>
            </div>
          </MaxWithWrapper>
        </div>
        <div className="bg-black text-primary-foreground w-full h-full p-16">
          <MaxWithWrapper>
            <div className="flex justify-center items-center flex-col gap-3">
              <span className="text-sm">
                <strong className="text-xl"> Md. Wahidul Haque</strong> is a
                distinguished entrepreneur, educator, and community leader in
                Sylhet. Besides being the <b>Proprietor</b> of
                <b>Jahanara Enterprise</b>, a leading provider of high-quality
                stone and sand for construction, he is the owner of{" "}
                <b>Shahin Hotel</b>, a prominent establishment located in{" "}
                <b>Chhatak Bazar</b>. <br /> <br /> His success in the
                hospitality industry reflects his deep understanding of business
                and customer service, establishing <b>Shahin Hotel</b> as a
                cornerstone of the local economy. Along with <b>Shahin Hotel</b>{" "}
                and other businesses, he has been instrumental in supporting the
                infrastructure development of Bangladesh. His commitment to
                delivering premium products and excellent service has earned
                <b>Jahanara Enterprise</b> a distinguished reputation in the
                industry.
              </span>
              <span className="text-sm">
                While venturing into business, Md. Wahidul Haque also had a
                celebrated career in education. His passion for teaching and
                dedication to his students earned him great respect within the
                academic community, and his influence continues to be felt by
                many of his former students. Md. Wahidul Haque has made
                substantial contributions to education with his own schools
                named <b>Little Flowers Kindergarten</b> and{" "}
                <b>Little Flowers Pre Cadet Academy</b>, which also included{" "}
                <b> Computer Complex </b>
                for the students, both of which provide early childhood
                education and development. These institutions reflect his
                commitment to nurturing young minds and laying a strong
                foundation for future learning
              </span>
              <span className="text-sm">
                Mr. Haque’s commitment to community service is exemplified by
                his active involvement in the Scout Movement in greater Sylhet.
                His leadership in scouting has taken him around the globe, where
                he has participated in numerous international events,
                strengthening his ties to the global scouting community. His
                dedication to mentoring youth and promoting civic responsibility
                through scouting is a testament to his commitment to the
                development of future generations.
              </span>
              <span className="text-sm">
                Md. Wahidul Haque also serves as a Duty Officer at Bangladesh
                Betar Sylhet, and also a drama artist, contributing to the
                nation’s broadcasting and media landscape. His role in this
                sector demonstrates his versatility and broad range of
                interests, from education and business to public service. <br />{" "}
                <br /> Across all of his endeavors, Md. Wahidul Haque’s
                leadership is defined by integrity, vision, and a deep sense of
                responsibility to his community. Whether through Shahin Hotel,
                Jahanara Enterprise, his educational work, or his dedication to
                scouting, he remains committed to excellence and progress. His
                legacy is one of service, entrepreneurship, and a lifelong
                dedication to making a meaningful impact in both his local
                community and beyond.
              </span>
            </div>
          </MaxWithWrapper>
        </div>
      </div>

      {/** Rubayet Profile  */}
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
        <div className="bg-black text-primary-foreground w-full h-full p-16">
          <MaxWithWrapper>
            <div className="flex justify-center items-center flex-col gap-2.5">
              <span className="text-sm">
                <b className="text-xl">Rubayet Binte Wahid</b> is currently
                pursuing a degree in Computer Science and Engineering. Being the
                eldest child of Md. Wahidul Haque, she holds a pivotal role in
                the management of
                <b> Jahanara Enterprise</b> and oversees the family’s diverse
                business interests.
              </span>
              <span className="text-sm">
                As the Business Assistant of <b>Jahanara Enterprise</b>, Rubayet
                plays a crucial role in steering the company towards continued
                success. Her technical background in computer science brings a
                modern approach to the business, enhancing operational
                efficiency and growth. Rubayet also manages a portfolio of all
                their businesses alongside and in absence of her father,
                ensuring these establishments run smoothly and continue to
                thrive, and reflects her capability in handling diverse business
                operations.
              </span>
              <span className="text-sm">
                In addition to her business roles, Rubayet is an
                <b> English Language Trainer</b> at Lexis, Sylhet. Rubayet’s
                dedication to community service is evident through her active
                role in the <b>Scout Movement</b>. She serves as the{" "}
                <b>Deputy Coordinator of PR & Marketing</b> for the Bangladesh
                Scouts, where she is instrumental in promoting scouting
                activities and initiatives. Her involvement extends to
                organizing and hosting special events at the{" "}
                <b>World Organization of the Scout Movement (WOSM)</b>,
                showcasing her leadership and event management skills on an
                international platform.
              </span>
            </div>
          </MaxWithWrapper>
        </div>
        <div className="bg-primary text-primary-foreground w-full h-full p-16">
          <MaxWithWrapper>
            <div className="flex justify-center items-center flex-col">
              <img
                src={Rubayet}
                alt="MdWahidulHaque"
                className="rounded   max-w-sm"
              />
              <h2 className="font-bold text-lg">Rubayet Binte Wahid </h2>
              <span className="font-medium text-base">
                Business Assistant and a Rising Star
              </span>
            </div>
          </MaxWithWrapper>
        </div>
      </div>
    </div>
  );
}

import MaxWithWrapper from "@/components/MaxWithWrapper";

export default function About() {
  return (
    <section>
      <div className="about relative overflow-auto">
        <div className="absolute top-0 w-full h-full  transparentBg flex items-center justify-center">
          <div>
            <h4 className="font-medium tracking-wider uppercase text-center text-2xl text-primary">
              About
            </h4>
            <h2 className="font-bold text-3xl md:text-4xl text-white">
              Jahanara Enterprise
            </h2>
          </div>
        </div>
      </div>
      <div className="py-16">
        <MaxWithWrapper>
          {/** vision */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 ">
            <h3 className="md:text-3xl text-2xl font-bold text-left ">
              Our Vision
            </h3>
            <p className="text-xs sm:text-lg font-light">
              At <b>Jahanara Enterprise</b>, our vision is to become a leading
              supplier of top-quality stone and sand products for the
              construction industry. We aim to develop long-lasting
              relationships with our clients by offering premium materials that
              meet international standards, ensuring the safety and satisfaction
              of every customer. Our journey began with a commitment to
              providing top-tier construction materials to developers, builders,
              and contractors across Bangladesh. <br /> <br /> Over the years,
              our dedication to quality, reliability, and customer satisfaction
              has helped us grow into one of the most trusted names in the
              industry. Whether you’re working on infrastructure projects,
              commercial developments, or residential builds,{" "}
              <b>Jahanara Enterprise</b> is here to meet your needs with the
              finest materials, expert service, and competitive pricing. Our
              goal is to contribute to the development of sustainable
              infrastructure by providing products that not only meet the
              highest industry requirements but also respect environmental
              responsibility. We are committed to building loyalty and
              delivering value to our customers through excellence in service,
              operational efficiency, and the integration of innovative
              technology.
            </p>
          </div>

          {/** profile */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-8">
            <h3 className="font-bold text-2xl capitalize  md:text-4xl ">
              Company Profile
            </h3>
            <div className="flex flex-col gap-4">
              <p className="text-xs sm:text-lg font-light">
                <b>Jahanara Enterprise</b> was founded with a clear mission: to
                grow and succeed by providing premium-quality construction
                materials to the development sector, while adhering to our core
                values of integrity, respect, and a commitment to excellence.
                Through meticulous planning and effective use of our resources,
                we have established ourselves as a trusted name in the stone and
                sand supply industry. Our products are guaranteed to meet high
                standards of quality, ensuring our clients receive only the
                best.
              </p>

              <p className="text-xs sm:text-lg font-light">
                As a prominent company based in <b>Chhatak, Sunamganj</b>, we
                serve the entire Bangladesh market with a strong focus on
                customer satisfaction. Looking ahead,{" "}
                <b>Jahanara Enterprise </b>
                has ambitious plans to expand its reach and collaborate with
                leading national and international companies, fostering growth
                through strategic partnerships.
              </p>
            </div>
          </div>

          {/** specialization */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-8">
            <h3 className="font-bold text-2xl capitalize  md:text-4xl ">
              Our Specialization
            </h3>
            <div className="flex flex-col gap-4">
              <ul className="list-disc">
                <li className="font-medium text-xl capitalize">
                  crushed stone
                </li>
                <li className="font-medium text-xl">Lime Stone</li>
                <li className="font-medium text-xl">Boulder Stone</li>
                <li className="font-medium text-xl">Chhatak Sand</li>
                <li className="font-medium text-xl">Stone Dust</li>
                <li className="font-medium text-xl">Single Stone</li>
              </ul>

              <p className="text-xs sm:text-lg font-light">
                Our expertise extends to servicing large-scale projects
                including road construction, commercial building development,
                and residential infrastructure, providing materials that form
                the foundation of durable and safe structures.
              </p>
            </div>
          </div>

          {/** services */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-8">
            <h3 className="font-bold text-2xl capitalize  md:text-4xl ">
              Our Services
            </h3>
            <div className="flex flex-col gap-4">
              <p className="text-xs sm:text-lg font-light">
                <b>Jahanara Enterprise</b> is more than just a supplier; we are
                partners in your construction journey. With over a decade of
                experience in the industry, we provide comprehensive services
                ensure the delivery of quality construction materials.
              </p>

              <p className="text-xs sm:text-lg font-light">
                Our logistics team ensures timely delivery across Bangladesh,
                while our technical experts work closely with clients to ensure
                the right materials are selected for every job. Whether you are
                constructing a bridge, a commercial building, or a residential
                complex, you can rely on <b>Jahanara Enterprise</b> to supply
                materials that meet the highest quality standards.
              </p>
            </div>
          </div>

          {/** Management */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-8">
            <h3 className="font-bold text-2xl capitalize  md:text-4xl ">
              Management
            </h3>
            <div className="flex flex-col gap-4">
              <p className="text-xs sm:text-lg font-light">
                The leadership and management of <b>Jahanara Enterprise</b> rest
                with a dynamic personality, who is responsible for setting
                company policies and overseeing business operations. Our
                <b> Proprietor</b> leads the day-to-day management of the
                business, ensuring that every operation runs smoothly and
                efficiently and is supported by a team of professionals working
                together to uphold our values of quality, service, and
                integrity.
              </p>
            </div>
          </div>
        </MaxWithWrapper>
      </div>
    </section>
  );
}

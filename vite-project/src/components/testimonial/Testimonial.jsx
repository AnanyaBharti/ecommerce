import myImage from "../../assets/img/ab.png";
import myImage2 from "../../assets/img/ana.jpg";
import myImage3 from "../../assets/img/coffee.jpg";

const Testimonial = () => {
  return (
    <div>
      <section className="text-gray-600 body-font mb-10">
        {/* main */}
        <div className="container px-5 py-10 mx-auto">
          {/* Heading */}
          <h1 className="text-center text-3xl font-bold text-black">
            Testimonial
          </h1>
          {/* Paragraph */}
          <h2 className=" text-center text-2xl font-semibold mb-10">
            What our <span className="text-pink-500">customers</span>are saying
          </h2>
          <div className="flex flex-wrap -m-4">
            {/* Testimonial 1 */}
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={myImage}
                />
                <p className="leading-relaxed">
                  Edison bulb retro cloud bread echo park, helvetica.It is a
                  long established fact that a reader will be distracted by the
                  readable content of a page when looking at its layout. The
                  point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2 className="teext-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  Ananya Bharti
                </h2>
                <p className="text-gray-500">web Developer</p>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={myImage2}
                />
                <p className="leading-relaxed">
                  Edison bulb retro cloud bread echo park, helvetica.It is a
                  long established fact that a reader will be distracted by the
                  readable content of a page when looking at its layout. The
                  point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2 className="teext-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  Anushka Bharti
                </h2>
                <p className="text-gray-500"> Engineer</p>
              </div>
            </div>
            {/* Testimonial 3*/}
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={myImage3}
                />
                <p className="leading-relaxed">
                  Edison bulb retro cloud bread echo park, helvetica.It is a
                  long established fact that a reader will be distracted by the
                  readable content of a page when looking at its layout. The
                  point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2 className="teext-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  Vishal Sinha
                </h2>
                <p className="text-gray-500"> Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Testimonial;

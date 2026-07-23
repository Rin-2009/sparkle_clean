import "../Sparkle_Clean.css/Blog.css";
import { Link } from "react-router-dom";
import img4 from "../Blog/blog_imgs/sparkle_img4.png";
import S4 from "../Blog/blog_imgs/S4.png";
import logoLight from "./blog_imgs/logo-light.svg";
import RelatedArticles from "./RelatedArticles";

function Article4() {
  const Article4 = {
    id: 4,
    image: img4,
    category: "Guide",
    date: "January 15, 2026",
    title: "The Ultimate Spring Cleaning Checklist for Every Room",
    description:
      "A comprehensive room-by-room guide to deep cleaning your home this spring. From kitchen to bathroom, we cover every detail.",
    author: "Maria Vasquez",
    img: S4,
    readTime: "8 min read",
    link: "/blog/article4",
  };

  return (
    <>
      <section className="article1">
        <div className="title-article">
          <Link to="/blog" className="text-decoration-none nav-link hidden-up">
            <span>
              <i className="fa-solid fa-arrow-left-long"></i> Back to Blog
            </span>
          </Link>

          <div className="breadcrumb-art hidden-up">
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/" className="text-decoration-none">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/blog" className="text-decoration-none">
                    Blog
                  </Link>
                </li>
                <li className="breadcrumb-item active text-light">Article4</li>
              </ol>
            </nav>
          </div>

          <div className="data-card">
            <span className="hidden-up">{Article4.category}</span>
            <h1 className="hidden-up">{Article4.title}</h1>
            <p className="hidden-up">{Article4.description}</p>

            <div className="hidden-up">
              <img src={Article4.img} alt={Article4.author} />
              <div>
                <span>{Article4.author}</span>
                <p>{Article4.readTime}</p>
              </div>
            </div>
          </div>

          <hr />

          <div className="container-lg container-art">
            <div className="big-img hidden-up">
              <img src={Article4.image} alt={Article4.title} />
            </div>

            <div className="texts-article">
              <p className="hidden-up">
                Spring is the perfect time to give your home a thorough refresh.
                After months of closed windows and indoor living, every room
                deserves attention. This checklist will guide you through the
                process systematically so nothing gets overlooked.
              </p>

              <h2 className="hidden-up">Kitchen</h2>

              <p>
                The kitchen is the heart of the home and often the room that
                needs the most attention during a spring clean. Start with the
                big appliances and work your way down to the details.
              </p>

              <ul className="hidden-up">
                <li>
                  <strong>Refrigerator:</strong> Pull it away from the wall and
                  vacuum the coils. Empty all shelves, wipe them down with a
                  baking soda solution, and toss expired items.
                </li>

                <li>
                  <strong>Oven:</strong> Use a paste of baking soda and water
                  for a natural clean. Let it sit overnight for the best
                  results.
                </li>

                <li>
                  <strong>Cabinets:</strong> Wipe down all exterior surfaces and
                  reorganize the interior. This is a great time to donate items
                  you no longer use.
                </li>

                <li>
                  <strong>Countertops:</strong> Deep clean behind small
                  appliances, clean the backsplash, and sanitize all surfaces.
                </li>

                <li>
                  <strong>Sink and disposal:</strong> Scrub the sink basin,
                  clean the faucet and handles, and freshen the garbage disposal
                  with ice cubes and lemon peels.
                </li>
              </ul>

              <h2 className="hidden-up">Living Room</h2>

              <p className="hidden-up">
                Your living room accumulates dust, pet hair, and general wear
                throughout the winter months.
              </p>

              <ul className="hidden-up">
                <li>
                  <strong>Upholstery:</strong> Vacuum all cushions, including
                  under the cushions. Spot-clean any stains.
                </li>

                <li>
                  <strong>Windows:</strong> Wash both interior and exterior
                  glass. Clean window tracks with a toothbrush and vacuum.
                </li>

                <li>
                  <strong>Baseboards:</strong> Wipe down all baseboards with a
                  damp cloth and mild cleaner.
                </li>

                <li>
                  <strong>Light fixtures:</strong> Remove globes and shades,
                  wash them in warm soapy water, and wipe the fixture itself.
                </li>

                <li>
                  <strong>Electronics:</strong> Dust TVs, entertainment centers,
                  and cable management areas.
                </li>
              </ul>

              <h2 className="hidden-up">Bedrooms</h2>

              <p className="hidden-up">
                A clean bedroom contributes significantly to better sleep
                quality and overall well-being.
              </p>

              <ul className="hidden-up">
                <li>
                  <strong>Mattress:</strong> Strip all bedding and vacuum the
                  mattress. Sprinkle with baking soda, let it sit for an hour,
                  then vacuum again.
                </li>

                <li>
                  <strong>Closets:</strong> Organize and rotate seasonal
                  clothing. Donate items you have not worn in a year.
                </li>

                <li>
                  <strong>Under the bed:</strong> Vacuum and mop under all beds.
                  This area collects a surprising amount of dust.
                </li>

                <li>
                  <strong>Curtains:</strong> Wash or dry clean curtains and
                  blinds. Vacuum fabric shades.
                </li>
              </ul>

              <h2 className="hidden-up">Bathrooms</h2>

              <p className="hidden-up">
                Bathrooms require extra attention due to moisture and frequent
                use.
              </p>

              <ul className="hidden-up">
                <li>
                  <strong>Grout:</strong> Scrub tile grout with a baking soda
                  paste and an old toothbrush. Consider resealing if discolored.
                </li>

                <li>
                  <strong>Shower head:</strong> Remove mineral deposits by
                  soaking it in a bag of white vinegar overnight.
                </li>

                <li>
                  <strong>Exhaust fan:</strong> Remove the cover and clean the
                  fan blades. This improves air circulation and helps prevent
                  mold.
                </li>

                <li>
                  <strong>Medicine cabinet:</strong> Check expiration dates on
                  all medications and products. Wipe the shelves clean.
                </li>
              </ul>

              <h2 className="hidden-up">Do Not Forget</h2>

              <p className="hidden-up">
                Some tasks are easy to overlook but make a big difference in the
                overall cleanliness of your home.
              </p>

              <ul className="hidden-up">
                <li>Replace HVAC filters.</li>
                <li>Wash all throw pillows and blankets.</li>
                <li>Clean light switch plates and door handles.</li>
                <li>Vacuum and flip area rugs.</li>
                <li>Dust ceiling fans from top to bottom.</li>
              </ul>

              <p className="hidden-up">
                Following this checklist room by room ensures nothing gets
                missed. If the task feels overwhelming, consider breaking it
                into multiple weekends or hiring a professional cleaning service
                to tackle the deep clean while you focus on organizing.
              </p>
            </div>

            <div className="socials mt-5 hidden-up">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-linkedin-in"></i>
              <i className="fa-solid fa-link"></i>
            </div>
          </div>
        </div>

        <div className=" container-xxl p-5 hidden-up">
          <RelatedArticles currentArticle={4} />
        </div>
      </section>

      <footer className="footer pt-5">
        <div className="container">
          <div className="row gy-5">
            {/* Logo */}

            <div className="col-lg-4 col-md-6">
              <img src={logoLight} alt="logo" className="footer-logo mb-4" />

              <p className="footer-text">
                Professional cleaning services for homes and offices. Insured,
                bonded, and eco-friendly.
              </p>

              <div className="social-icons mt-4">
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>

                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>

                <a href="#">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </div>
            </div>

            {/* Services */}

            <div className="col-lg-2 col-md-6">
              <h5>SERVICES</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#">Regular Cleaning</a>
                </li>
                <li>
                  <a href="#">Deep Cleaning</a>
                </li>
                <li>
                  <a href="#">Move-In/Out</a>
                </li>
                <li>
                  <a href="#">Commercial</a>
                </li>
              </ul>
            </div>

            {/* Resources */}

            <div className="col-lg-2 col-md-6">
              <h5>RESOURCES</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#">Cleaning Checklist</a>
                </li>
                <li>
                  <a href="#">Service Areas</a>
                </li>
                <li>
                  <a href="#">Quote Calculator</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>

            {/* Company */}

            <div className="col-lg-2 col-md-6">
              <h5>COMPANY</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>

            {/* Contact */}

            <div className="col-lg-2 col-md-6">
              <h5>CONTACT US</h5>

              <ul className="list-unstyled contact-list">
                <li>
                  <i className="fa-solid fa-location-dot"></i>
                  456 Clean Street <br />
                  Portland, OR 97201
                </li>

                <li>
                  <i className="fa-solid fa-phone"></i>
                  (555) 867-5309
                </li>

                <li>
                  <i className="fa-solid fa-envelope"></i>
                  hello@sparkleclean.com
                </li>
              </ul>
            </div>
          </div>

          <hr />

          <div className="bottom-footer d-flex justify-content-between align-items-center flex-wrap">
            <p>© 2026 SparkleClean Pro. All rights reserved.</p>

            <div>
              <a href="#">Privacy Policy</a>

              <a href="#">Terms of Service</a>

              <a href="#">Style Guide</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Article4;

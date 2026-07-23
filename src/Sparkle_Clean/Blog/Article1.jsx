import "../Sparkle_Clean.css/Blog.css";
import { Link } from "react-router-dom";
import img1 from "../Blog/blog_imgs/sparkle_img1.png";
import S1 from "../Blog/blog_imgs/S1.png";
import logoLight from "./blog_imgs/logo-light.svg";
import RelatedArticles from "../Blog/RelatedArticles";

function Article1() {
  const Article1 = {
    id: 1,
    image: img1,
    category: "Tips",
    date: "February 18, 2026",
    title: "5 Surprising Benefits of Professional Cleaning Services",
    description:
      "Beyond a clean home, professional cleaning offers health benefits, time savings, and even financial returns you might not expect.",
    author: "Carlos Rivera",
    img: S1,
    readTime: "6 min read",
    link: "/blog/Article1",
  };
  return (
    <>
      <section className="article1">
        <div className=" title-article">
          <Link
            to={"/blog"}
            className=" text-decoration-none nav-link hidden-up"
          >
            <span>
              <i class="fa-solid fa-arrow-left-long"></i> Back to Blog
            </span>
          </Link>

          <div className="breadcrumb-art hidden-up">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/" className="text-decoration-none">
                    Home
                  </Link>
                </li>
                /
                <Link to={"/blog"} className="text-decoration-none">
                  <li
                    className="breadcrumb-item active text-light bl"
                    aria-current="page"
                  >
                    Blog
                  </li>
                </Link>
                /
                <li
                  className="breadcrumb-item active text-light"
                  aria-current="page"
                >
                  Article1
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className=" data-card">
          <span className="hidden-up">{Article1.category}</span>
          <h1 className="hidden-up">{Article1.title}</h1>
          <p className="hidden-up">{Article1.description}</p>

          <div className="hidden-up">
            <img src={Article1.img} alt="" />
            <div className="">
              <span>{Article1.author}</span>
              <p>{Article1.readTime}</p>
            </div>
          </div>
        </div>

        <hr />

        <div className=" container-lg container-art">
          <div className="big-img hidden-up">
            <img src={Article1.image} alt="" />
          </div>

          <div className=" texts-article">
            <p className="hidden-up">
              Making the switch to eco-friendly cleaning does not mean
              sacrificing effectiveness. With the right knowledge and a few
              pantry staples, you can keep your home spotless while reducing
              your environmental footprint.
            </p>

            <h2 className="hidden-up">Why Go Green?</h2>

            <p className="hidden-up">
              Conventional cleaning products often contain volatile organic
              compounds (VOCs), synthetic fragrances, and harsh chemicals that
              can irritate skin, trigger allergies, and pollute waterways.
              Natural alternatives are gentler on your family and the planet.
            </p>

            <h2 className="hidden-up">The Essential Natural Cleaning Kit</h2>

            <b className="hidden-up">
              Before diving into tips, stock up on these affordable basics:
            </b>

            <ul className="hidden-up">
              <li>White distilled vinegar</li>
              <li>Baking soda</li>
              <li>Castile soap</li>
              <li>Lemon juice</li>
              <li>Essential oils (tea tree, lavender, eucalyptus)</li>
              <li>Microfiber cloths</li>
            </ul>

            <h2 className="hidden-up">10 Tips That Deliver Results</h2>

            <div className="">
              <h5 className="hidden-up">1. All-Purpose Cleaner:</h5>
              <p>
                Mix equal parts white vinegar and water in a spray bottle. Add
                10 drops of tea tree oil for extra antibacterial power. This
                works on countertops, appliances, and most hard surfaces.
              </p>

              <h5 className="hidden-up">2. Glass Cleaner: </h5>
              <p className="hidden-up">
                Combine two cups of water, half a cup of vinegar, and a quarter
                cup of rubbing alcohol. Spray and wipe with newspaper or a
                lint-free cloth for streak-free windows.
              </p>

              <h5 className="hidden-up">3. Drain Freshener:</h5>
              <p className="hidden-up">
                Pour half a cup of baking soda down the drain, followed by half
                a cup of vinegar. Let it fizz for 15 minutes, then flush with
                hot water. Do this monthly to prevent buildup.
              </p>

              <h5 className="hidden-up">4. Microwave Magic:</h5>
              <p className="hidden-up">
                Place a bowl of water with lemon slices in the microwave. Heat
                for three minutes and let it steam for five more. The grime
                wipes away effortlessly.
              </p>

              <h5 className="hidden-up">5. Stainless Steel Polish:</h5>
              <p className="hidden-up">
                Rub a small amount of olive oil on stainless steel surfaces with
                a microfiber cloth for a natural, streak-free shine.
              </p>

              <h5 className="hidden-up">6. Carpet Deodorizer: </h5>
              <p className="hidden-up">
                Sprinkle baking soda liberally on carpets. Add a few drops of
                your favorite essential oil. Let sit for 30 minutes before
                vacuuming.
              </p>

              <h5 className="hidden-up">7. Wood Floor Cleaner:</h5>
              <p className="hidden-up">
                Mix one gallon of warm water with a quarter cup of castile soap.
                Mop gently and avoid over-wetting. For stubborn spots, add a
                tablespoon of vinegar.
              </p>

              <h5 className="hidden-up">8. Bathroom Scrub:</h5>
              <p className="hidden-up">
                Make a paste of baking soda and water for sinks, tubs, and
                toilets. For tough stains, add a few drops of lemon juice. The
                mild abrasive action cleans without scratching.
              </p>

              <h5 className="hidden-up">9. Laundry Freshener:</h5>
              <p className="hidden-up">
                Add half a cup of white vinegar to the rinse cycle to naturally
                soften fabrics, reduce static, and remove lingering odors
                without synthetic fragrances.
              </p>

              <h5 className="hidden-up">10. Air Freshener: </h5>
              <p className="hidden-up">
                Simmer water with cinnamon sticks, citrus peels, and cloves on
                low heat. This fills your home with a natural, inviting scent
                without aerosol sprays.
              </p>
            </div>

            <h3 className="hidden-up">Making the Transition</h3>
            <p className="hidden-up">
              You do not need to replace everything at once. Start by swapping
              out one product at a time. As you finish a conventional cleaner,
              replace it with a natural alternative. Within a few months, your
              entire cleaning routine will be green. The results speak for
              themselves: a clean home, healthier indoor air quality, and the
              peace of mind that comes from knowing you are making a positive
              environmental choice.
            </p>
          </div>

          <hr />

          <div className="socials hidden-up">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-solid fa-link"></i>
          </div>
        </div>

        <div className=" container-xxl p-5 hidden-up">
          <RelatedArticles currentArticle={1} />
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

export default Article1;

import "../Sparkle_Clean.css/Blog.css";
import { Link } from "react-router-dom";
import img3 from "../Blog/blog_imgs/sparkle_img3.png";
import S3 from "../Blog/blog_imgs/S3.png";
import logoLight from "./blog_imgs/logo-light.svg";
import RelatedArticles from "./RelatedArticles";
function Article3() {
  const Article3 = {
    id: 3,
    image: img3,
    category: "Guide",
    date: "January 28, 2026",
    title: "The Complete Guide to Cleaning Before Moving",
    description:
      "Whether moving in or out, this guide covers everything you need to know about pre-move cleaning to protect your deposit and start fresh.",
    author: "James Cooper",
    img: S3,
    readTime: "7 min read",
    link: "/blog/article3",
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
                <li className="breadcrumb-item active text-light">Article3</li>
              </ol>
            </nav>
          </div>
          <div className="data-card">
            <span className="hidden-up">{Article3.category}</span>
            <h1 className="hidden-up">{Article3.title}</h1>
            <p className="hidden-up">{Article3.description}</p>
            <div className="hidden-up">
              <img src={Article3.img} alt={Article3.author} />
              <div>
                <span>{Article3.author}</span>
                <p>{Article3.readTime}</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="container-lg container-art">
            <div className="big-img hidden-up">
              <img src={Article3.image} alt={Article3.title} />
            </div>
            <div className="texts-article">
              <p className="hidden-up">
                Moving is one of the most stressful experiences in life, and
                cleaning often falls to the bottom of the priority list. But
                whether you are leaving a rental or moving into a new home,
                thorough cleaning is essential. This guide covers both scenarios
                to help you handle this critical step efficiently.
              </p>
              <h2 className="hidden-up">
                Moving Out: Protecting Your Security Deposit
              </h2>
              <p className="">
                If you are renting, a thorough move-out clean is directly tied
                to getting your security deposit back. Landlords inspect for
                cleanliness, damage, and general condition. Here is what to
                focus on.
              </p>
              <h3 className="hidden-up">Kitchen Essentials</h3>
              <ul className="hidden-up">
                <li>
                  Inside the oven: Self-cleaning cycle first, then manual
                  scrubbing of remaining residue
                </li>
                <li>
                  Refrigerator: Empty, defrost if needed, clean all shelves and
                  drawers, wipe the exterior
                </li>
                <li>
                  Range hood and filter: Degrease the filter with hot soapy
                  water, wipe down the hood
                </li>
                <li>
                  Dishwasher: Run an empty cycle with vinegar, then wipe the
                  door seal and exterior
                </li>
                <li>
                  Cabinets: Wipe inside and out, remove shelf liner if you
                  installed it
                </li>
                <li>
                  Countertops and backsplash: Deep clean all surfaces including
                  corners and edges
                </li>
              </ul>
              <h3 className="hidden-up">Bathroom Deep Clean</h3>
              <ul className="hidden-up">
                <li>Scrub tile grout until it returns to its original color</li>
                <li>
                  Remove all mineral deposits from faucets and showerheads
                </li>
                <li>Clean inside and behind the toilet, including the base</li>
                <li>
                  Wipe down all mirrors, light fixtures, and cabinet interiors
                </li>
                <li>Check for and treat any signs of mold or mildew</li>
              </ul>
              <h3 className="hidden-up">Throughout the Home</h3>
              <ul className="hidden-up">
                <li>
                  Fill all nail holes with spackle and touch up paint where
                  needed
                </li>
                <li>
                  Clean all light switches, outlet covers, and door handles
                </li>
                <li>Wash windows inside, including tracks and sills</li>
                <li>
                  Vacuum or mop all floors, paying attention to closet floors
                </li>
                <li>Clean baseboards throughout the entire unit</li>
              </ul>
              <h2 className="hidden-up">Moving In: Starting Fresh</h2>
              <p className="hidden-up">
                Even if a new home appears clean, you should always clean before
                unpacking. You do not know when surfaces were last sanitized,
                and an empty house is far easier to clean than a furnished one.
              </p>
              <h3 className="hidden-up">Before Unpacking</h3>
              <ul className="hidden-up">
                <li>
                  Sanitize everything: Kitchen counters, bathroom surfaces, and
                  anywhere food will be stored should be thoroughly sanitized
                </li>
                <li>
                  Deep clean floors: This is your only chance to easily clean
                  closet floors and under where furniture will go
                </li>
                <li>
                  Clean inside all cabinets: Wipe down all shelves before
                  placing your items
                </li>
                <li>
                  Run appliances: Run the dishwasher, washing machine, and dryer
                  empty with cleaning solutions
                </li>
              </ul>
              <h3 className="hidden-up">Safety First</h3>
              <ul className="hidden-up">
                <li>Change all air filters</li>
                <li>Test smoke and carbon monoxide detectors</li>
                <li>Clean dryer vents to prevent fire hazards</li>
                <li>Flush all drains to ensure proper flow</li>
              </ul>
              <h3 className="hidden-up">Timeline Tips</h3>
              <h5 className="hidden-up">Two Weeks Before Moving Out</h5>
              <ul className="hidden-up">
                <li>
                  Begin cleaning room by room, starting with areas you use least
                </li>
                <li>Take inventory of cleaning supplies needed</li>
                <li>Schedule professional cleaning if desired</li>
              </ul>
              <h5 className="hidden-up">Moving Day</h5>
              <ul className="hidden-up">
                <li>
                  Do a final sweep of all rooms after furniture is removed
                </li>
                <li>Take date-stamped photos of every room for your records</li>
                <li>
                  Check all closets, cabinets, and storage areas one last time
                </li>
              </ul>
              <h5 className="hidden-up">Moving In Day</h5>
              <ul className="hidden-up">
                <li>Clean before the moving truck arrives if possible</li>
                <li>Focus on kitchens and bathrooms first</li>
                <li>
                  Have cleaning supplies packed separately for easy access
                </li>
              </ul>
              <h2 className="hidden-up">When to Hire Professionals</h2>
              <p className="hidden-up">
                Move-out and move-in cleans are among the most common services
                professional cleaners provide. Consider hiring help if:
              </p>
              <ul className="hidden-up">
                <li>
                  Your lease requires professional cleaning for deposit return
                </li>
                <li>You are managing a tight moving timeline</li>
                <li>The previous occupants left the space in poor condition</li>
                <li>
                  You want a thorough deep clean before bringing in your
                  belongings
                </li>
              </ul>
              <p className="hidden-up">
                Professional move-in and move-out cleans typically take four to
                eight hours depending on the size and condition of the property.
                The investment often pays for itself through deposit recovery
                and the peace of mind of starting fresh in a truly clean space.
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
          <RelatedArticles currentArticle={3} />
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
export default Article3;

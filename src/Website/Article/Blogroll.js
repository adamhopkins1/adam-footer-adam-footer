import React from "react";

$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 10) {
      $(".navbar").addClass("active");
    } else {
      $(".navbar").removeClass("active");
    }
  });
});

const Blogroll = () => {
  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg fixed-top py-3">
          <div className="container">
            <a
              href="#"
              className="navbar-brand text-uppercase font-weight-bold"
            >
              The Blog
            </a>
            <button
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              className="navbar-toggler navbar-toggler-right"
            >
              <i className="fa fa-bars"></i>
            </button>

            <div
              id="navbarSupportedContent"
              className="collapse navbar-collapse"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a
                    href="#"
                    className="nav-link text-uppercase font-weight-bold"
                  >
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link text-uppercase font-weight-bold"
                  >
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link text-uppercase font-weight-bold"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link text-uppercase font-weight-bold"
                  >
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link text-uppercase font-weight-bold"
                  >
                    Resources
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className="container">
        <div class="page-header">
          <h1>
            The Blog Staff Blogs <small>Blog / Blogroll</small>
          </h1>
        </div>

        <div className="row">
          <div className="col-md-8">
            <article id="">
              <header>
                <div className="meta">
                  Written by <span className="author">Adam H</span>{" "}
                  <span className="date">11/16/22</span> |{" "}
                  <span className="comments">
                    <span className="badge">4</span> Comments
                  </span>
                </div>
                <h2>
                  <a href="">Sociology is still relevant in inequal times.</a>
                </h2>
              </header>
              <div className="entry-content">
                <a href="">
                  <img
                    src="https://s3.amazonaws.com/libapps/accounts/5784/images/Sociology-wordle.png"
                    alt=""
                    className="img-fluid"
                  />
                </a>
                <p className="lead">
                  Sociology can help establish empathy and understanding among other stratified and majority groups in general society. &hellip;
                </p>

                <a href="#" className="btn btn-primary">
                  Read More{" "}
                  <span
                    className="glyphicon glyphicon glyphicon-chevron-right"
                    aria-hidden="true"
                  ></span>
                </a>
              </div>
              <footer></footer>
            </article>
            <article id="">
              <header>
                <div className="meta">
                  Written by <span className="author">Adam H.</span>{" "}
                  <span className="date">1/30/16</span> |{" "}
                  <span className="comments">
                    <span className="badge">4</span> Comments
                  </span>
                </div>
                <h2>
                  <a href="">What does Max Weber mean to me?</a>
                </h2>
              </header>
              <div className="entry-content">
                <a href="">
                  <img
                    src="https://www.researchgate.net/publication/43294580/figure/fig1/AS:340772160327684@1458257822382/Emergent-themes-in-the-Protestant-ethic.png"
                    alt=""
                    className="img-fluid"
                  />
                </a>
                <p>
                  Revisiting Max Weber in 2022 does his ideas have any relevancy within the inherent issues in the Worldlense.Max Weber concepts still stands from division of labor to the protestant ethic the modern concepts have full relevancy than they have since over 100 years ago.
                </p>

                <a href="#" className="btn btn-primary">
                  Read More{" "}
                  <span
                    className="glyphicon glyphicon glyphicon-chevron-right"
                    aria-hidden="true"
                  ></span>
                </a>
              </div>
              <footer></footer>
            </article>
            <article id="">
              <header>
                <div className="meta">
                  Written by <span className="author">Adam H.</span>{" "}
                  <span className="date">1/30/16</span> |{" "}
                  <span className="comments">
                    <span className="badge">4</span> Comments
                  </span>
                </div>
                <h2>
                  <a href="">Herber Spencer,the enigimatic darwinist.</a>
                </h2>
              </header>
              <div className="entry-content">
                <a href="">
                  <img
                    src="https://91b6be3bd2294a24b7b5-da4c182123f5956a3d22aa43eb816232.ssl.cf1.rackcdn.com/contentItem-5612914-42753170-wc9p9rw23lphv-or.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </a>
                <p>
                  Theres not many books written on the controversial and long held concept of social darwinism many have attempted to tie it and abscribe it to an social evolution concept, but according to recent theorists have attempted to find alternate more practical applications that can be found not only in the social scientific field but can range from psychology to anthropology as well.
                </p>

                <a href="#" className="btn btn-primary">
                  Read More{" "}
                  <span
                    className="glyphicon glyphicon glyphicon-chevron-right"
                    aria-hidden="true"
                  ></span>
                </a>
              </div>
              <footer></footer>
            </article>
            <article id="">
              <header>
                <div className="meta">
                  Written by <span className="author">Adam H.</span>{" "}
                  <span className="date">1/30/16</span> |{" "}
                  <span className="comments">
                    <span className="badge">4</span> Comments
                  </span>
                </div>
                <h2>
                  <a href="">The World According to Martineau</a>
                </h2>
              </header>
              <div className="entry-content">
                <a href="">
                  <img
                    src="https://images.ecestaticos.com/2R_7B9SfKVOgNb5BmwAFRH8MLUE=/0x0:888x673/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F1b2%2F6ec%2F7d5%2F1b26ec7d55eddeb943fbf70a497a27b0.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </a>
                <p>
                  Harriet Matineau was famous for her holistic whole-view of sociology and being the first known female sociologist. But theres much more to learn from her ideas and life that will can be beneficial to understanding the meta/microview of science.
                </p>

                <a href="#" className="btn btn-primary">
                  Read More{" "}
                  <span
                    className="glyphicon glyphicon glyphicon-chevron-right"
                    aria-hidden="true"
                  ></span>
                </a>
              </div>
              <footer></footer>
            </article>

            <nav>
              <ul className="pagination">
                <li className="disabled">
                  <a href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="active">
                  <a href="#">
                    1 <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">5</a>
                </li>
                <li>
                  <a href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <aside className="col-md-4">
            <div className="card mb-3">
              <h3 className="card-header mb-3">Join our Newsletter</h3>
              <form className="form-horizontal">
                <div className="form-group">
                  <div className="col-sm-12">
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail3"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-sm-12">
                    <button type="submit" className="btn btn-primary">
                      Join Us
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <h3>Recent Posts</h3>
            <div className="list-group  mb-3">
              <a href="#" className="list-group-item active">
                <h4 className="list-group-item-heading">Vacations in the West</h4>
                <p className="list-group-item-text">
                  A author taking a trip to Los Angeles to take in the sights and sounds of Hollywood. &hellip;
                </p>
              </a>
              <a href="#" className="list-group-item">
                <h4 className="list-group-item-heading">Is too much too much?</h4>
                <p className="list-group-item-text">
                  Working towards a life of balance and personal health goals post-pandemic. &hellip;
                </p>
              </a>
              <a href="#" className="list-group-item">
                <h4 className="list-group-item-heading">Thoughts On Life and Intensions Towards Happiness.</h4>
                <p className="list-group-item-text">
                  What matters when life gets in the way of happiness? Is it a challenge or a state of mind? &hellip;
                </p>
              </a>
              <a href="#" className="list-group-item">
                <h4 className="list-group-item-heading">My First Post</h4>
                <p className="list-group-item-text">
                  Hello and Welcome to my personal off-topic posts.Enjoy and your're welcome. &hellip;
                </p>
              </a>
            </div>

            <div className="container">
              <h3>Follow Us</h3>
              <div className="social">
                <a href="">
                  <i className="fa fa-3x fa-youtube-square"></i>
                </a>
                <a href="">
                  <i className="fa fa-3x fa-facebook-square"></i>
                </a>
                <a href="">
                  <i className="fa fa-3x fa-linkedin-square"></i>
                </a>
                <a href="">
                  <i className="fa fa-3x fa-pinterest-square"></i>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <footer className="footer_area section_padding_130_0">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="single-footer-widget section_padding_0_130">
                <div className="footer-logo mb-3"></div>
                <p>
                  The Blog is a Pop Sociology Blog that Puts a Spotlight on
                  Common Sociological Topics That Readers Can Relate to.
                </p>
                <div className="copywrite-text mb-5">
                  <p className="mb-0">
                    Made with <i className="lni-heart mr-1"></i>by
                    <a className="ml-1" href="https://github.com/adamhopkins1">
                      The Blog
                    </a>
                  </p>
                </div>
                <div className="footer_social_area">
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Facebook"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Pinterest"
                  >
                    <i className="fa fa-pinterest"></i>
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Youtube"
                  >
                    <i className="fa fa-youtube"></i>
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Instagram"
                  >
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg">
              <div className="single-footer-widget section_padding_0_130">
                <h5 className="widget-title">About</h5>
                <div className="footer_menu">
                  <ul>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">History</a>
                    </li>
                    <li>
                      <a href="#">Sociology &amp; Concepts</a>
                    </li>
                    <li>
                      <a href="#">Forums</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg">
              <div className="single-footer-widget section_padding_0_130">
                <h5 className="widget-title">Support</h5>
                <div className="footer_menu">
                  <ul>
                    <li>
                      <a href="#">Sociology Resources</a>
                    </li>
                    <li>
                      <a href="#">What is Sociology?</a>
                    </li>
                    <li>
                      <a href="#">Media and Videos</a>
                    </li>
                    <li>
                      <a href="#">Insight &amp; Viewpoints</a>
                    </li>
                    <li>
                      <a href="#">Help &amp; Support</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg">
              <div className="single-footer-widget section_padding_0_130">
                <h5 className="widget-title">Contact</h5>
                <div className="footer_menu">
                  <ul>
                    <li>
                      <a href="#">Address</a>
                    </li>
                    <li>
                      <a href="#">Contact Number</a>
                    </li>
                    <li>
                      <a href="#">Term &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Blogroll;



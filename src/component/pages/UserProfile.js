import React from 'react'


export default function UserProfile() {
    return(
        <>
        <>
  <header className="header-area bg-white border-bottom border-bottom-gray">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-2">
          <div className="logo-box">
            <a href="index.html" className="logo">
              <img src="images/logo-black.png" alt="logo" />
            </a>
            <div className="user-action">
              <div
                className="search-menu-toggle icon-element icon-element-xs shadow-sm mr-1"
                data-toggle="tooltip"
                data-placement="top"
                title="Search"
              >
                <i className="la la-search" />
              </div>
              <div
                className="off-canvas-menu-toggle icon-element icon-element-xs shadow-sm mr-1"
                data-toggle="tooltip"
                data-placement="top"
                title="Main menu"
              >
                <i className="la la-bars" />
              </div>
              <div
                className="user-off-canvas-menu-toggle icon-element icon-element-xs shadow-sm"
                data-toggle="tooltip"
                data-placement="top"
                title="User menu"
              >
                <i className="la la-user" />
              </div>
            </div>
          </div>
        </div>
        {/* end col-lg-2 */}
        <div className="col-lg-10">
          <div className="menu-wrapper border-left border-left-gray pl-4">
            <nav className="menu-bar mr-auto">
              <ul>
                <li>
                  <a href="#">
                    Home <i className="la la-angle-down fs-11" />
                  </a>
                  <ul className="dropdown-menu-item">
                    <li>
                      <a href="index.html">Home - landing</a>
                    </li>
                    <li>
                      <a href="home-2.html">Home - main</a>
                    </li>
                    <li>
                      <a href="home-3.html">
                        Home - layout 2{" "}
                        <span className="badge bg-warning text-white">New</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="is-mega-menu">
                  <a href="#">
                    pages <i className="la la-angle-down fs-11" />
                  </a>
                  <div className="dropdown-menu-item mega-menu">
                    <ul className="row">
                      <li className="col-lg-3">
                        <a href="user-profile.html">user profile</a>
                        <a href="notifications.html">Notifications</a>
                        <a href="referrals.html">Referrals</a>
                        <a href="setting.html">settings</a>
                        <a href="ask-question.html">ask question</a>
                        <a href="question-details.html">question details</a>
                        <a href="about.html">about</a>
                        <a href="revisions.html">revisions</a>
                        <a href="category.html">category</a>
                        <a href="companies.html">companies</a>
                        <a href="company-details.html">company details</a>
                      </li>
                      <li className="col-lg-3">
                        <a href="careers.html">careers</a>
                        <a href="career-details.html">career details</a>
                        <a href="contact.html">contact</a>
                        <a href="faq.html">FAQs</a>
                        <a href="pricing-table.html">pricing tables</a>
                        <a href="error.html">page 404</a>
                        <a href="terms-and-conditions.html">
                          Terms &amp; conditions
                        </a>
                        <a href="privacy-policy.html">privacy policy</a>
                        <a href="cart.html">cart</a>
                        <a href="talent.html">talent</a>
                        <a href="advertising.html">advertising</a>
                      </li>
                      <li className="col-lg-3">
                        <a href="free-demo.html">free demo</a>
                        <a href="checkout.html">checkout</a>
                        <a href="wishlist.html">wishlist</a>
                        <a href="login.html">login</a>
                        <a href="login-2.html">login 2</a>
                        <a href="signup.html">sign up</a>
                        <a href="signup-2.html">sign up 2</a>
                        <a href="recover-password.html">recover password</a>
                        <a href="questions-layout-2.html">
                          questions layout 2{" "}
                          <span className="badge bg-warning text-white">
                            New
                          </span>
                        </a>
                        <a href="questions-full-width.html">
                          questions full-width{" "}
                          <span className="badge bg-warning text-white">
                            New
                          </span>
                        </a>
                        <a href="questions-left-sidebar.html">
                          questions left sidebar{" "}
                          <span className="badge bg-warning text-white">
                            New
                          </span>
                        </a>
                      </li>
                      <li className="col-lg-3">
                        <a href="questions-right-sidebar.html">
                          questions right sidebar{" "}
                          <span className="badge bg-warning text-white">
                            New
                          </span>
                        </a>
                        <a href="user-list.html">
                          user list{" "}
                          <span className="badge bg-warning text-white">
                            New
                          </span>
                        </a>
                        <a href="category-list.html">
                          category list{" "}
                          <span className="badge bg-warning text-white">
                            New
                          </span>
                        </a>
                        <a href="tags-list.html">
                          tags list{" "}
                          <span className="badge bg-warning text-white">
                            New
                          </span>
                        </a>
                        <a href="add-post.html">
                          add post{" "}
                          <span className="badge bg-warning text-white">
                            New
                          </span>
                        </a>
                        <a href="badges-list.html">
                          Badges list{" "}
                          <span className="badge bg-warning text-white">
                            New
                          </span>
                        </a>
                        <a href="job-list.html">
                          job list{" "}
                          <span className="badge bg-warning text-white">
                            New
                          </span>
                        </a>
                        <a href="error-2.html">
                          page 404 2{" "}
                          <span className="badge bg-warning text-white">
                            New
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#">
                    blog <i className="la la-angle-down fs-11" />
                  </a>
                  <ul className="dropdown-menu-item">
                    <li>
                      <a href="blog-grid-no-sidebar.html">grid no sidebar</a>
                    </li>
                    <li>
                      <a href="blog-left-sidebar.html">blog left sidebar</a>
                    </li>
                    <li>
                      <a href="blog-right-sidebar.html">blog right sidebar</a>
                    </li>
                    <li>
                      <a href="blog-single.html">blog detail</a>
                    </li>
                  </ul>
                </li>
              </ul>
              {/* end ul */}
            </nav>
            {/* end main-menu */}
            <form method="post" className="mr-2">
              <div className="form-group mb-0">
                <input
                  className="form-control form--control form--control-bg-gray"
                  type="text"
                  name="search"
                  placeholder="Type your search words..."
                />
                <button className="form-btn" type="button">
                  <i className="la la-search" />
                </button>
              </div>
            </form>
            <div className="nav-right-button">
              <ul className="user-action-wrap d-flex align-items-center">
                <li className="dropdown">
                  <span className="ball red ball-lg noti-dot" />
                  <a
                    className="nav-link dropdown-toggle dropdown--toggle"
                    href="#"
                    id="notificationDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="la la-bell" />
                  </a>
                  <div
                    className="dropdown-menu dropdown--menu dropdown-menu-right mt-3 keep-open"
                    aria-labelledby="notificationDropdown"
                  >
                    <h6 className="dropdown-header">
                      <i className="la la-bell pr-1 fs-16" />
                      Notifications
                    </h6>
                    <div className="dropdown-divider border-top-gray mb-0" />
                    <div className="dropdown-item-list">
                      <a className="dropdown-item" href="notifications.html">
                        <div className="media media-card media--card shadow-none mb-0 rounded-0 align-items-center bg-transparent">
                          <div className="media-img media-img-sm flex-shrink-0">
                            <img src="images/img3.jpg" alt="avatar" />
                          </div>
                          <div className="media-body p-0 border-left-0">
                            <h5 className="fs-14 fw-regular">
                              John Doe following your post
                            </h5>
                            <small className="meta d-block lh-24">
                              <span>45 secs ago</span>
                            </small>
                          </div>
                        </div>
                      </a>
                      <a className="dropdown-item" href="notifications.html">
                        <div className="media media-card media--card shadow-none mb-0 rounded-0 align-items-center bg-transparent">
                          <div className="media-img media-img-sm flex-shrink-0">
                            <img src="images/img4.jpg" alt="avatar" />
                          </div>
                          <div className="media-body p-0 border-left-0">
                            <h5 className="fs-14 fw-regular">
                              Arnold Smith answered on your post
                            </h5>
                            <small className="meta d-block lh-24">
                              <span>5 mins ago</span>
                            </small>
                          </div>
                        </div>
                      </a>
                      <a className="dropdown-item" href="notifications.html">
                        <div className="media media-card media--card shadow-none mb-0 rounded-0 align-items-center bg-transparent">
                          <div className="media-img media-img-sm flex-shrink-0">
                            <img src="images/img4.jpg" alt="avatar" />
                          </div>
                          <div className="media-body p-0 border-left-0">
                            <h5 className="fs-14 fw-regular">
                              Saeed bookmarked your post
                            </h5>
                            <small className="meta d-block lh-24">
                              <span>1 hour ago</span>
                            </small>
                          </div>
                        </div>
                      </a>
                    </div>
                    <a
                      className="dropdown-item pb-1 border-bottom-0 text-center btn-text fw-regular"
                      href="notifications.html"
                    >
                      View All Notifications{" "}
                      <i className="la la-arrow-right icon ml-1" />
                    </a>
                  </div>
                </li>
                <li className="dropdown user-dropdown">
                  <a
                    className="nav-link dropdown-toggle dropdown--toggle pl-2"
                    href="#"
                    id="userMenuDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <div className="media media-card media--card shadow-none mb-0 rounded-0 align-items-center bg-transparent">
                      <div className="media-img media-img-xs flex-shrink-0 rounded-full mr-2">
                        <img
                          src="/images/img4.jpg"
                          alt="avatar"
                          className="rounded-full"
                        />
                      </div>
                      <div className="media-body p-0 border-left-0">
                        <h5 className="fs-14">Arden Smith</h5>
                      </div>
                    </div>
                  </a>
                  <div
                    className="dropdown-menu dropdown--menu dropdown-menu-right mt-3 keep-open"
                    aria-labelledby="userMenuDropdown"
                  >
                    <h6 className="dropdown-header">Hi, Arden Smith</h6>
                    <div className="dropdown-divider border-top-gray mb-0" />
                    <div className="dropdown-item-list">
                      <a className="dropdown-item" href="user-profile.html">
                        <i className="la la-user mr-2" />
                        Profile
                      </a>
                      <a className="dropdown-item" href="notifications.html">
                        <i className="la la-bell mr-2" />
                        Notifications
                      </a>
                      <a className="dropdown-item" href="referrals.html">
                        <i className="la la-user-plus mr-2" />
                        Referrals
                      </a>
                      <a className="dropdown-item" href="setting.html">
                        <i className="la la-gear mr-2" />
                        Settings
                      </a>
                      <a className="dropdown-item" href="index.html">
                        <i className="la la-power-off mr-2" />
                        Log out
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* end nav-right-button */}
          </div>
          {/* end menu-wrapper */}
        </div>
        {/* end col-lg-10 */}
      </div>
      {/* end row */}
    </div>
    {/* end container */}
    <div className="off-canvas-menu custom-scrollbar-styled">
      <div
        className="off-canvas-menu-close icon-element icon-element-sm shadow-sm"
        data-toggle="tooltip"
        data-placement="left"
        title="Close menu"
      >
        <i className="la la-times" />
      </div>
      {/* end off-canvas-menu-close */}
      <ul className="generic-list-item off-canvas-menu-list pt-90px">
        <li>
          <a href="#">Home</a>
          <ul className="sub-menu">
            <li>
              <a href="index.html">Home - landing</a>
            </li>
            <li>
              <a href="home-2.html">Home - main</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Pages</a>
          <ul className="sub-menu">
            <li>
              <a href="user-profile.html">user profile</a>
            </li>
            <li>
              <a href="notifications.html">Notifications</a>
            </li>
            <li>
              <a href="referrals.html">Referrals</a>
            </li>
            <li>
              <a href="setting.html">settings</a>
            </li>
            <li>
              <a href="ask-question.html">ask question</a>
            </li>
            <li>
              <a href="question-details.html">question details</a>
            </li>
            <li>
              <a href="about.html">about</a>
            </li>
            <li>
              <a href="revisions.html">revisions</a>
            </li>
            <li>
              <a href="category.html">category</a>
            </li>
            <li>
              <a href="companies.html">companies</a>
            </li>
            <li>
              <a href="company-details.html">company details</a>
            </li>
            <li>
              <a href="careers.html">careers</a>
            </li>
            <li>
              <a href="career-details.html">career details</a>
            </li>
            <li>
              <a href="contact.html">contact</a>
            </li>
            <li>
              <a href="faq.html">FAQs</a>
            </li>
            <li>
              <a href="pricing-table.html">pricing tables</a>
            </li>
            <li>
              <a href="error.html">page 404</a>
            </li>
            <li>
              <a href="terms-and-conditions.html">Terms &amp; conditions</a>
            </li>
            <li>
              <a href="privacy-policy.html">privacy policy</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">blog</a>
          <ul className="sub-menu">
            <li>
              <a href="blog-grid-no-sidebar.html">grid no sidebar</a>
            </li>
            <li>
              <a href="blog-left-sidebar.html">blog left sidebar</a>
            </li>
            <li>
              <a href="blog-right-sidebar.html">blog right sidebar</a>
            </li>
            <li>
              <a href="blog-single.html">blog detail</a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="off-canvas-btn-box px-4 pt-5 text-center">
        <a
          href="login.html"
          className="btn theme-btn theme-btn-sm theme-btn-outline"
        >
          <i className="la la-sign-in mr-1" /> Login
        </a>
        <span className="fs-15 fw-medium d-inline-block mx-2">Or</span>
        <a href="signup.html" className="btn theme-btn theme-btn-sm">
          <i className="la la-plus mr-1" /> Sign up
        </a>
      </div>
    </div>
    {/* end off-canvas-menu */}
    <div className="user-off-canvas-menu custom-scrollbar-styled">
      <div
        className="user-off-canvas-menu-close icon-element icon-element-sm shadow-sm"
        data-toggle="tooltip"
        data-placement="left"
        title="Close menu"
      >
        <i className="la la-times" />
      </div>
      {/* end user-off-canvas-menu-close */}
      <ul
        className="nav nav-tabs generic-tabs generic--tabs pt-90px pl-4 shadow-sm"
        id="myTab2"
        role="tablist"
      >
        <li className="nav-item">
          <div className="anim-bar" />
        </li>
        <li className="nav-item">
          <a
            className="nav-link active"
            id="user-notification-menu-tab"
            data-toggle="tab"
            href="#user-notification-menu"
            role="tab"
            aria-controls="user-notification-menu"
            aria-selected="true"
          >
            Notifications
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="user-profile-menu-tab"
            data-toggle="tab"
            href="#user-profile-menu"
            role="tab"
            aria-controls="user-profile-menu"
            aria-selected="false"
          >
            Profile
          </a>
        </li>
      </ul>
      <div className="tab-content pt-3" id="myTabContent2">
        <div
          className="tab-pane fade show active"
          id="user-notification-menu"
          role="tabpanel"
          aria-labelledby="user-notification-menu-tab"
        >
          <div className="dropdown--menu shadow-none w-auto rounded-0">
            <div className="dropdown-item-list">
              <a className="dropdown-item" href="notifications.html">
                <div className="media media-card media--card shadow-none mb-0 rounded-0 align-items-center bg-transparent">
                  <div className="media-img media-img-sm flex-shrink-0">
                    <img src="images/img3.jpg" alt="avatar" />
                  </div>
                  <div className="media-body p-0 border-left-0">
                    <h5 className="fs-14 fw-regular">
                      John Doe following your post
                    </h5>
                    <small className="meta d-block lh-24">
                      <span>45 secs ago</span>
                    </small>
                  </div>
                </div>
              </a>
              <a className="dropdown-item" href="notifications.html">
                <div className="media media-card media--card shadow-none mb-0 rounded-0 align-items-center bg-transparent">
                  <div className="media-img media-img-sm flex-shrink-0">
                    <img src="images/img4.jpg" alt="avatar" />
                  </div>
                  <div className="media-body p-0 border-left-0">
                    <h5 className="fs-14 fw-regular">
                      Arnold Smith answered on your post
                    </h5>
                    <small className="meta d-block lh-24">
                      <span>5 mins ago</span>
                    </small>
                  </div>
                </div>
              </a>
              <a className="dropdown-item" href="notifications.html">
                <div className="media media-card media--card shadow-none mb-0 rounded-0 align-items-center bg-transparent">
                  <div className="media-img media-img-sm flex-shrink-0">
                    <img src="images/img4.jpg" alt="avatar" />
                  </div>
                  <div className="media-body p-0 border-left-0">
                    <h5 className="fs-14 fw-regular">
                      Saeed bookmarked your post
                    </h5>
                    <small className="meta d-block lh-24">
                      <span>1 hour ago</span>
                    </small>
                  </div>
                </div>
              </a>
            </div>
            <a
              className="dropdown-item border-bottom-0 text-center btn-text fw-regular"
              href="notifications.html"
            >
              View All Notifications{" "}
              <i className="la la-arrow-right icon ml-1" />
            </a>
          </div>
        </div>
        {/* end tab-pane */}
        <div
          className="tab-pane fade"
          id="user-profile-menu"
          role="tabpanel"
          aria-labelledby="user-profile-menu-tab"
        >
          <div className="dropdown--menu shadow-none w-auto rounded-0">
            <div className="dropdown-item-list">
              <a className="dropdown-item" href="user-profile.html">
                <i className="la la-user mr-2" />
                Profile
              </a>
              <a className="dropdown-item" href="notifications.html">
                <i className="la la-bell mr-2" />
                Notifications
              </a>
              <a className="dropdown-item" href="referrals.html">
                <i className="la la-user-plus mr-2" />
                Referrals
              </a>
              <a className="dropdown-item" href="setting.html">
                <i className="la la-gear mr-2" />
                Settings
              </a>
              <a className="dropdown-item" href="index.html">
                <i className="la la-power-off mr-2" />
                Log out
              </a>
            </div>
          </div>
        </div>
        {/* end tab-pane */}
      </div>
    </div>
    {/* end user-off-canvas-menu */}
    <div className="mobile-search-form">
      <div className="d-flex align-items-center">
        <form method="post" className="flex-grow-1 mr-3">
          <div className="form-group mb-0">
            <input
              className="form-control form--control pl-40px"
              type="text"
              name="search"
              placeholder="Type your search words..."
            />
            <span className="la la-search input-icon" />
          </div>
        </form>
        <div className="search-bar-close icon-element icon-element-sm shadow-sm">
          <i className="la la-times" />
        </div>
        {/* end off-canvas-menu-close */}
      </div>
    </div>
    {/* end mobile-search-form */}
    <div className="body-overlay" />
  </header>
  {/* end header-area */}
  {/*======================================
  END HEADER AREA
======================================*/}
  {/*======================================
  START HERO AREA
======================================*/}
  <section className="hero-area bg-white shadow-sm overflow-hidden pt-60px">
    <span className="stroke-shape stroke-shape-1" />
    <span className="stroke-shape stroke-shape-2" />
    <span className="stroke-shape stroke-shape-3" />
    <span className="stroke-shape stroke-shape-4" />
    <span className="stroke-shape stroke-shape-5" />
    <span className="stroke-shape stroke-shape-6" />
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="hero-content">
            <div className="media media-card align-items-center shadow-none p-0 mb-0 rounded-0 bg-transparent">
              <div className="media-img media--img">
                <img src="images/img4.jpg" alt="avatar" />
              </div>
              <div className="media-body">
                <h5>Arden Smith</h5>
                <small className="meta d-block lh-20 pb-2">
                  <span>United States, member since 11 years ago</span>
                </small>
                <div className="stats fs-14 fw-medium d-flex align-items-center lh-18">
                  <span className="text-black pr-2" title="Reputation">
                    224,110
                  </span>
                  <span
                    className="pr-2 d-inline-flex align-items-center"
                    title="Gold"
                  >
                    <span className="ball ml-1 gold" />
                    16
                  </span>
                  <span
                    className="pr-2 d-inline-flex align-items-center"
                    title="Silver"
                  >
                    <span className="ball ml-1 silver" />
                    93
                  </span>
                  <span
                    className="pr-2 d-inline-flex align-items-center"
                    title="Bronze"
                  >
                    <span className="ball ml-1" />
                    136
                  </span>
                </div>
              </div>
            </div>
            {/* end media */}
          </div>
          {/* end hero-content */}
        </div>
        {/* end col-lg-8 */}
        <div className="col-lg-4">
          <div className="hero-btn-box text-right py-3">
            <a
              href="setting.html"
              className="btn theme-btn theme-btn-outline theme-btn-outline-gray"
            >
              <i className="la la-gear mr-1" /> Edit Profile
            </a>
          </div>
        </div>
        {/* end col-lg-4 */}
        <div className="col-lg-12">
          <ul
            className="nav nav-tabs generic-tabs generic--tabs generic--tabs-2 mt-4"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item">
              <a
                className="nav-link active"
                id="user-profile-tab"
                data-toggle="tab"
                href="#user-profile"
                role="tab"
                aria-controls="user-profile"
                aria-selected="true"
              >
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="user-activity-tab"
                data-toggle="tab"
                href="#user-activity"
                role="tab"
                aria-controls="user-activity"
                aria-selected="false"
              >
                Activity
              </a>
            </li>
          </ul>
        </div>
        {/* end col-lg-4 */}
      </div>
      {/* end row */}
    </div>
    {/* end container */}
  </section>
  {/*======================================
  END HERO AREA
======================================*/}
  {/* ================================
   START USER DETAILS AREA
================================= */}
  <section className="user-details-area pt-30px pb-60px">
    <div className="container">
      <div className="row">
        <div className="col-lg-9">
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="user-profile"
              role="tabpanel"
              aria-labelledby="user-profile-tab"
            >
              <div className="user-panel-main-bar">
                <div className="user-panel mb-30px">
                  <p className="pb-2">
                    I am a programmer. My principal language is C++. I've also
                    done commercial work in Java, C, Perl, Python, Javascript
                    and APL. I've also been known to dabble in lisp, Haskell,
                    assembler (ARM, x86, amd64) and probably a few other
                    languages that haven't left as big a mark.
                  </p>
                  <p className="pb-2">
                    Programmer at{" "}
                    <a href="#" className="text-color hover-underline">
                      Bloomberg
                    </a>
                    . Posts and commments are my opinions and are not sponsored
                    or endorsed by my employer.
                  </p>
                  <p>
                    If my answers helped you can{" "}
                    <a href="#" className="text-color hover-underline">
                      buy me a coffee.
                    </a>
                  </p>
                </div>
                {/* end user-panel */}
                <div className="user-panel mb-30px pt-30px border-top border-top-gray">
                  <ul className="generic-list-item generic-list-item-bullet">
                    <li className="pl-3">
                      <a href="#" className="d-inline-block">
                        ardensmith.com
                      </a>
                    </li>
                    <li className="pl-3">
                      <a href="#" className="d-inline-block">
                        Facebook
                      </a>
                    </li>
                    <li className="pl-3">
                      <a href="#" className="d-inline-block">
                        Twitter
                      </a>
                    </li>
                    <li className="pl-3">
                      <a href="#" className="d-inline-block">
                        Instagram
                      </a>
                    </li>
                  </ul>
                </div>
                {/* end user-panel */}
                <div className="user-panel mb-30px">
                  <div className="row">
                    <div className="col-lg-4 responsive-column-half">
                      <div className="media media-card align-items-center shadow-none border border-gray p-3">
                        <div className="icon-element icon-element-sm mr-3 bg-1">
                          <svg
                            className="svg-icon-color-white"
                            width={25}
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            viewBox="-19 0 136 136.54819"
                          >
                            <g id="surface1">
                              <path d="M 21.710938 27.703125 L 76.128906 27.703125 C 77.15625 27.703125 77.988281 26.867188 77.988281 25.839844 C 77.988281 24.808594 77.15625 23.972656 76.128906 23.972656 L 21.710938 23.972656 C 20.679688 23.972656 19.84375 24.808594 19.84375 25.839844 C 19.84375 26.867188 20.679688 27.703125 21.710938 27.703125 Z M 21.710938 27.703125 " />
                              <path d="M 0.273438 18.625 L 0.273438 130.699219 C 0.285156 133.925781 2.898438 136.539062 6.121094 136.546875 L 91.710938 136.546875 C 94.941406 136.539062 97.554688 133.925781 97.558594 130.699219 L 97.558594 18.625 C 97.554688 15.394531 94.941406 12.78125 91.710938 12.777344 L 63.289062 12.777344 C 62.351562 4.839844 55.160156 -0.835938 47.222656 0.101562 C 40.574219 0.882812 35.332031 6.128906 34.546875 12.777344 L 6.121094 12.777344 C 2.894531 12.78125 0.277344 15.394531 0.273438 18.625 Z M 93.816406 130.699219 C 93.816406 131.867188 92.871094 132.8125 91.703125 132.8125 L 6.121094 132.8125 C 4.953125 132.8125 4.007812 131.867188 4.007812 130.699219 L 4.007812 36.6875 L 93.832031 36.6875 Z M 48.917969 3.695312 C 54.207031 3.703125 58.695312 7.554688 59.519531 12.777344 L 38.367188 12.777344 C 39.183594 7.574219 43.648438 3.726562 48.917969 3.695312 Z M 91.710938 16.503906 C 92.882812 16.503906 93.832031 17.457031 93.832031 18.625 L 93.832031 32.953125 L 4.007812 32.953125 L 4.007812 18.625 C 4.007812 17.457031 4.953125 16.503906 6.121094 16.503906 Z M 91.710938 16.503906 " />
                              <path d="M 37.96875 57.25 L 82.085938 57.25 C 83.113281 57.25 83.949219 56.414062 83.949219 55.386719 C 83.949219 54.351562 83.113281 53.519531 82.085938 53.519531 L 37.96875 53.519531 C 36.9375 53.519531 36.105469 54.351562 36.105469 55.386719 C 36.105469 56.414062 36.9375 57.25 37.96875 57.25 Z M 37.96875 57.25 " />
                              <path d="M 37.96875 76.722656 L 82.085938 76.722656 C 83.113281 76.722656 83.949219 75.886719 83.949219 74.855469 C 83.949219 73.824219 83.113281 72.988281 82.085938 72.988281 L 37.96875 72.988281 C 36.9375 72.988281 36.105469 73.824219 36.105469 74.855469 C 36.105469 75.886719 36.9375 76.722656 37.96875 76.722656 Z M 37.96875 76.722656 " />
                              <path d="M 37.96875 96.179688 L 82.085938 96.179688 C 83.113281 96.179688 83.949219 95.339844 83.949219 94.3125 C 83.949219 93.28125 83.113281 92.445312 82.085938 92.445312 L 37.96875 92.445312 C 36.9375 92.445312 36.105469 93.28125 36.105469 94.3125 C 36.105469 95.339844 36.9375 96.179688 37.96875 96.179688 Z M 37.96875 96.179688 " />
                              <path d="M 37.96875 115.632812 L 82.085938 115.632812 C 83.113281 115.632812 83.949219 114.800781 83.949219 113.765625 C 83.949219 112.738281 83.113281 111.90625 82.085938 111.90625 L 37.96875 111.90625 C 36.9375 111.90625 36.105469 112.738281 36.105469 113.765625 C 36.105469 114.800781 36.9375 115.632812 37.96875 115.632812 Z M 37.96875 115.632812 " />
                              <path d="M 19.359375 58.292969 C 19.652344 58.710938 20.101562 58.988281 20.601562 59.066406 L 20.878906 59.066406 C 21.289062 59.066406 21.691406 58.925781 22.023438 58.667969 L 33.910156 49.378906 C 34.804688 48.859375 35.109375 47.71875 34.59375 46.828125 C 34.078125 45.933594 32.9375 45.628906 32.046875 46.148438 C 31.890625 46.234375 31.75 46.347656 31.625 46.476562 L 21.285156 54.566406 L 19.480469 51.992188 C 18.890625 51.148438 17.726562 50.9375 16.882812 51.53125 C 16.039062 52.121094 15.828125 53.285156 16.421875 54.128906 Z M 19.359375 58.292969 " />
                              <path d="M 19.359375 77.476562 C 19.652344 77.894531 20.101562 78.175781 20.601562 78.253906 L 20.878906 78.253906 C 21.289062 78.25 21.691406 78.109375 22.023438 77.851562 L 33.910156 68.558594 C 34.746094 67.949219 34.921875 66.78125 34.308594 65.949219 C 33.699219 65.121094 32.53125 64.941406 31.699219 65.558594 C 31.671875 65.578125 31.640625 65.601562 31.613281 65.625 L 21.285156 73.722656 L 19.480469 71.148438 C 19.019531 70.226562 17.898438 69.851562 16.980469 70.308594 C 16.058594 70.769531 15.683594 71.890625 16.144531 72.816406 C 16.21875 72.960938 16.308594 73.101562 16.421875 73.222656 Z M 19.359375 77.476562 " />
                              <path d="M 19.359375 96.714844 C 19.652344 97.128906 20.101562 97.40625 20.601562 97.484375 L 20.878906 97.484375 C 21.289062 97.484375 21.691406 97.34375 22.023438 97.085938 L 33.910156 87.792969 C 34.746094 87.179688 34.921875 86.011719 34.308594 85.183594 C 33.699219 84.351562 32.53125 84.179688 31.699219 84.789062 C 31.671875 84.8125 31.640625 84.832031 31.613281 84.855469 L 21.273438 92.929688 L 19.472656 90.355469 C 18.878906 89.511719 17.714844 89.304688 16.871094 89.894531 C 16.023438 90.488281 15.820312 91.652344 16.410156 92.496094 Z M 19.359375 96.714844 " />
                              <path d="M 19.359375 116.171875 C 19.652344 116.585938 20.101562 116.867188 20.601562 116.945312 L 20.878906 116.945312 C 21.289062 116.9375 21.691406 116.796875 22.023438 116.546875 L 33.910156 107.25 C 34.785156 106.703125 35.046875 105.546875 34.5 104.675781 C 33.945312 103.800781 32.792969 103.546875 31.921875 104.09375 C 31.816406 104.160156 31.714844 104.238281 31.625 104.328125 L 21.285156 112.414062 L 19.480469 109.839844 C 18.890625 108.992188 17.726562 108.789062 16.882812 109.378906 C 16.039062 109.96875 15.828125 111.132812 16.421875 111.976562 Z M 19.359375 116.171875 " />
                            </g>
                          </svg>
                        </div>
                        <div className="media-body">
                          <h5 className="fw-medium">1,979</h5>
                          <p className="fs-15">Answers</p>
                        </div>
                      </div>
                    </div>
                    {/* end col-lg-4 */}
                    <div className="col-lg-4 responsive-column-half">
                      <div className="media media-card align-items-center shadow-none border border-gray p-3">
                        <div className="icon-element icon-element-sm mr-3 bg-2">
                          <svg
                            className="svg-icon-color-white"
                            width={25}
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 512 512"
                            xmlSpace="preserve"
                          >
                            <g>
                              <g>
                                <g>
                                  <path
                                    d="M405.333,42.667h-44.632c-4.418-12.389-16.147-21.333-30.035-21.333h-32.229C288.417,8.042,272.667,0,256,0
                                                              s-32.417,8.042-42.438,21.333h-32.229c-13.888,0-25.617,8.944-30.035,21.333h-44.631C83.146,42.667,64,61.802,64,85.333v384
                                                              C64,492.865,83.146,512,106.667,512h298.667C428.854,512,448,492.865,448,469.333v-384C448,61.802,428.854,42.667,405.333,42.667
                                                              z M170.667,53.333c0-5.885,4.792-10.667,10.667-10.667h37.917c3.792,0,7.313-2.021,9.208-5.302
                                                              c5.854-10.042,16.146-16.031,27.542-16.031s21.688,5.99,27.542,16.031c1.896,3.281,5.417,5.302,9.208,5.302h37.917
                                                              c5.875,0,10.667,4.781,10.667,10.667V64c0,11.76-9.563,21.333-21.333,21.333H192c-11.771,0-21.333-9.573-21.333-21.333V53.333z
                                                               M426.667,469.333c0,11.76-9.563,21.333-21.333,21.333H106.667c-11.771,0-21.333-9.573-21.333-21.333v-384
                                                              c0-11.76,9.563-21.333,21.333-21.333h42.667c0,23.531,19.146,42.667,42.667,42.667h128c23.521,0,42.667-19.135,42.667-42.667
                                                              h42.667c11.771,0,21.333,9.573,21.333,21.333V469.333z"
                                  />
                                  <path
                                    d="M160,170.667c-17.646,0-32,14.354-32,32c0,17.646,14.354,32,32,32s32-14.354,32-32
                                                              C192,185.021,177.646,170.667,160,170.667z M160,213.333c-5.875,0-10.667-4.781-10.667-10.667
                                                              c0-5.885,4.792-10.667,10.667-10.667s10.667,4.781,10.667,10.667C170.667,208.552,165.875,213.333,160,213.333z"
                                  />
                                  <path
                                    d="M160,277.333c-17.646,0-32,14.354-32,32c0,17.646,14.354,32,32,32s32-14.354,32-32
                                                              C192,291.688,177.646,277.333,160,277.333z M160,320c-5.875,0-10.667-4.781-10.667-10.667c0-5.885,4.792-10.667,10.667-10.667
                                                              s10.667,4.781,10.667,10.667C170.667,315.219,165.875,320,160,320z"
                                  />
                                  <path
                                    d="M160,384c-17.646,0-32,14.354-32,32c0,17.646,14.354,32,32,32s32-14.354,32-32C192,398.354,177.646,384,160,384z
                                                               M160,426.667c-5.875,0-10.667-4.781-10.667-10.667c0-5.885,4.792-10.667,10.667-10.667s10.667,4.781,10.667,10.667
                                                              C170.667,421.885,165.875,426.667,160,426.667z"
                                  />
                                  <path
                                    d="M373.333,192h-128c-5.896,0-10.667,4.771-10.667,10.667c0,5.896,4.771,10.667,10.667,10.667h128
                                                              c5.896,0,10.667-4.771,10.667-10.667C384,196.771,379.229,192,373.333,192z"
                                  />
                                  <path
                                    d="M373.333,298.667h-128c-5.896,0-10.667,4.771-10.667,10.667c0,5.896,4.771,10.667,10.667,10.667h128
                                                              c5.896,0,10.667-4.771,10.667-10.667C384,303.438,379.229,298.667,373.333,298.667z"
                                  />
                                  <path
                                    d="M373.333,405.333h-128c-5.896,0-10.667,4.771-10.667,10.667c0,5.896,4.771,10.667,10.667,10.667h128
                                                              c5.896,0,10.667-4.771,10.667-10.667C384,410.104,379.229,405.333,373.333,405.333z"
                                  />
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                        <div className="media-body">
                          <h5 className="fw-medium">11</h5>
                          <p className="fs-15">Questions</p>
                        </div>
                      </div>
                    </div>
                    {/* end col-lg-4 */}
                    <div className="col-lg-4 responsive-column-half">
                      <div className="media media-card align-items-center shadow-none border border-gray p-3">
                        <div className="icon-element icon-element-sm mr-3 bg-3">
                          <svg
                            className="svg-icon-color-white"
                            viewBox="0 0 24 24"
                            width={25}
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="m11.861 19.066c-.128 0-.256-.049-.354-.146l-6.427-6.427c-.188-.188-.196-.489-.02-.687l4.817-5.396c3.367-3.939 8.85-6.488 13.631-6.407.267.006.482.221.488.488.111 4.784-2.467 10.264-6.416 13.638l-5.387 4.81c-.094.085-.214.127-.332.127zm-5.74-6.946 5.759 5.759 5.043-4.502c3.606-3.082 6.001-7.994 6.075-12.375-4.381.073-9.292 2.468-12.368 6.066z" />
                            <path d="m13.776 22.726c-.048 0-.097-.007-.143-.022-.18-.06-.328-.198-.354-.386l-.686-4.787c-.039-.273.151-.526.424-.566.273-.043.526.15.566.424l.536 3.74c1.752-2.095 2.726-4.751 2.726-7.459 0-.276.224-.5.5-.5s.5.224.5.5c0 3.313-1.342 6.556-3.682 8.895-.1.1-.246.161-.387.161z" />
                            <path d="m6.541 11.412c-.023 0-.047-.001-.071-.005l-4.787-.686c-.188-.027-.345-.158-.404-.339-.059-.18-.011-.379.124-.512 2.373-2.373 5.615-3.715 8.928-3.715.276 0 .5.224.5.5s-.224.5-.5.5c-2.721 0-5.391.983-7.464 2.725l3.745.537c.273.04.463.292.424.566-.037.249-.251.429-.495.429z" />
                            <path d="m17.133 9.366c-.641 0-1.281-.244-1.768-.731-.974-.975-.974-2.561 0-3.536.975-.975 2.561-.975 3.536 0 .974.975.974 2.561 0 3.536-.488.488-1.128.731-1.768.731zm0-3.998c-.384 0-.769.146-1.061.438-.584.585-.584 1.537 0 2.122.585.584 1.537.583 2.122 0 .584-.585.584-1.537 0-2.122-.293-.291-.677-.438-1.061-.438zm1.414 2.914h.01z" />
                            <path d="m.5 24c-.131 0-.258-.051-.354-.146-.13-.13-.178-.321-.125-.497.164-.547 1.633-5.381 2.703-6.451 1.205-1.205 3.166-1.206 4.371 0 1.205 1.205 1.205 3.166 0 4.371-1.07 1.07-5.904 2.539-6.451 2.703-.048.013-.096.02-.144.02zm4.41-6.999c-.536 0-1.071.204-1.479.611-.577.578-1.537 3.159-2.171 5.128 1.968-.634 4.55-1.594 5.127-2.171.815-.815.815-2.142 0-2.957-.407-.407-.942-.611-1.477-.611z" />
                          </svg>
                        </div>
                        <div className="media-body">
                          <h5 className="fw-medium">~46.3m</h5>
                          <p className="fs-15">People reached</p>
                        </div>
                      </div>
                    </div>
                    {/* end col-lg-4 */}
                  </div>
                  {/* end row */}
                </div>
                {/* end user-panel */}
                <div className="user-panel mb-30px">
                  <div className="bg-gray p-3 rounded-rounded">
                    <h3 className="fs-17">
                      Top tags <span>(865)</span>
                    </h3>
                  </div>
                  <div className="vertical-list">
                    <div className="item tags d-flex align-items-center justify-content-between">
                      <div className="flex-grow-1">
                        <a
                          href="#"
                          className="tag-link tag-link-md tag-link-blue mb-0"
                        >
                          git
                        </a>
                        <a href="#" className="ball ball-lg ml-1 gold" />
                      </div>
                      <div className="user-stats d-flex align-items-center">
                        <div className="stat text-center">
                          <strong className="text-black fs-14">58,420</strong>
                          <small className="d-block lh-15">score</small>
                        </div>
                        <div className="stat text-center">
                          <strong className="text-black fs-14">413</strong>
                          <small className="d-block lh-15">posts</small>
                        </div>
                        <div className="stat text-center">
                          <strong className="text-black fs-14">21</strong>
                          <small className="d-block lh-15">posts %</small>
                        </div>
                      </div>
                    </div>
                    {/* end item */}
                    <div className="item tags d-flex align-items-center justify-content-between">
                      <div className="flex-grow-1">
                        <a
                          href="#"
                          className="tag-link tag-link-md tag-link-blue mb-0"
                        >
                          c++
                        </a>
                        <a href="#" className="ball ball-lg ml-1 gold" />
                      </div>
                      <div className="user-stats d-flex align-items-center">
                        <div className="stat text-center">
                          <strong className="text-black fs-14">12,420</strong>
                          <small className="d-block lh-15">score</small>
                        </div>
                        <div className="stat text-center">
                          <strong className="text-black fs-14">313</strong>
                          <small className="d-block lh-15">posts</small>
                        </div>
                        <div className="stat text-center">
                          <strong className="text-black fs-14">21</strong>
                          <small className="d-block lh-15">posts %</small>
                        </div>
                      </div>
                    </div>
                    {/* end item */}
                    <div className="item tags d-flex align-items-center justify-content-between">
                      <div className="flex-grow-1">
                        <a
                          href="#"
                          className="tag-link tag-link-md tag-link-blue mb-0"
                        >
                          c#
                        </a>
                        <a href="#" className="ball ball-lg ml-1 gold" />
                      </div>
                      <div className="user-stats d-flex align-items-center">
                        <div className="stat text-center">
                          <strong className="text-black fs-14">3,049</strong>
                          <small className="d-block lh-15">score</small>
                        </div>
                        <div className="stat text-center">
                          <strong className="text-black fs-14">244</strong>
                          <small className="d-block lh-15">posts</small>
                        </div>
                        <div className="stat text-center">
                          <strong className="text-black fs-14">6</strong>
                          <small className="d-block lh-15">posts %</small>
                        </div>
                      </div>
                    </div>
                    {/* end item */}
                    <div className="item tags d-flex align-items-center justify-content-between">
                      <div className="flex-grow-1">
                        <a
                          href="#"
                          className="tag-link tag-link-md tag-link-blue mb-0"
                        >
                          stl
                        </a>
                        <a href="#" className="ball ball-lg ml-1 silver" />
                      </div>
                      <div className="user-stats d-flex align-items-center">
                        <div className="stat text-center">
                          <strong className="text-black fs-14">913</strong>
                          <small className="d-block lh-15">score</small>
                        </div>
                        <div className="stat text-center">
                          <strong className="text-black fs-14">60</strong>
                          <small className="d-block lh-15">posts</small>
                        </div>
                        <div className="stat text-center">
                          <strong className="text-black fs-14">5</strong>
                          <small className="d-block lh-15">posts %</small>
                        </div>
                      </div>
                    </div>
                    {/* end item */}
                    <div className="item tags d-flex align-items-center justify-content-between">
                      <div className="flex-grow-1">
                        <a
                          href="#"
                          className="tag-link tag-link-md tag-link-blue mb-0"
                        >
                          pointers
                        </a>
                        <a href="#" className="ball ball-lg ml-1 silver" />
                      </div>
                      <div className="user-stats d-flex align-items-center">
                        <div className="stat text-center">
                          <strong className="text-black fs-14">824</strong>
                          <small className="d-block lh-15">score</small>
                        </div>
                        <div className="stat text-center">
                          <strong className="text-black fs-14">100</strong>
                          <small className="d-block lh-15">posts</small>
                        </div>
                        <div className="stat text-center">
                          <strong className="text-black fs-14">3</strong>
                          <small className="d-block lh-15">posts %</small>
                        </div>
                      </div>
                    </div>
                    {/* end item */}
                    <div className="item tags d-flex align-items-center justify-content-between">
                      <div className="flex-grow-1">
                        <a
                          href="#"
                          className="tag-link tag-link-md tag-link-blue mb-0"
                        >
                          arrays
                        </a>
                        <a href="#" className="ball ball-lg ml-1" />
                      </div>
                      <div className="user-stats d-flex align-items-center">
                        <div className="stat text-center">
                          <strong className="text-black fs-14">777</strong>
                          <small className="d-block lh-15">score</small>
                        </div>
                        <div className="stat text-center">
                          <strong className="text-black fs-14">63</strong>
                          <small className="d-block lh-15">posts</small>
                        </div>
                        <div className="stat text-center">
                          <strong className="text-black fs-14">3</strong>
                          <small className="d-block lh-15">posts %</small>
                        </div>
                      </div>
                    </div>
                    {/* end item */}
                    <div className="view-more pt-3 px-3">
                      <a href="#" className="btn-text fs-15">
                        View all tags{" "}
                        <i className="la la-arrow-right icon ml-1" />
                      </a>
                    </div>
                  </div>
                  {/* end vertical-list */}
                </div>
                {/* end user-panel */}
                <div className="user-panel mb-30px">
                  <div className="bg-gray p-3 rounded-rounded d-flex align-items-center justify-content-between">
                    <h3 className="fs-17">
                      Top posts <span>(865)</span>
                    </h3>
                    <div className="filter-option-box w-100px lh-1">
                      <select className="select-container">
                        <option selected="selected" value="Votes">
                          Votes
                        </option>
                        <option value="Newest">Newest</option>
                      </select>
                    </div>
                  </div>
                  <div className="vertical-list">
                    <div className="item p-0">
                      <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                        <div className="votes py-2 answered-accepted">
                          <div
                            className="vote-block d-flex align-items-center justify-content-between"
                            title="Votes"
                          >
                            <span className="vote-counts">6475</span>
                            <span className="vote-icon" />
                          </div>
                          <div
                            className="answer-block d-flex align-items-center justify-content-between"
                            title="Answers"
                          >
                            <span className="vote-counts">22</span>
                            <span className="answer-icon" />
                          </div>
                        </div>
                        <div className="media-body">
                          <h5>
                            <a href="question-details.html">
                              How to make Git “forget” about a file that was
                              tracked but is now in .gitignore?
                            </a>
                          </h5>
                          <small className="meta">
                            <span>May 12 '20</span>
                          </small>
                        </div>
                      </div>
                      {/* end media */}
                    </div>
                    {/* end item */}
                    <div className="item p-0">
                      <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                        <div className="votes py-2 answered-accepted">
                          <div
                            className="vote-block d-flex align-items-center justify-content-between"
                            title="Votes"
                          >
                            <span className="vote-counts">4711</span>
                            <span className="vote-icon" />
                          </div>
                          <div
                            className="answer-block d-flex align-items-center justify-content-between"
                            title="Answers"
                          >
                            <span className="vote-counts">-2</span>
                            <span className="answer-icon" />
                          </div>
                        </div>
                        <div className="media-body">
                          <h5>
                            <a href="question-details.html">
                              Undoing a git rebase
                            </a>
                          </h5>
                          <small className="meta">
                            <span>May 12 '20</span>
                          </small>
                        </div>
                      </div>
                      {/* end media */}
                    </div>
                    {/* end item */}
                    <div className="item p-0">
                      <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                        <div className="votes py-2 answered-accepted">
                          <div
                            className="vote-block d-flex align-items-center justify-content-between"
                            title="Votes"
                          >
                            <span className="vote-counts">4448</span>
                            <span className="vote-icon" />
                          </div>
                          <div
                            className="answer-block d-flex align-items-center justify-content-between"
                            title="Answers"
                          >
                            <span className="vote-counts">11</span>
                            <span className="answer-icon" />
                          </div>
                        </div>
                        <div className="media-body">
                          <h5>
                            <a href="question-details.html">
                              Difference between “git add -A” and “git add .”
                            </a>
                          </h5>
                          <small className="meta">
                            <span>May 12 '20</span>
                          </small>
                        </div>
                      </div>
                      {/* end media */}
                    </div>
                    {/* end item */}
                    <div className="item p-0">
                      <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                        <div className="votes py-2 answered-accepted">
                          <div
                            className="vote-block d-flex align-items-center justify-content-between"
                            title="Votes"
                          >
                            <span className="vote-counts">3274</span>
                            <span className="vote-icon" />
                          </div>
                          <div
                            className="answer-block d-flex align-items-center justify-content-between"
                            title="Answers"
                          >
                            <span className="vote-counts">33</span>
                            <span className="answer-icon" />
                          </div>
                        </div>
                        <div className="media-body">
                          <h5>
                            <a href="question-details.html">
                              How to find and restore a deleted file in a Git
                              repository
                            </a>
                          </h5>
                          <small className="meta">
                            <span>May 12 '20</span>
                          </small>
                        </div>
                      </div>
                      {/* end media */}
                    </div>
                    {/* end item */}
                    <div className="item p-0">
                      <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                        <div className="votes py-2 answered-accepted">
                          <div
                            className="vote-block d-flex align-items-center justify-content-between"
                            title="Votes"
                          >
                            <span className="vote-counts">2822</span>
                            <span className="vote-icon" />
                          </div>
                          <div
                            className="answer-block d-flex align-items-center justify-content-between"
                            title="Answers"
                          >
                            <span className="vote-counts">11</span>
                            <span className="answer-icon" />
                          </div>
                        </div>
                        <div className="media-body">
                          <h5>
                            <a href="question-details.html">
                              How to undo “git commit --amend” done instead of
                              “git commit”
                            </a>
                          </h5>
                          <small className="meta">
                            <span>May 12 '20</span>
                          </small>
                        </div>
                      </div>
                      {/* end media */}
                    </div>
                    {/* end item */}
                    <div className="item p-0">
                      <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                        <div className="votes py-2 answered-accepted">
                          <div
                            className="vote-block d-flex align-items-center justify-content-between"
                            title="Votes"
                          >
                            <span className="vote-counts">2741</span>
                            <span className="vote-icon" />
                          </div>
                          <div
                            className="answer-block d-flex align-items-center justify-content-between"
                            title="Answers"
                          >
                            <span className="vote-counts">33</span>
                            <span className="answer-icon" />
                          </div>
                        </div>
                        <div className="media-body">
                          <h5>
                            <a href="question-details.html">
                              Branch from a previous commit using Git
                            </a>
                          </h5>
                          <small className="meta">
                            <span>May 12 '20</span>
                          </small>
                        </div>
                      </div>
                      {/* end media */}
                    </div>
                    {/* end item */}
                    <div className="view-more pt-3 px-3">
                      <a href="#" className="btn-text fs-15">
                        View all questions and answers{" "}
                        <i className="la la-arrow-right icon ml-1" />
                      </a>
                    </div>
                  </div>
                  {/* end vertical-list */}
                </div>
                {/* end user-panel */}
                <div className="user-panel mb-30px">
                  <div className="bg-gray p-3 rounded-rounded mb-3">
                    <h3 className="fs-17">
                      Rarest badges <span>(1,328)</span>
                    </h3>
                  </div>
                  <div className="badge-top-list">
                    <div className="badge-top badge-top-gold">
                      <div className="badge-top-name">
                        <span className="fs-20 lh-18 fw-regular d-block">
                          91
                        </span>
                        <strong>Gold</strong>
                      </div>
                      {/* end badge-top-name */}
                      <div className="badge-top-details flex-grow-1">
                        <div className="vertical-list">
                          <div className="item tags">
                            <a href="#" className="badge badge-md badge-gray">
                              <span className="ball gold" /> git
                            </a>
                            <span className="fs-12 pl-1 font-italic">
                              Jul 29 '10
                            </span>
                          </div>
                          {/* end item */}
                          <div className="item tags">
                            <a href="#" className="badge badge-md badge-gray">
                              <span className="ball gold" /> c#
                            </a>
                            <span className="fs-12 pl-1 font-italic">
                              Feb 28 '11
                            </span>
                          </div>
                          {/* end item */}
                          <div className="item tags border-bottom-0">
                            <a href="#" className="badge badge-md badge-dark">
                              <span className="ball gold" /> Legendary
                            </a>
                            <span className="fs-12 pl-1 font-italic">
                              Jan 11 '12
                            </span>
                          </div>
                          {/* end item */}
                        </div>
                        {/* end vertical-list */}
                      </div>
                      {/* end badge-top-details */}
                    </div>
                    {/* end badge-top */}
                    <div className="badge-top badge-top-silver">
                      <div className="badge-top-name text-gray">
                        <span className="fs-20 lh-18 fw-regular d-block">
                          560
                        </span>
                        <strong>silver</strong>
                      </div>
                      {/* end badge-top-name */}
                      <div className="badge-top-details flex-grow-1">
                        <div className="vertical-list">
                          <div className="item tags">
                            <a href="#" className="badge badge-md badge-gray">
                              <span className="ball silver" /> stl
                            </a>
                            <span className="fs-12 pl-1 font-italic">
                              Dec 13 '12
                            </span>
                          </div>
                          {/* end item */}
                          <div className="item tags">
                            <a href="#" className="badge badge-md badge-gray">
                              <span className="ball silver" /> pointers
                            </a>
                            <span className="fs-12 pl-1 font-italic">
                              May 5 '12
                            </span>
                          </div>
                          {/* end item */}
                          <div className="item tags border-bottom-0">
                            <a href="#" className="badge badge-md badge-dark">
                              <span className="ball silver" /> Epic
                            </a>
                            <span className="fs-12 pl-1 font-italic">
                              Mar 24 '10
                            </span>
                          </div>
                          {/* end item */}
                        </div>
                        {/* end vertical-list */}
                      </div>
                      {/* end badge-top-details */}
                    </div>
                    {/* end badge-top */}
                    <div className="badge-top badge-top-bronze">
                      <div className="badge-top-name">
                        <span className="fs-20 lh-18 fw-regular d-block">
                          632
                        </span>
                        <strong>bronze</strong>
                      </div>
                      {/* end badge-top-name */}
                      <div className="badge-top-details flex-grow-1">
                        <div className="vertical-list">
                          <div className="item tags">
                            <a href="#" className="badge badge-md badge-gray">
                              <span className="ball" /> standards
                            </a>
                            <span className="fs-12 pl-1 font-italic">
                              Jun 10 '12
                            </span>
                          </div>
                          {/* end item */}
                          <div className="item tags">
                            <a href="#" className="badge badge-md badge-gray">
                              <span className="ball" /> branch
                            </a>
                            <span className="fs-12 pl-1 font-italic">
                              Apr 3 '13
                            </span>
                          </div>
                          {/* end item */}
                          <div className="item tags border-bottom-0">
                            <a href="#" className="badge badge-md badge-gray">
                              <span className="ball" /> namespaces
                            </a>
                            <span className="fs-12 pl-1 font-italic">
                              Jul 7 '12
                            </span>
                          </div>
                          {/* end item */}
                        </div>
                        {/* end vertical-list */}
                      </div>
                      {/* end badge-top-details */}
                    </div>
                    {/* end badge-top */}
                    <div className="view-more pt-3 px-3">
                      <a href="#" className="btn-text fs-15">
                        View all badges{" "}
                        <i className="la la-arrow-right icon ml-1" />
                      </a>
                    </div>
                  </div>
                  {/* end vertical-list */}
                </div>
                {/* end user-panel */}
              </div>
              {/* end user-panel-main-bar */}
            </div>
            {/* end tab-pane */}
            <div
              className="tab-pane fade"
              id="user-activity"
              role="tabpanel"
              aria-labelledby="user-activity-tab"
            >
              <div className="user-panel-main-bar">
                <div className="user-panel mb-40px">
                  <div className="bg-gray p-3 rounded-rounded mb-3">
                    <h3 className="fs-17">Reputation</h3>
                  </div>
                  <div className="media media-card align-items-center shadow-none border border-gray p-3 text-center">
                    <div className="media-body">
                      <h5 className="fw-medium">224,110</h5>
                      <p className="fs-15">top 0.01% overall</p>
                    </div>
                  </div>
                  <div className="user-stats d-flex flex-wrap align-items-center">
                    <div className="stat flex-grow-1 my-1">
                      <h4 className="fs-15 text-gray pb-2">Next tag badge:</h4>
                      <span className="badge badge-md badge-gray">
                        <span className="ball" /> function-pointers
                      </span>
                    </div>
                    <div className="stat text-center mr-3 my-1">
                      <small className="d-block lh-15 pb-1">
                        149/100 score
                      </small>
                      <div className="progress progress-slim bg-gray-2">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: "100%" }}
                          aria-valuenow={100}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    <div className="stat text-center ml-0 my-1">
                      <small className="d-block lh-15 pb-1">
                        19/20 answers
                      </small>
                      <div className="progress progress-slim bg-gray-2">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: "95%" }}
                          aria-valuenow={95}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* end user-panel */}
                <div className="user-panel mb-40px">
                  <div className="bg-gray p-3 rounded-rounded mb-3">
                    <h3 className="fs-17">Badges</h3>
                  </div>
                  <div className="badge-stats d-flex align-items-center mb-4 text-center">
                    <div className="stat flex-grow-1">
                      <span
                        className="badge d-block mr-2 badge-md badge-gold"
                        title="Gold"
                      >
                        <span className="ball gold" /> 91
                      </span>
                    </div>
                    <div className="stat flex-grow-1">
                      <span
                        className="badge d-block mr-2 badge-md badge-gray"
                        title="Silver"
                      >
                        <span className="ball silver" /> 560
                      </span>
                    </div>
                    <div className="stat flex-grow-1">
                      <span
                        className="badge d-block badge-md badge-bronze"
                        title="Bronze"
                      >
                        <span className="ball" /> 632
                      </span>
                    </div>
                  </div>
                  {/* end badge-stats */}
                  <div className="user-stats d-flex align-items-center">
                    <div className="stat flex-grow-1">
                      <h4 className="fs-15 text-gray pb-2">Newest</h4>
                      <a href="#" className="badge badge-md badge-dark">
                        <span className="ball silver" /> Good Answer
                      </a>
                    </div>
                    <div className="stat flex-grow-1">
                      <div className="d-flex align-items-center justify-content-between pb-2">
                        <h4 className="fs-15 text-gray">Next badge</h4>
                        <span className="count fs-14">72/80</span>
                      </div>
                      <div className="progress progress-fat">
                        <div
                          className="progress-bar bg-gray-2"
                          role="progressbar"
                          style={{ width: "90%" }}
                          aria-valuenow={90}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <span className="text-black">Deputy</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end user-panel */}
                <div className="user-panel mb-10px">
                  <div className="bg-gray p-3 rounded-rounded mb-3">
                    <h3 className="fs-17">Impact</h3>
                  </div>
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="media media-card align-items-center shadow-none border border-gray p-3 text-center">
                        <div className="media-body">
                          <h5 className="fw-medium">~46.3m</h5>
                          <p className="fs-15">people reached</p>
                        </div>
                      </div>
                    </div>
                    {/* end col-lg-3 */}
                    <div className="col-lg-3">
                      <div className="media media-card align-items-center shadow-none border border-gray p-3 text-center">
                        <div className="media-body">
                          <h5 className="fw-medium">122</h5>
                          <p className="fs-15">posts edited</p>
                        </div>
                      </div>
                    </div>
                    {/* end col-lg-3 */}
                    <div className="col-lg-3">
                      <div className="media media-card align-items-center shadow-none border border-gray p-3 text-center">
                        <div className="media-body">
                          <h5 className="fw-medium">72</h5>
                          <p className="fs-15">helpful flags</p>
                        </div>
                      </div>
                    </div>
                    {/* end col-lg-3 */}
                    <div className="col-lg-3">
                      <div className="media media-card align-items-center shadow-none border border-gray p-3 text-center">
                        <div className="media-body">
                          <h5 className="fw-medium">1,351</h5>
                          <p className="fs-15">votes cast</p>
                        </div>
                      </div>
                    </div>
                    {/* end col-lg-3 */}
                  </div>
                  {/* end row */}
                </div>
                {/* end user-panel */}
                <div className="user-panel mb-40px">
                  <div className="bg-gray p-3 rounded-rounded">
                    <div className="filter-option-box w-20">
                      <select className="select-container">
                        <option value="summary" selected="">
                          Summary
                        </option>
                        <option value="answers">Answers</option>
                        <option value="questions">Questions</option>
                        <option value="tags">Tags</option>
                        <option value="badges">Badges</option>
                        <option value="bookmarks">Bookmarks</option>
                        <option value="bounties">Bounties</option>
                        <option value="reputation">Reputation</option>
                        <option value="activity">All actions</option>
                      </select>
                    </div>
                  </div>
                  <div className="summary-panel">
                    <div className="border-bottom border-bottom-gray p-3 d-flex align-items-center justify-content-between">
                      <h4 className="fs-15 fw-regular">
                        Answers <span>(1,979)</span>
                      </h4>
                      <div className="filter-option-box flex-grow-1 d-flex align-items-center justify-content-end lh-1">
                        <label className="fs-14 fw-medium mr-2 mb-0">
                          Sort
                        </label>
                        <div className="w-100px">
                          <select className="select-container">
                            <option selected="selected" value="Votes">
                              Votes
                            </option>
                            <option value="Activity">Activity</option>
                            <option value="Newest">Newest</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="vertical-list">
                      <div className="item post p-0">
                        <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                          <div className="votes answered-accepted">
                            <div className="vote-block" title="Votes">
                              <span className="vote-counts">999k</span>
                            </div>
                          </div>
                          <div className="media-body">
                            <h5 className="fs-15">
                              <a href="question-details.html">
                                How to make Git “forget” about a file that was
                                tracked but is now in .gitignore?
                              </a>
                            </h5>
                          </div>
                        </div>
                        {/* end media */}
                      </div>
                      {/* end item */}
                      <div className="item post p-0">
                        <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                          <div className="votes answered-accepted">
                            <div className="vote-block" title="Votes">
                              <span className="vote-counts">4714</span>
                            </div>
                          </div>
                          <div className="media-body">
                            <h5 className="fs-15">
                              <a href="question-details.html">
                                Undoing a git rebase
                              </a>
                            </h5>
                          </div>
                        </div>
                        {/* end media */}
                      </div>
                      {/* end item */}
                      <div className="item post p-0">
                        <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                          <div className="votes answered-accepted">
                            <div className="vote-block" title="Votes">
                              <span className="vote-counts">4448</span>
                            </div>
                          </div>
                          <div className="media-body">
                            <h5 className="fs-15">
                              <a href="question-details.html">
                                Difference between “git add -A” and “git add .”
                              </a>
                            </h5>
                          </div>
                        </div>
                        {/* end media */}
                      </div>
                      {/* end item */}
                      <div className="item post p-0">
                        <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                          <div className="votes answered-accepted">
                            <div className="vote-block" title="Votes">
                              <span className="vote-counts">3275</span>
                            </div>
                          </div>
                          <div className="media-body">
                            <h5 className="fs-15">
                              <a href="question-details.html">
                                How to find and restore a deleted file in a Git
                                repository
                              </a>
                            </h5>
                          </div>
                        </div>
                        {/* end media */}
                      </div>
                      {/* end item */}
                      <div className="item post p-0">
                        <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                          <div className="votes answered-accepted">
                            <div className="vote-block" title="Votes">
                              <span className="vote-counts">2822</span>
                            </div>
                          </div>
                          <div className="media-body">
                            <h5 className="fs-15">
                              <a href="question-details.html">
                                Branch from a previous commit using Git
                              </a>
                            </h5>
                          </div>
                        </div>
                        {/* end media */}
                      </div>
                      {/* end item */}
                      <div className="pager pt-30px">
                        <nav aria-label="Page navigation example">
                          <ul className="pagination generic-pagination generic--pagination">
                            <li className="page-item">
                              <a
                                className="page-link"
                                href="#"
                                aria-label="Previous"
                              >
                                <span aria-hidden="true">
                                  <i className="la la-arrow-left" />
                                </span>
                                <span className="sr-only">Previous</span>
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                1
                              </a>
                            </li>
                            <li className="page-item active">
                              <a className="page-link" href="#">
                                2
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                3
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                4
                              </a>
                            </li>
                            <li className="page-item">
                              <a
                                className="page-link"
                                href="#"
                                aria-label="Next"
                              >
                                <span aria-hidden="true">
                                  <i className="la la-arrow-right" />
                                </span>
                                <span className="sr-only">Next</span>
                              </a>
                            </li>
                          </ul>
                        </nav>
                        <p className="fs-13 pt-2">
                          Showing 1-5 of (1,979) results
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* end summary-panel */}
                </div>
                {/* end user-panel */}
                <div className="user-panel mb-40px">
                  <div className="bg-gray p-3 rounded-rounded d-flex align-items-center justify-content-between">
                    <h3 className="fs-17">
                      Questions <span>(50)</span>
                    </h3>
                    <div className="filter-option-box flex-grow-1 d-flex align-items-center justify-content-end lh-1">
                      <label className="fs-14 fw-medium mr-2 mb-0">Sort</label>
                      <div className="w-100px">
                        <select className="select-container">
                          <option selected="selected" value="Votes">
                            Votes
                          </option>
                          <option value="Activity">Activity</option>
                          <option value="Newest">Newest</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="summary-panel">
                    <div className="vertical-list">
                      <div className="item post p-0">
                        <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                          <div className="votes answered-accepted">
                            <div className="vote-block" title="Votes">
                              <span className="vote-counts">2653</span>
                            </div>
                          </div>
                          <div className="media-body">
                            <h5 className="fs-15">
                              <a href="question-details.html">
                                What are the correct version numbers for C#?
                              </a>
                            </h5>
                          </div>
                        </div>
                        {/* end media */}
                      </div>
                      {/* end item */}
                      <div className="item post p-0">
                        <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                          <div className="votes">
                            <div className="vote-block" title="Votes">
                              <span className="vote-counts">563</span>
                            </div>
                          </div>
                          <div className="media-body">
                            <h5 className="fs-15">
                              <a href="question-details.html">
                                Curious null-coalescing operator custom implicit
                                conversion behaviour
                              </a>
                            </h5>
                          </div>
                        </div>
                        {/* end media */}
                      </div>
                      {/* end item */}
                      <div className="item post p-0">
                        <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                          <div className="votes answered-accepted">
                            <div className="vote-block" title="Votes">
                              <span className="vote-counts">363</span>
                            </div>
                          </div>
                          <div className="media-body">
                            <h5 className="fs-15">
                              <a href="question-details.html">
                                What's your most controversial programming
                                opinion?
                              </a>
                            </h5>
                          </div>
                        </div>
                        {/* end media */}
                      </div>
                      {/* end item */}
                      <div className="item post p-0">
                        <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                          <div className="votes answered-accepted">
                            <div className="vote-block" title="Votes">
                              <span className="vote-counts">336</span>
                            </div>
                          </div>
                          <div className="media-body">
                            <h5 className="fs-15">
                              <a href="question-details.html">
                                Performance surprise with “as” and nullable
                                types
                              </a>
                            </h5>
                          </div>
                        </div>
                        {/* end media */}
                      </div>
                      {/* end item */}
                      <div className="item post p-0">
                        <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                          <div className="votes answered-accepted">
                            <div className="vote-block" title="Votes">
                              <span className="vote-counts">322</span>
                            </div>
                          </div>
                          <div className="media-body">
                            <h5 className="fs-15">
                              <a href="question-details.html">
                                What's the strangest corner case you've seen in
                                C# or .NET? [closed]
                              </a>
                            </h5>
                          </div>
                        </div>
                        {/* end media */}
                      </div>
                      {/* end item */}
                      <div className="pager pt-30px">
                        <nav aria-label="Page navigation example">
                          <ul className="pagination generic-pagination generic--pagination">
                            <li className="page-item">
                              <a
                                className="page-link"
                                href="#"
                                aria-label="Previous"
                              >
                                <span aria-hidden="true">
                                  <i className="la la-arrow-left" />
                                </span>
                                <span className="sr-only">Previous</span>
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                1
                              </a>
                            </li>
                            <li className="page-item active">
                              <a className="page-link" href="#">
                                2
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                3
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                4
                              </a>
                            </li>
                            <li className="page-item">
                              <a
                                className="page-link"
                                href="#"
                                aria-label="Next"
                              >
                                <span aria-hidden="true">
                                  <i className="la la-arrow-right" />
                                </span>
                                <span className="sr-only">Next</span>
                              </a>
                            </li>
                          </ul>
                        </nav>
                        <p className="fs-13 pt-2">
                          Showing 1-5 of (50) results
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* end summary-panel */}
                </div>
                {/* end user-panel */}
                <div className="user-panel mb-40px">
                  <div className="bg-gray p-3 rounded-rounded">
                    <h3 className="fs-17">
                      Tags <span>(4,654)</span>
                    </h3>
                  </div>
                  <div className="summary-panel">
                    <div className="vertical-list">
                      <div className="item tags d-flex align-items-center">
                        <span className="tag-stat mr-2 fs-14">244k</span>
                        <div className="flex-grow-1">
                          <a
                            href="#"
                            className="tag-link tag-link-md tag-link-blue mb-0 lh-20"
                          >
                            c#
                          </a>
                        </div>
                        <span className="item-multiplier fs-14">
                          <span>×</span>
                          <span>19616</span>
                        </span>
                      </div>
                      {/* item */}
                      <div className="item tags d-flex align-items-center">
                        <span className="tag-stat mr-2 fs-14">146k</span>
                        <div className="flex-grow-1">
                          <a
                            href="#"
                            className="tag-link tag-link-md tag-link-blue mb-0 lh-20"
                          >
                            java
                          </a>
                        </div>
                        <span className="item-multiplier fs-14">
                          <span>×</span>
                          <span>10512</span>
                        </span>
                      </div>
                      {/* item */}
                      <div className="item tags d-flex align-items-center">
                        <span className="tag-stat mr-2 fs-14">89k</span>
                        <div className="flex-grow-1">
                          <a
                            href="#"
                            className="tag-link tag-link-md tag-link-blue mb-0 lh-20"
                          >
                            .net
                          </a>
                        </div>
                        <span className="item-multiplier fs-14">
                          <span>×</span>
                          <span>5569</span>
                        </span>
                      </div>
                      {/* item */}
                      <div className="item tags d-flex align-items-center">
                        <span className="tag-stat mr-2 fs-14">34k</span>
                        <div className="flex-grow-1">
                          <a
                            href="#"
                            className="tag-link tag-link-md tag-link-blue mb-0 lh-20"
                          >
                            linq
                          </a>
                        </div>
                        <span className="item-multiplier fs-14">
                          <span>×</span>
                          <span>2982</span>
                        </span>
                      </div>
                      {/* item */}
                      <div className="item tags d-flex align-items-center">
                        <span className="tag-stat mr-2 fs-14">23k</span>
                        <div className="flex-grow-1">
                          <a
                            href="#"
                            className="tag-link tag-link-md tag-link-blue mb-0 lh-20"
                          >
                            string
                          </a>
                        </div>
                        <span className="item-multiplier fs-14">
                          <span>×</span>
                          <span>999</span>
                        </span>
                      </div>
                      {/* item */}
                      <div className="pager pt-30px">
                        <nav aria-label="Page navigation example">
                          <ul className="pagination generic-pagination generic--pagination">
                            <li className="page-item">
                              <a
                                className="page-link"
                                href="#"
                                aria-label="Previous"
                              >
                                <span aria-hidden="true">
                                  <i className="la la-arrow-left" />
                                </span>
                                <span className="sr-only">Previous</span>
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                1
                              </a>
                            </li>
                            <li className="page-item active">
                              <a className="page-link" href="#">
                                2
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                3
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                4
                              </a>
                            </li>
                            <li className="page-item">
                              <a
                                className="page-link"
                                href="#"
                                aria-label="Next"
                              >
                                <span aria-hidden="true">
                                  <i className="la la-arrow-right" />
                                </span>
                                <span className="sr-only">Next</span>
                              </a>
                            </li>
                          </ul>
                        </nav>
                        <p className="fs-13 pt-2">
                          Showing 1-5 of (4,654) results
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* end summary-panel */}
                </div>
                {/* end user-panel */}
                <div className="user-panel mb-40px">
                  <div className="bg-gray p-3 rounded-rounded d-flex align-items-center justify-content-between">
                    <h3 className="fs-17">
                      Badges <span>(765)</span>
                    </h3>
                    <div className="filter-option-box flex-grow-1 d-flex align-items-center justify-content-end lh-1">
                      <label className="fs-14 fw-medium mr-2 mb-0">Sort</label>
                      <div className="w-100px">
                        <select className="select-container">
                          <option selected="selected" value="Recent">
                            Recent
                          </option>
                          <option value="Class">Class</option>
                          <option value="Name">Name</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="summary-panel">
                    <div className="vertical-list">
                      <div className="item">
                        <a
                          href="#"
                          className="badge badge-md badge-dark d-inline-flex align-items-center mr-1"
                        >
                          <span className="ball silver" /> Good Answer
                        </a>
                        <span className="item-multiplier fs-14 fw-medium">
                          <span>×</span>
                          <span>4142</span>
                        </span>
                      </div>
                      {/* item */}
                      <div className="item">
                        <a
                          href="#"
                          className="badge badge-md badge-dark d-inline-flex align-items-center mr-1"
                        >
                          <span className="ball" /> Nice Answer
                        </a>
                        <span className="item-multiplier fs-14 fw-medium">
                          <span>×</span>
                          <span>586</span>
                        </span>
                      </div>
                      {/* item */}
                      <div className="item">
                        <a
                          href="#"
                          className="badge badge-md badge-dark d-inline-flex align-items-center mr-1"
                        >
                          <span className="ball gold" /> Great Answer
                        </a>
                        <span className="item-multiplier fs-14 fw-medium">
                          <span>×</span>
                          <span>1310</span>
                        </span>
                      </div>
                      {/* item */}
                      <div className="item">
                        <a
                          href="#"
                          className="badge badge-md badge-dark d-inline-flex align-items-center mr-1"
                        >
                          <span className="ball silver" /> Enlightened
                        </a>
                        <span className="item-multiplier fs-14 fw-medium">
                          <span>×</span>
                          <span>2863</span>
                        </span>
                      </div>
                      {/* item */}
                      <div className="item">
                        <a
                          href="#"
                          className="badge badge-md badge-dark d-inline-flex align-items-center mr-1"
                        >
                          <span className="ball silver" /> Guru
                        </a>
                        <span className="item-multiplier fs-14 fw-medium">
                          <span>×</span>
                          <span>131</span>
                        </span>
                      </div>
                      {/* item */}
                      <div className="pager pt-30px">
                        <nav aria-label="Page navigation example">
                          <ul className="pagination generic-pagination generic--pagination">
                            <li className="page-item">
                              <a
                                className="page-link"
                                href="#"
                                aria-label="Previous"
                              >
                                <span aria-hidden="true">
                                  <i className="la la-arrow-left" />
                                </span>
                                <span className="sr-only">Previous</span>
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                1
                              </a>
                            </li>
                            <li className="page-item active">
                              <a className="page-link" href="#">
                                2
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                3
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                4
                              </a>
                            </li>
                            <li className="page-item">
                              <a
                                className="page-link"
                                href="#"
                                aria-label="Next"
                              >
                                <span aria-hidden="true">
                                  <i className="la la-arrow-right" />
                                </span>
                                <span className="sr-only">Next</span>
                              </a>
                            </li>
                          </ul>
                        </nav>
                        <p className="fs-13 pt-2">
                          Showing 1-5 of (765) results
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* end summary-panel */}
                </div>
                {/* end user-panel */}
                <div className="user-panel mb-40px">
                  <div className="bg-gray p-3 rounded-rounded d-flex align-items-center justify-content-between">
                    <h3 className="fs-17">
                      Followed posts <span>(20)</span>
                    </h3>
                    <div className="filter-option-box flex-grow-1 d-flex align-items-center justify-content-end lh-1">
                      <label className="fs-14 fw-medium mr-2 mb-0">Sort</label>
                      <div className="w-100px">
                        <select className="select-container">
                          <option value="Votes">Votes</option>
                          <option selected="selected" value="Activity">
                            Activity
                          </option>
                          <option value="Newest">Newest</option>
                          <option value="Views">Views</option>
                          <option value="Added">Added</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="summary-panel">
                    <div className="vertical-list">
                      <div className="item post p-0">
                        <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                          <svg
                            aria-hidden="true"
                            className="svg-icon ml-3 icon-question"
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                          >
                            <path
                              fill="#7d848c"
                              d="M4 14l-3 3V3c0-1.1.9-2 2-2h12a2 2 0 012 2v9a2 2 0 01-2 2H4zm7.75-3.97c.32-.37.55-.75.7-1.15.18-.51.28-1.11.28-1.79 0-1.29-.35-2.29-1.03-3a3.66 3.66 0 00-2.78-1.07 3.7 3.7 0 00-2.8 1.07c-.73.82-1.1 1.9-1.03 3 0 1.29.35 2.29 1.03 3a3.76 3.76 0 002.85 1.07c.62 0 1.2-.11 1.71-.34.65.44 1 .68 1.06.7.23.13.46.23.7.3l.59-1.13a5.2 5.2 0 01-1.28-.66zm-1.27-.9a5.4 5.4 0 00-1.5-.8l-.45.9c.33.12.66.29.98.5-.2.07-.42.11-.65.11-.61 0-1.12-.23-1.52-.68-.4-.46-.6-1.15-.6-2.07 0-.9.2-1.58.6-2.04a2 2 0 011.57-.67 2 2 0 011.58.67c.4.45.6 1.13.6 2.04 0 .44-.05.83-.16 1.17-.1.34-.25.63-.45.87z"
                            />
                          </svg>
                          <div className="votes answered-accepted">
                            <div className="vote-block" title="Votes">
                              <span className="vote-counts">1203</span>
                            </div>
                          </div>
                          <div className="media-body">
                            <h5 className="fs-15">
                              <a href="question-details.html">
                                git: undo all working dir changes including new
                                files
                              </a>
                            </h5>
                          </div>
                        </div>
                        {/* end media */}
                      </div>
                      {/* end item */}
                      <div className="item post p-0">
                        <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                          <svg
                            aria-hidden="true"
                            className="svg-icon ml-3 icon-answer"
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                          >
                            <path
                              fill="#7d848c"
                              d="M14 14H3a2 2 0 01-2-2V3c0-1.1.9-2 2-2h12a2 2 0 012 2v14l-3-3zm-1.02-3L9.82 3H8.14l-3.06 8h1.68l.65-1.79h3.15l.69 1.79h1.73zm-2.93-3.12H7.9l1.06-2.92 1.09 2.92z"
                            />
                          </svg>
                          <div className="votes">
                            <div className="vote-block" title="Votes">
                              <span className="vote-counts">1117</span>
                            </div>
                          </div>
                          <div className="media-body">
                            <h5 className="fs-15">
                              <a href="question-details.html">
                                How to revert uncommitted changes including
                                files and folders?
                              </a>
                            </h5>
                          </div>
                        </div>
                        {/* end media */}
                      </div>
                      {/* end item */}
                      <div className="item post p-0">
                        <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                          <svg
                            aria-hidden="true"
                            className="svg-icon ml-3 icon-answer"
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                          >
                            <path
                              fill="#7d848c"
                              d="M14 14H3a2 2 0 01-2-2V3c0-1.1.9-2 2-2h12a2 2 0 012 2v14l-3-3zm-1.02-3L9.82 3H8.14l-3.06 8h1.68l.65-1.79h3.15l.69 1.79h1.73zm-2.93-3.12H7.9l1.06-2.92 1.09 2.92z"
                            />
                          </svg>
                          <div className="votes answered-accepted">
                            <div className="vote-block" title="Votes">
                              <span className="vote-counts">76</span>
                            </div>
                          </div>
                          <div className="media-body">
                            <h5 className="fs-15">
                              <a href="question-details.html">
                                Detected package downgrade warning (dotnet core,
                                vs 2017)
                              </a>
                            </h5>
                          </div>
                        </div>
                        {/* end media */}
                      </div>
                      {/* end item */}
                      <div className="item post p-0">
                        <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                          <svg
                            aria-hidden="true"
                            className="svg-icon ml-3 icon-answer"
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                          >
                            <path
                              fill="#7d848c"
                              d="M14 14H3a2 2 0 01-2-2V3c0-1.1.9-2 2-2h12a2 2 0 012 2v14l-3-3zm-1.02-3L9.82 3H8.14l-3.06 8h1.68l.65-1.79h3.15l.69 1.79h1.73zm-2.93-3.12H7.9l1.06-2.92 1.09 2.92z"
                            />
                          </svg>
                          <div className="votes answered-accepted">
                            <div className="vote-block" title="Votes">
                              <span className="vote-counts">73</span>
                            </div>
                          </div>
                          <div className="media-body">
                            <h5 className="fs-15">
                              <a href="question-details.html">
                                What is the difference between a variable,
                                object, and reference? [duplicate]
                              </a>
                            </h5>
                          </div>
                        </div>
                        {/* end media */}
                      </div>
                      {/* end item */}
                      <div className="item post p-0">
                        <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                          <svg
                            aria-hidden="true"
                            className="svg-icon ml-3 icon-question"
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                          >
                            <path
                              fill="#7d848c"
                              d="M4 14l-3 3V3c0-1.1.9-2 2-2h12a2 2 0 012 2v9a2 2 0 01-2 2H4zm7.75-3.97c.32-.37.55-.75.7-1.15.18-.51.28-1.11.28-1.79 0-1.29-.35-2.29-1.03-3a3.66 3.66 0 00-2.78-1.07 3.7 3.7 0 00-2.8 1.07c-.73.82-1.1 1.9-1.03 3 0 1.29.35 2.29 1.03 3a3.76 3.76 0 002.85 1.07c.62 0 1.2-.11 1.71-.34.65.44 1 .68 1.06.7.23.13.46.23.7.3l.59-1.13a5.2 5.2 0 01-1.28-.66zm-1.27-.9a5.4 5.4 0 00-1.5-.8l-.45.9c.33.12.66.29.98.5-.2.07-.42.11-.65.11-.61 0-1.12-.23-1.52-.68-.4-.46-.6-1.15-.6-2.07 0-.9.2-1.58.6-2.04a2 2 0 011.57-.67 2 2 0 011.58.67c.4.45.6 1.13.6 2.04 0 .44-.05.83-.16 1.17-.1.34-.25.63-.45.87z"
                            />
                          </svg>
                          <div className="votes answered-accepted">
                            <div className="vote-block" title="Votes">
                              <span className="vote-counts">24</span>
                            </div>
                          </div>
                          <div className="media-body">
                            <h5 className="fs-15">
                              <a href="question-details.html">
                                I've found a bug in the JIT/CLR - now how do I
                                debug or reproduce it?
                              </a>
                            </h5>
                          </div>
                        </div>
                        {/* end media */}
                      </div>
                      {/* end item */}
                      <div className="pager pt-30px">
                        <nav aria-label="Page navigation example">
                          <ul className="pagination generic-pagination generic--pagination">
                            <li className="page-item">
                              <a
                                className="page-link"
                                href="#"
                                aria-label="Previous"
                              >
                                <span aria-hidden="true">
                                  <i className="la la-arrow-left" />
                                </span>
                                <span className="sr-only">Previous</span>
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                1
                              </a>
                            </li>
                            <li className="page-item active">
                              <a className="page-link" href="#">
                                2
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                3
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                4
                              </a>
                            </li>
                            <li className="page-item">
                              <a
                                className="page-link"
                                href="#"
                                aria-label="Next"
                              >
                                <span aria-hidden="true">
                                  <i className="la la-arrow-right" />
                                </span>
                                <span className="sr-only">Next</span>
                              </a>
                            </li>
                          </ul>
                        </nav>
                        <p className="fs-13 pt-2">
                          Showing 1-5 of (20) results
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* end summary-panel */}
                </div>
                {/* end user-panel */}
                <div className="user-panel mb-40px">
                  <div className="bg-gray p-3 rounded-rounded d-flex align-items-center justify-content-between">
                    <h3 className="fs-17">
                      Bookmarks <span>(12)</span>
                    </h3>
                    <div className="filter-option-box flex-grow-1 d-flex align-items-center justify-content-end lh-1">
                      <label className="fs-14 fw-medium mr-2 mb-0">Sort</label>
                      <div className="w-100px">
                        <select className="select-container">
                          <option value="Votes">Votes</option>
                          <option selected="selected" value="Activity">
                            Activity
                          </option>
                          <option value="Newest">Newest</option>
                          <option value="Views">Views</option>
                          <option value="Added">Added</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="summary-panel">
                    <div className="vertical-list">
                      <div className="item post p-0">
                        <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                          <div className="votes answered-accepted">
                            <div className="vote-block" title="Votes">
                              <span className="vote-counts">1203</span>
                            </div>
                          </div>
                          <div className="media-body">
                            <h5 className="fs-15">
                              <a href="question-details.html">
                                git: undo all working dir changes including new
                                files
                              </a>
                            </h5>
                          </div>
                        </div>
                        {/* end media */}
                      </div>
                      {/* end item */}
                      <div className="item post p-0">
                        <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                          <div className="votes">
                            <div className="vote-block" title="Votes">
                              <span className="vote-counts">1117</span>
                            </div>
                          </div>
                          <div className="media-body">
                            <h5 className="fs-15">
                              <a href="question-details.html">
                                How to revert uncommitted changes including
                                files and folders?
                              </a>
                            </h5>
                          </div>
                        </div>
                        {/* end media */}
                      </div>
                      {/* end item */}
                      <div className="item post p-0">
                        <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                          <div className="votes answered-accepted">
                            <div className="vote-block" title="Votes">
                              <span className="vote-counts">76</span>
                            </div>
                          </div>
                          <div className="media-body">
                            <h5 className="fs-15">
                              <a href="question-details.html">
                                Detected package downgrade warning (dotnet core,
                                vs 2017)
                              </a>
                            </h5>
                          </div>
                        </div>
                        {/* end media */}
                      </div>
                      {/* end item */}
                      <div className="item post p-0">
                        <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                          <div className="votes answered-accepted">
                            <div className="vote-block" title="Votes">
                              <span className="vote-counts">73</span>
                            </div>
                          </div>
                          <div className="media-body">
                            <h5 className="fs-15">
                              <a href="question-details.html">
                                What is the difference between a variable,
                                object, and reference? [duplicate]
                              </a>
                            </h5>
                          </div>
                        </div>
                        {/* end media */}
                      </div>
                      {/* end item */}
                      <div className="item post p-0">
                        <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                          <div className="votes answered-accepted">
                            <div className="vote-block" title="Votes">
                              <span className="vote-counts">24</span>
                            </div>
                          </div>
                          <div className="media-body">
                            <h5 className="fs-15">
                              <a href="question-details.html">
                                I've found a bug in the JIT/CLR - now how do I
                                debug or reproduce it?
                              </a>
                            </h5>
                          </div>
                        </div>
                        {/* end media */}
                      </div>
                      {/* end item */}
                      <div className="pager pt-30px">
                        <nav aria-label="Page navigation example">
                          <ul className="pagination generic-pagination generic--pagination">
                            <li className="page-item">
                              <a
                                className="page-link"
                                href="#"
                                aria-label="Previous"
                              >
                                <span aria-hidden="true">
                                  <i className="la la-arrow-left" />
                                </span>
                                <span className="sr-only">Previous</span>
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                1
                              </a>
                            </li>
                            <li className="page-item active">
                              <a className="page-link" href="#">
                                2
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                3
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                4
                              </a>
                            </li>
                            <li className="page-item">
                              <a
                                className="page-link"
                                href="#"
                                aria-label="Next"
                              >
                                <span aria-hidden="true">
                                  <i className="la la-arrow-right" />
                                </span>
                                <span className="sr-only">Next</span>
                              </a>
                            </li>
                          </ul>
                        </nav>
                        <p className="fs-13 pt-2">
                          Showing 1-5 of (12) results
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* end summary-panel */}
                </div>
                {/* end user-panel */}
                <div className="user-panel mb-40px">
                  <div className="bg-gray p-3 rounded-rounded d-flex align-items-center justify-content-between">
                    <h3 className="fs-17">
                      Active bounties <span>(20)</span>
                    </h3>
                    <div className="filter-option-box flex-grow-1 d-flex align-items-center justify-content-end lh-1">
                      <label className="fs-14 fw-medium mr-2 mb-0">Sort</label>
                      <div className="w-100px">
                        <select className="select-container">
                          <option selected="selected" value="Active">
                            Active
                          </option>
                          <option value="Offered">Offered</option>
                          <option value="Earned">Earned</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="summary-panel">
                    <div className="vertical-list">
                      <div className="item p-0">
                        <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                          <div className="votes">
                            <div
                              className="vote-block d-flex align-items-center justify-content-between"
                              title="Votes"
                            >
                              <span className="vote-counts">6475</span>
                              <span className="vote-icon" />
                            </div>
                            <div
                              className="answer-block d-flex align-items-center justify-content-between"
                              title="Answers"
                            >
                              <span className="vote-counts">22</span>
                              <span className="answer-icon" />
                            </div>
                          </div>
                          <div className="media-body">
                            <h5>
                              <a
                                href="question-details.html"
                                className="d-flex align-items-center"
                              >
                                <span className="badge bg-12 mr-2 text-white">
                                  +100
                                </span>{" "}
                                How to make Git “forget” about a file that was
                                tracked but is now in .gitignore?
                              </a>
                            </h5>
                            <small className="meta">
                              <span className="pr-1">yesterday</span>
                              <a href="#" className="author">
                                edublog
                              </a>
                            </small>
                            <div className="tags">
                              <a href="#" className="tag-link">
                                git
                              </a>
                              <a href="#" className="tag-link">
                                gitignore
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* end media */}
                      </div>
                      {/* end item */}
                      <div className="item p-0">
                        <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                          <div className="votes answered-accepted">
                            <div
                              className="vote-block d-flex align-items-center justify-content-between"
                              title="Votes"
                            >
                              <span className="vote-counts">4711</span>
                              <span className="vote-icon" />
                            </div>
                            <div
                              className="answer-block d-flex align-items-center justify-content-between"
                              title="Answers"
                            >
                              <span className="vote-counts">-2</span>
                              <span className="answer-icon" />
                            </div>
                          </div>
                          <div className="media-body">
                            <h5>
                              <a
                                href="question-details.html"
                                className="d-flex align-items-center"
                              >
                                <span className="badge bg-12 mr-2 text-white">
                                  +500
                                </span>{" "}
                                Catching errors being thrown within module
                              </a>
                            </h5>
                            <small className="meta">
                              <span className="pr-1">1 hour ago</span>
                              <a href="#" className="author">
                                edublog
                              </a>
                            </small>
                            <div className="tags">
                              <a href="#" className="tag-link">
                                python
                              </a>
                              <a href="#" className="tag-link">
                                error-handling
                              </a>
                              <a href="#" className="tag-link">
                                gevent
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* end media */}
                      </div>
                      {/* end item */}
                      <div className="item p-0">
                        <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                          <div className="votes answered-accepted">
                            <div
                              className="vote-block d-flex align-items-center justify-content-between"
                              title="Votes"
                            >
                              <span className="vote-counts">4448</span>
                              <span className="vote-icon" />
                            </div>
                            <div
                              className="answer-block d-flex align-items-center justify-content-between"
                              title="Answers"
                            >
                              <span className="vote-counts">11</span>
                              <span className="answer-icon" />
                            </div>
                          </div>
                          <div className="media-body">
                            <h5>
                              <a
                                href="question-details.html"
                                className="d-flex align-items-center"
                              >
                                <span className="badge bg-12 mr-2 text-white">
                                  +200
                                </span>{" "}
                                Alien Dictionary Python
                              </a>
                            </h5>
                            <small className="meta">
                              <span className="pr-1">2 days ago</span>
                              <a href="#" className="author">
                                edublog
                              </a>
                            </small>
                            <div className="tags">
                              <a href="#" className="tag-link">
                                python
                              </a>
                              <a href="#" className="tag-link">
                                algorithm
                              </a>
                              <a href="#" className="tag-link">
                                graph
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* end media */}
                      </div>
                      {/* end item */}
                      <div className="item p-0">
                        <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                          <div className="votes">
                            <div
                              className="vote-block d-flex align-items-center justify-content-between"
                              title="Votes"
                            >
                              <span className="vote-counts">3274</span>
                              <span className="vote-icon" />
                            </div>
                            <div
                              className="answer-block d-flex align-items-center justify-content-between"
                              title="Answers"
                            >
                              <span className="vote-counts">33</span>
                              <span className="answer-icon" />
                            </div>
                          </div>
                          <div className="media-body">
                            <h5>
                              <a
                                href="question-details.html"
                                className="d-flex align-items-center"
                              >
                                <span className="badge bg-12 mr-2 text-white">
                                  +50
                                </span>{" "}
                                How to parse JS code into one-operation-per-line
                                with fewest temp variables?
                              </a>
                            </h5>
                            <small className="meta">
                              <span className="pr-1">May 12 '20</span>
                              <a href="#" className="author">
                                edublog
                              </a>
                            </small>
                            <div className="tags">
                              <a href="#" className="tag-link">
                                javascript
                              </a>
                              <a href="#" className="tag-link">
                                compilation
                              </a>
                              <a href="#" className="tag-link">
                                register-allocation
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* end media */}
                      </div>
                      {/* end item */}
                      <div className="item p-0">
                        <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                          <div className="votes">
                            <div
                              className="vote-block d-flex align-items-center justify-content-between"
                              title="Votes"
                            >
                              <span className="vote-counts">2822</span>
                              <span className="vote-icon" />
                            </div>
                            <div
                              className="answer-block d-flex align-items-center justify-content-between"
                              title="Answers"
                            >
                              <span className="vote-counts">11</span>
                              <span className="answer-icon" />
                            </div>
                          </div>
                          <div className="media-body">
                            <h5>
                              <a
                                href="question-details.html"
                                className="d-flex align-items-center"
                              >
                                <span className="badge bg-12 mr-2 text-white">
                                  +50
                                </span>{" "}
                                vue 3 Server Side Rendering with Vuex and Router
                              </a>
                            </h5>
                            <small className="meta">
                              <span className="pr-1">May 12 '20</span>
                              <a href="#" className="author">
                                edublog
                              </a>
                            </small>
                            <div className="tags">
                              <a href="#" className="tag-link">
                                vue.js
                              </a>
                              <a href="#" className="tag-link">
                                vuex
                              </a>
                              <a href="#" className="tag-link">
                                vuejs3
                              </a>
                              <a href="#" className="tag-link">
                                router
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* end media */}
                      </div>
                      {/* end item */}
                      <div className="pager pt-30px">
                        <nav aria-label="Page navigation example">
                          <ul className="pagination generic-pagination generic--pagination">
                            <li className="page-item">
                              <a
                                className="page-link"
                                href="#"
                                aria-label="Previous"
                              >
                                <span aria-hidden="true">
                                  <i className="la la-arrow-left" />
                                </span>
                                <span className="sr-only">Previous</span>
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                1
                              </a>
                            </li>
                            <li className="page-item active">
                              <a className="page-link" href="#">
                                2
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                3
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                4
                              </a>
                            </li>
                            <li className="page-item">
                              <a
                                className="page-link"
                                href="#"
                                aria-label="Next"
                              >
                                <span aria-hidden="true">
                                  <i className="la la-arrow-right" />
                                </span>
                                <span className="sr-only">Next</span>
                              </a>
                            </li>
                          </ul>
                        </nav>
                        <p className="fs-13 pt-2">
                          Showing 1-5 of (20) results
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* end summary-panel */}
                </div>
                {/* end user-panel */}
                <div className="user-panel mb-40px">
                  <div className="bg-gray p-3 rounded-rounded">
                    <h3 className="fs-17">
                      Votes cast <span>(18,850)</span>
                    </h3>
                  </div>
                  <div className="summary-panel">
                    <div className="vertical-list">
                      <div className="item">
                        <p className="fs-14">
                          Of the votes cast,{" "}
                          <span className="text-black">18,808</span> were
                          upvotes and <span className="text-black">42</span>{" "}
                          were downvotes.{" "}
                          <span className="text-black">Arden Smith</span> voted
                          on questions <span className="text-black">7,553</span>{" "}
                          times and <span className="text-black">11,297</span>{" "}
                          times on answers.
                        </p>
                      </div>
                      {/* end item */}
                      <div className="item">
                        <p className="fs-14">
                          <span className="text-black">50</span> votes in the
                          last month
                        </p>
                      </div>
                      {/* end item */}
                      <div className="item">
                        <p className="fs-14">
                          <span className="text-black">62</span> votes in the
                          last week
                        </p>
                      </div>
                      {/* end item */}
                      <div className="item">
                        <p className="fs-14">
                          <span className="text-black">1</span> vote in the last
                          day
                        </p>
                      </div>
                      {/* end item */}
                    </div>
                  </div>
                  {/* end summary-panel */}
                </div>
                {/* end user-panel */}
              </div>
              {/* end user-panel-main-bar */}
            </div>
            {/* end tab-pane */}
          </div>
        </div>
        {/* end col-lg-9 */}
        <div className="col-lg-3">
          <div className="sidebar">
            <div className="card card-item">
              <div className="card-body">
                <h3 className="fs-17 pb-3">Number Achievement</h3>
                <div className="divider">
                  <span />
                </div>
                <div className="row no-gutters text-center">
                  <div className="col-lg-6 responsive-column-half">
                    <div className="icon-box pt-3">
                      <span className="fs-20 fw-bold text-color">980k</span>
                      <p className="fs-14">Questions</p>
                    </div>
                    {/* end icon-box */}
                  </div>
                  {/* end col-lg-6 */}
                  <div className="col-lg-6 responsive-column-half">
                    <div className="icon-box pt-3">
                      <span className="fs-20 fw-bold text-color-2">610k</span>
                      <p className="fs-14">Answers</p>
                    </div>
                    {/* end icon-box */}
                  </div>
                  {/* end col-lg-6 */}
                  <div className="col-lg-6 responsive-column-half">
                    <div className="icon-box pt-3">
                      <span className="fs-20 fw-bold text-color-3">650k</span>
                      <p className="fs-14">Answer accepted</p>
                    </div>
                    {/* end icon-box */}
                  </div>
                  {/* end col-lg-6 */}
                  <div className="col-lg-6 responsive-column-half">
                    <div className="icon-box pt-3">
                      <span className="fs-20 fw-bold text-color-4">320k</span>
                      <p className="fs-14">Users</p>
                    </div>
                    {/* end icon-box */}
                  </div>
                  {/* end col-lg-6 */}
                  <div className="col-lg-12 pt-3">
                    <p className="fs-14">
                      To get answer of question{" "}
                      <a
                        href="signup.html"
                        className="text-color hover-underline"
                      >
                        Join
                        <i className="la la-arrow-right ml-1" />
                      </a>
                    </p>
                  </div>
                </div>
                {/* end row */}
              </div>
            </div>
            {/* end card */}
            <div className="card card-item">
              <div className="card-body">
                <h3 className="fs-17 pb-3">Trending Questions</h3>
                <div className="divider">
                  <span />
                </div>
                <div className="sidebar-questions pt-3">
                  <div className="media media-card media--card media--card-2">
                    <div className="media-body">
                      <h5>
                        <a href="question-details.html">
                          Using web3 to call precompile contract
                        </a>
                      </h5>
                      <small className="meta">
                        <span className="pr-1">2 mins ago</span>
                        <span className="pr-1">. by</span>
                        <a href="#" className="author">
                          Sudhir Kumbhare
                        </a>
                      </small>
                    </div>
                  </div>
                  {/* end media */}
                  <div className="media media-card media--card media--card-2">
                    <div className="media-body">
                      <h5>
                        <a href="question-details.html">
                          Is it true while finding Time Complexity of the
                          algorithm [closed]
                        </a>
                      </h5>
                      <small className="meta">
                        <span className="pr-1">48 mins ago</span>
                        <span className="pr-1">. by</span>
                        <a href="#" className="author">
                          wimax
                        </a>
                      </small>
                    </div>
                  </div>
                  {/* end media */}
                  <div className="media media-card media--card media--card-2">
                    <div className="media-body">
                      <h5>
                        <a href="question-details.html">
                          image picker and store them into firebase with flutter
                        </a>
                      </h5>
                      <small className="meta">
                        <span className="pr-1">1 hour ago</span>
                        <span className="pr-1">. by</span>
                        <a href="#" className="author">
                          Antonin gavrel
                        </a>
                      </small>
                    </div>
                  </div>
                  {/* end media */}
                </div>
                {/* end sidebar-questions */}
              </div>
            </div>
            {/* end card */}
            <div className="card card-item">
              <div className="card-body">
                <h3 className="fs-17 pb-3">Trending Tags</h3>
                <div className="divider">
                  <span />
                </div>
                <div className="tags pt-4">
                  <div className="tag-item">
                    <a href="#" className="tag-link tag-link-md">
                      analytics
                    </a>
                    <span className="item-multiplier fs-13">
                      <span>×</span>
                      <span>32924</span>
                    </span>
                  </div>
                  {/* end tag-item */}
                  <div className="tag-item">
                    <a href="#" className="tag-link tag-link-md">
                      computer
                    </a>
                    <span className="item-multiplier fs-13">
                      <span>×</span>
                      <span>32924</span>
                    </span>
                  </div>
                  {/* end tag-item */}
                  <div className="tag-item">
                    <a href="#" className="tag-link tag-link-md">
                      python
                    </a>
                    <span className="item-multiplier fs-13">
                      <span>×</span>
                      <span>32924</span>
                    </span>
                  </div>
                  {/* end tag-item */}
                  <div className="tag-item">
                    <a href="#" className="tag-link tag-link-md">
                      javascript
                    </a>
                    <span className="item-multiplier fs-13">
                      <span>×</span>
                      <span>32924</span>
                    </span>
                  </div>
                  {/* end tag-item */}
                  <div className="tag-item">
                    <a href="#" className="tag-link tag-link-md">
                      c#
                    </a>
                    <span className="item-multiplier fs-13">
                      <span>×</span>
                      <span>32924</span>
                    </span>
                  </div>
                  {/* end tag-item */}
                  <div className="collapse" id="showMoreTags">
                    <div className="tag-item">
                      <a href="#" className="tag-link tag-link-md">
                        java
                      </a>
                      <span className="item-multiplier fs-13">
                        <span>×</span>
                        <span>32924</span>
                      </span>
                    </div>
                    {/* end tag-item */}
                    <div className="tag-item">
                      <a href="#" className="tag-link tag-link-md">
                        swift
                      </a>
                      <span className="item-multiplier fs-13">
                        <span>×</span>
                        <span>32924</span>
                      </span>
                    </div>
                    {/* end tag-item */}
                    <div className="tag-item">
                      <a href="#" className="tag-link tag-link-md">
                        html
                      </a>
                      <span className="item-multiplier fs-13">
                        <span>×</span>
                        <span>32924</span>
                      </span>
                    </div>
                    {/* end tag-item */}
                    <div className="tag-item">
                      <a href="#" className="tag-link tag-link-md">
                        angular
                      </a>
                      <span className="item-multiplier fs-13">
                        <span>×</span>
                        <span>32924</span>
                      </span>
                    </div>
                    {/* end tag-item */}
                    <div className="tag-item">
                      <a href="#" className="tag-link tag-link-md">
                        flutter
                      </a>
                      <span className="item-multiplier fs-13">
                        <span>×</span>
                        <span>32924</span>
                      </span>
                    </div>
                    {/* end tag-item */}
                    <div className="tag-item">
                      <a href="#" className="tag-link tag-link-md">
                        machine-language
                      </a>
                      <span className="item-multiplier fs-13">
                        <span>×</span>
                        <span>32924</span>
                      </span>
                    </div>
                    {/* end tag-item */}
                  </div>
                  {/* end collapse */}
                  <a
                    className="collapse-btn fs-13"
                    data-toggle="collapse"
                    href="#showMoreTags"
                    role="button"
                    aria-expanded="false"
                    aria-controls="showMoreTags"
                  >
                    <span className="collapse-btn-hide">
                      Show more
                      <i className="la la-angle-down ml-1 fs-11" />
                    </span>
                    <span className="collapse-btn-show">
                      Show less
                      <i className="la la-angle-up ml-1 fs-11" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* end card */}
            <div className="ad-card">
              <h4 className="text-gray text-uppercase fs-13 pb-3 text-center">
                Advertisements
              </h4>
              <div className="ad-banner mb-4 mx-auto">
                <span className="ad-text">290x500</span>
              </div>
              <div className="ad-banner mb-4 ad-banner-2 mx-auto">
                <span className="ad-text">290x300</span>
              </div>
            </div>
            {/* end ad-card */}
          </div>
          {/* end sidebar */}
        </div>
        {/* end col-lg-3 */}
      </div>
      {/* end row */}
    </div>
    {/* end container */}
  </section>
  {/* end user-details-area */}
  {/* ================================
   END USER DETAILS AREA
================================= */}
  {/* ================================
   END FOOTER AREA
================================= */}
  <section className="footer-area pt-80px bg-dark position-relative">
    <span className="vertical-bar-shape vertical-bar-shape-1" />
    <span className="vertical-bar-shape vertical-bar-shape-2" />
    <span className="vertical-bar-shape vertical-bar-shape-3" />
    <span className="vertical-bar-shape vertical-bar-shape-4" />
    <div className="container">
      <div className="row">
        <div className="col-lg-3 responsive-column-half">
          <div className="footer-item">
            <h3 className="fs-18 fw-bold pb-2 text-white">Company</h3>
            <ul className="generic-list-item generic-list-item-hover-underline pt-3 generic-list-item-white">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Advertising</a>
              </li>
            </ul>
          </div>
          {/* end footer-item */}
        </div>
        {/* end col-lg-3 */}
        <div className="col-lg-3 responsive-column-half">
          <div className="footer-item">
            <h3 className="fs-18 fw-bold pb-2 text-white">Legal Stuff</h3>
            <ul className="generic-list-item generic-list-item-hover-underline pt-3 generic-list-item-white">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
            </ul>
          </div>
          {/* end footer-item */}
        </div>
        {/* end col-lg-3 */}
        <div className="col-lg-3 responsive-column-half">
          <div className="footer-item">
            <h3 className="fs-18 fw-bold pb-2 text-white">Help</h3>
            <ul className="generic-list-item generic-list-item-hover-underline pt-3 generic-list-item-white">
              <li>
                <a href="#">Knowledge Base</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
          {/* end footer-item */}
        </div>
        {/* end col-lg-3 */}
        <div className="col-lg-3 responsive-column-half">
          <div className="footer-item">
            <h3 className="fs-18 fw-bold pb-2 text-white">Connect with us</h3>
            <ul className="generic-list-item generic-list-item-hover-underline pt-3 generic-list-item-white">
              <li>
                <a href="#">
                  <i className="la la-facebook mr-1" /> Facebook
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="la la-twitter mr-1" /> Twitter
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="la la-linkedin mr-1" /> LinkedIn
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="la la-instagram mr-1" /> Instagram
                </a>
              </li>
            </ul>
          </div>
          {/* end footer-item */}
        </div>
        {/* end col-lg-3 */}
      </div>
      {/* end row */}
    </div>
    {/* end container */}
    <hr className="border-top-gray my-5" />
    <div className="container">
      <div className="row align-items-center pb-4 copyright-wrap">
        <div className="col-lg-6">
          <a href="index.html" className="d-inline-block">
            <img
              src="images/logo-white.png"
              alt="footer logo"
              className="footer-logo"
            />
          </a>
        </div>
        {/* end col-lg-6 */}
        <div className="col-lg-6">
          <p className="copyright-desc text-right fs-14">
            Copyright © 2021 <a href="https://techydevs.com/">TechyDevs</a> Inc.
          </p>
        </div>
        {/* end col-lg-6 */}
      </div>
      {/* end row */}
    </div>
    {/* end container */}
  </section>
</>

        </>
    )
}
import Layout from "../commons/components/Layout";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "../commons/styles/Landing.module.css";
import Link from "next/link";
import Footer from "../commons/components/Footer/Footer";
import example from "../commons/assets/images/example-home.png";
import playstore from "../commons/assets/icons/playstore.png";
import apple from "../commons/assets/icons/apple.png";
import phone from "../commons/assets/icons/phone.png";
import privacy from "../commons/assets/icons/lock.png";
import download from "../commons/assets/icons/download.png";
import btnLeft from "../commons/assets/icons/btn-left.png";
import btnRight from "../commons/assets/icons/btn-right.png";
import airbnb from "../commons/assets/images/airbnb.png";
import canon from "../commons/assets/images/canon.png";
import dell from "../commons/assets/images/dell.png";
import dropbox from "../commons/assets/images/dropbox.png";
import hm from "../commons/assets/images/hm.png";
import microsoft from "../commons/assets/images/microsoft.png";
import transaction from "../commons/assets/images/example-transaction.png";
import people from "../commons/assets/images/people.png";

export default function Home(props) {
  console.log("PROPS", props);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setIsLogin(false);
  }, []);

  return (
    <>
      <Layout title="Zwallet | Landing Page">
        <div className={`container-fluid p-0 ${styles.main}`}>
          <nav
            className={`navbar navbar-expand-lg navbar-light bg-light ps-lg-5 pe-lg-5 ${styles["wrapper-navbar"]}`}>
            <div className="container-fluid">
              <a className={`navbar-brand ${styles.title}`} href="#">
                Zwallet
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse d-lg-flex justify-content-lg-end "
                id="navbarSupportedContent">
                <ul
                  className={`navbar-nav mb-2 mb-lg-0 mt-lg-0 mt-md-5 mt-sm-5 `}>
                  <li
                    className={`nav-item d-md-flex justify-content-md-center ${styles["wrapper-button"]}`}>
                    <Link href={"/auth/login"}>
                      <button
                        className={`nav-item mb-md-2 mb-sm-2 mb-lg-0  ${styles["btn-login"]}`}>
                        Login
                      </button>
                    </Link>
                  </li>
                  <li
                    className={`nav-item d-md-flex justify-content-md-center ${styles["wrapper-button"]}`}>
                    <Link href={"/auth/signup"}>
                      <button className={styles["btn-signup"]}>Sign Up</button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <main className="container-fluid p-0">
            <section className="row mb-lg-5">
              <div className="col-lg-6 d-flex justify-content-center">
                <Image
                  src={example}
                  alt="example"
                  className={`${styles["img-example"]}`}
                  width={420}
                  height={670}
                />
              </div>
              <div className="col-lg-6 mt-lg-5">
                <div className="row">
                  <div className="col-lg-10 ">
                    <h1 className={`${styles["title"]}`}>
                      Awesome App For Saving{" "}
                      <span className={`${styles["time"]}`}>Time.</span>
                    </h1>
                    <div className={`${styles["wrapper-description"]}`}>
                      <p className={`${styles["description"]}`}>
                        We bring you a mobile app for banking problems that
                        oftenly wasting much of your times.
                      </p>
                    </div>
                    <button className={`${styles["btn-try-it"]}`}>
                      Try It Free
                    </button>
                    <p className={`${styles["avail"]}`}>Available On</p>
                    <div className={`${styles["wrapper-logo-platform"]}`}>
                      <Image
                        src={playstore}
                        alt="playstore-logo"
                        width={20}
                        height={30}
                      />
                      <Image
                        src={apple}
                        alt="apple-logo"
                        width={30}
                        height={30}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="row mb-5">
              <div className={`col-lg-12 ${styles["wrapper-img-platform"]} `}>
                <Image
                  src={microsoft}
                  alt="logo-microsoft"
                  width={150}
                  height={100}
                />
                <Image
                  src={dropbox}
                  alt="logo-microsoft"
                  width={150}
                  height={100}
                />
                <Image src={hm} alt="logo-microsoft" width={150} height={100} />
                <Image
                  src={airbnb}
                  alt="logo-microsoft"
                  width={150}
                  height={100}
                />
                <Image
                  src={canon}
                  alt="logo-microsoft"
                  width={150}
                  height={100}
                />
                <Image
                  src={dell}
                  alt="logo-microsoft"
                  width={150}
                  height={100}
                />
              </div>
              <div className="col-lg-12">
                <h1 className={`${styles["title-about"]}`}>
                  <span className={`${styles.about}`}>About</span> the
                  Application.
                </h1>
                <div className={`${styles["wrapper-description-about"]}`}>
                  <p className={`${styles["description-about"]}`}>
                    We have some great features from the application and it’s
                    totally free to use by all users around the world.
                  </p>
                </div>
                <div className={`${styles["wrapper-card-about"]}`}>
                  <div className={` ${styles["card"]}`}>
                    <Image
                      src={phone}
                      alt="logo-phone"
                      width={100}
                      height={100}
                    />
                    <p className={`${styles["title-card"]}`}>24/7 Support</p>
                    <p className={`${styles["description-card"]}`}>
                      We have 24/7 contact support so you can contact us
                      whenever you want and we will respond it.
                    </p>
                  </div>
                  <div className={`${styles["card-white"]}`}>
                    <Image
                      src={privacy}
                      alt="logo-privacy"
                      width={100}
                      height={100}
                    />
                    <p className={`${styles["title-card"]}`}>Data Privacy</p>
                    <p className={`${styles["description-card"]}`}>
                      We make sure your data is safe in our database and we will
                      encrypt any data you submitted to us.
                    </p>
                  </div>
                  <div className={`${styles["card"]}`}>
                    <Image
                      src={download}
                      alt="logo-download"
                      width={100}
                      height={100}
                    />
                    <p className={`${styles["title-card"]}`}>Easy Download</p>
                    <p className={`${styles["description-card"]}`}>
                      Zwallet is 100% totally free to use it’s now available on
                      Google Play Store and App Store.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="row mb-lg-5">
              <div className="col-lg-6 d-flex justify-content-center mb-lg-5">
                <Image
                  src={transaction}
                  alt="example"
                  className={`${styles["img-example"]}`}
                  width={420}
                  height={670}
                />
              </div>
              <div className="col-lg-6 mt-lg-5">
                <div className="row">
                  <div className="col-lg-9">
                    <h1 className={`${styles["title2"]}`}>
                      All The <span className={`${styles["time"]}`}>Great</span>{" "}
                      Zwallet Features.
                    </h1>
                    <div className={`${styles.card2}`}>
                      <p className={`${styles["title-card2"]}`}>
                        <span>1. </span> Small Fee
                      </p>
                      <p className={`${styles["description-card2"]}`}>
                        We only charge 5% of every success transaction done in
                        Zwallet app.
                      </p>
                    </div>
                    <div className={`${styles.card2}`}>
                      <p className={`${styles["title-card2"]}`}>
                        <span>2. </span> Data Secured
                      </p>
                      <p className={`${styles["description-card2"]}`}>
                        All your data is secured properly in our system and it’s
                        encrypted.
                      </p>
                    </div>
                    <div className={`${styles.card2}`}>
                      <p className={`${styles["title-card2"]}`}>
                        <span>3. </span> User Friendly
                      </p>
                      <p className={`${styles["description-card2"]}`}>
                        Zwallet come up with modern and sleek design and not
                        complicated.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="row mb-lg-5">
              <div className="col-lg-12">
                <p className={`${styles["title-about"]}`}>
                  What Users are{" "}
                  <span className={`${styles["about"]}`}>Saying.</span>
                </p>
                <div
                  className={`mb-lg-5 ${styles["wrapper-description-about"]}`}>
                  <p className={`${styles["description-about"]}`}>
                    We have some great features from the application and it’s
                    totally free to use by all users around the world.
                  </p>
                </div>
                <div className="row border">
                  <div className="col-lg-2 d-lg-flex justify-content-lg-center ">
                    <Image src={btnLeft} alt="btn-left" />
                  </div>
                  <div className={`col-lg-8 ${styles["card-comment"]}`}>
                    <Image
                      src={people}
                      alt="people"
                      width={100}
                      height={100}
                      className={`${styles["img-user-comment"]}`}
                    />
                    <p className={`${styles["name-comment"]}`}>Fajar Pratama</p>
                    <p className={`${styles["profession-comment"]}`}>
                      Web Developer
                    </p>
                    <p className={`${styles["comment"]}`}>
                      “This is the most outstanding app that I’ve ever try in my
                      live, this app is such an amazing masterpiece and it’s
                      suitable for you who is bussy with their bussiness and
                      must transfer money to another person aut there. Just try
                      this app and see the power!”
                    </p>
                  </div>
                  <div className="col-lg-2 d-lg-flex justify-content-lg-center">
                    <Image src={btnRight} alt="btn-right" />
                  </div>
                </div>
              </div>
            </section>
          </main>

          <Footer login={isLogin} />
        </div>
      </Layout>
    </>
  );
}

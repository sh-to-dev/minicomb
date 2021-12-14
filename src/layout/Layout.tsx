import * as React from "react";
import { Helmet } from "react-helmet";

// Components
import PrimaryNav from "../components/navigation/PrimaryNav";
import Footer from "../components/navigation/Footer";
import "../index.scss";

type Props = {
    children: React.ReactElement,
}

const Layout = ({ children }: Props) => {
    return (
        <>
          <Helmet>
              {/* meta tags */}
              <meta charSet="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

              {/* Icons */}
              <script src="https://kit.fontawesome.com/83f451a6c5.js" crossorigin="anonymous"></script>

              {/* Title */}
              <title>minicomb</title>
          </Helmet>
          <PrimaryNav />
          {children}
          <Footer />
        </>
    )
}

export default Layout;
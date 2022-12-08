import Footer from "../common/UI/Footer";
import Layout from "../common/UI/Layout";
import Navbar from "../common/UI/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}

export default MyApp;

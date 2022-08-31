import HeroSlider from "../components/pages/home/heroSlider";
import FeatureServices from "../components/pages/home/featuredService";
import AboutSection from "../components/pages/home/aboutSection";
import Layout from "../components/layouts/mainLayout";
import NewsLetter from "../components/pages/newsLetter";
import LatestPropListing from "../components/pages/home/latestPropListing";
const Home = () => {
  return (
    <Layout>
      <HeroSlider />
      <FeatureServices />
      <AboutSection />
      <LatestPropListing />
      <NewsLetter />
    </Layout>
  );
};
export default Home;

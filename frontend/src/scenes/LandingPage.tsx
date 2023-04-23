import {
  BannerLP,
  ConnectLP,
  ContactLP,
  EnhanceLP,
  FooterLP,
  HeaderLP,
  LearnLP,
  LearnLanguagesLP,
  PortfolioLP,
  StoriesLP,
} from "../components/landingPage";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <HeaderLP />
      {/* Banner */}
      <BannerLP />
      {/* LearnLanguages */}
      <LearnLanguagesLP />
      {/* Portfolio */}
      <PortfolioLP />
      {/* Connect */}
      <ConnectLP />
      {/* LearnToCode */}
      <LearnLP />
      {/* Enhance */}
      <EnhanceLP />
      {/* ContactUs */}
      <ContactLP />
      {/* Stories */}
      <StoriesLP />
      {/* Footer */}
      <FooterLP />
    </div>
  );
};

export default LandingPage;

import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import GallerySection from "./components/GallerySection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import LocationSection from "./components/LocationSection";
import MenuSection from "./components/MenuSection";
import SignInPage from "./components/SignInPage";
import WhatsAppButton from "./components/WhatsAppButton";
import WhyChooseUsSection from "./components/WhyChooseUsSection";

function App() {
  const { isInitializing, identity } = useInternetIdentity();
  const [showSignIn, setShowSignIn] = useState(false);
  const queryClient = useQueryClient();
  const isAuthenticated = !!identity;

  // biome-ignore lint/correctness/useExhaustiveDependencies: intentional
  useEffect(() => {
    if (!isInitializing) {
      queryClient.invalidateQueries();
    }
  }, [isAuthenticated, isInitializing, queryClient]);

  useEffect(() => {
    if (isAuthenticated) {
      setShowSignIn(false);
    }
  }, [isAuthenticated]);

  if (isInitializing) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-12 w-12 animate-spin rounded-full border-[3px] border-foreground/20 border-t-accent" />
      </div>
    );
  }

  if (showSignIn && !isAuthenticated) {
    return <SignInPage onBack={() => setShowSignIn(false)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <WhyChooseUsSection />
        <GallerySection />
        <LocationSection />
      </main>

      <Footer onOwnerSignIn={() => setShowSignIn(true)} />
      <WhatsAppButton />
    </div>
  );
}

export default App;

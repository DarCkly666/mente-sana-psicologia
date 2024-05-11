import ConfianSection from "@/components/ConfianSection";
import MainSection from "@/components/MainSection";
import NuestrosPsicologosSection from "@/components/NuestrosPsicologosSection";
import PlanesPreciosSection from "@/components/PlanesPreciosSection";
import PorQueSection from "@/components/PorQueSection";
import ProblemasSection from "@/components/ProblemasSection";
import SolicitaSection from "@/components/SolicitaSection";
import TestimoniosSection from "@/components/sections/TestimoniosSection";

export default function Home() {
  return (
    <>
      <MainSection />
      <PorQueSection />
      <ConfianSection />
      <ProblemasSection />
      <SolicitaSection />
      <NuestrosPsicologosSection />
      <PlanesPreciosSection />
      <TestimoniosSection />
    </>
  );
}

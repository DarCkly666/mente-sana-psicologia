import ConfianSection from "@/components/sections/ConfianSection";
import MainSection from "@/components/sections/MainSection";
import NuestrosPsicologosSection from "@/components/sections/NuestrosPsicologosSection";
import PlanesPreciosSection from "@/components/sections/PlanesPreciosSection";
import PorQueSection from "@/components/sections/PorQueSection";
import ProblemasSection from "@/components/sections/ProblemasSection";
import SolicitaSection from "@/components/sections/SolicitaSection";
import FaqSection from "@/components/sections/FaqSection";
import LlamarSection from "@/components/sections/LlamarSection";
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
      <FaqSection />
      <LlamarSection />
    </>
  );
}

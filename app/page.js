import CaseStudy from "@/components/CaseStudy";
import Comments from "@/components/Comments";
import Features from "@/components/Features";
import FetureGuids from "@/components/FetureGuids";
import Footer from "@/components/Footer";
import Frame from "@/components/Frame";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import TopMenu from "@/components/TopMenu";
import Weblogs from "@/components/Weblogs";
import React from "react";

export default function page() {
  return (
    <>
      <div>
        <TopMenu />
        <Reveal>
          <Header />
        </Reveal>
        <Reveal>
          <Features />
        </Reveal>
        <Reveal>
          <FetureGuids />
        </Reveal>
        <Reveal>
          <CaseStudy />
        </Reveal>

        <Reveal>
          <Frame />
        </Reveal>

        <Reveal>
          <Comments />
        </Reveal>

        <Reveal>
          <Weblogs />
        </Reveal>

        <Footer />
      </div>
    </>
  );
}

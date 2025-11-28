import CaseStudy from "@/components/CaseStudy";
import Comments from "@/components/Comments";
import Features from "@/components/Features";
import FetureGuids from "@/components/FetureGuids";
import Frame from "@/components/Frame";
import Header from "@/components/Header";
import TopMenu from "@/components/TopMenu";
import React from "react";

export default function page() {
  return (
    <>
      <div>
        <TopMenu />
        <Header />
        <Features />
        <FetureGuids />
        <CaseStudy />
        <Frame />
        <Comments />
      </div>
    </>
  );
}

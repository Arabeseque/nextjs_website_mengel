import React from "react";
import Member from "../components/member";
const AboutUs: React.FC = () => {
  return (
    <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
      <div className="container mx-auto px-11">
        <p className="max-w-5xl mx-auto text-4xl leading-tight tracking-tight">
          <strong>We will help you ship better apps, faster</strong> Our team of expert engineers has created the best user experiences in some of the most popular apps worldwide.
        </p>
      </div>
      <div className="container mx-auto text-center px-11 mt-28">
        <h2>Our Team</h2>
        <div className="mt-2">the &ldquo;spec-ops&rdquo;</div>
        <div className="grid grid-cols-2 gap-6 mt-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg:gap-20">
          <Member
            id="marc"
            name="Marc"
            socialId="@mrousavy"
            link="https://github.com/mrousavy"
          />
          <Member
            id="akinn"
            name="Akinn"
            socialId="@akinn"
            link="https://github.com/mrousavy"
          />
          <Member
            id="christoph"
            name="Christoph"
            socialId="@christoph"
            link="https://github.com/mrousavy"
          />
          <Member
            id="janic"
            name="Janic"
            socialId="@janic"
            link="https://github.com/mrousavy"
          />
          <Member
            id="matei"
            name="Matei"
            socialId="@matei"
            link="https://github.com/mrousavy"
          />
          <Member
            id="szymon"
            name="Szymon"
            socialId="@szymon"
            link="https://github.com/mrousavy"
          />
          <Member
            id="thomas"
            name="Thomas"
            socialId="@thomas"
            link="https://github.com/mrousavy"
          />
          <Member
            id="viktoria"
            name="Viktoria"
            socialId="@viktoria"
            link="https://github.com/mrousavy"
          />
          <Member
            id="eric"
            name="Eric"
            socialId="@eric"
            link="https://github.com/mrousavy"
          />
          <Member
            id="mo"
            name="Mo"
            socialId="@mo"
            link="https://github.com/mrousavy"
          />
          
        </div>
      </div>
    </section>
  )
}

export default AboutUs;

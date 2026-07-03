import { Fragment } from "react";
import SectionHeader from "../SectionHeader";
import { useProfileData } from "../../context/profile-context";

export default function Contact() {
  const { contactCta, contact } = useProfileData();
  return (
    <section id="contact" className="band band-raised">
      <div className="band-inner band-inner-contact">
        <SectionHeader cmd="cat contact.txt" label="get in touch" />
        <div className="two-col">
          <div>
            <h2 className="contact-heading">{contactCta.heading}</h2>
            <p className="contact-blurb">{contactCta.blurb}</p>
          </div>
          <div className="contact-links">
            {contact.map((entry) => (
              <Fragment key={entry.label}>
                <span className="k">{entry.label}</span>
                {entry.href ? (
                  <a
                    className="t-link"
                    href={entry.href}
                    target={entry.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                  >
                    {entry.value}
                  </a>
                ) : (
                  <span className="v">{entry.value}</span>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

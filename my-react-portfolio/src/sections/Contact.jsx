import { Grid } from "../ui/Grid";
import { Typography } from "../ui/Typography/Typography.jsx";
import "./Contact.css";

export const Contact = () => {
  return (
    <Grid background="secondary">
      <section id="contact-name" className="contact-section">
        <Typography variant="h2" className="contact-heading">Let&#39;s talk</Typography>
        <div className="contact-photo">
          <img src="/assets/img2.jpeg" alt="Profile" />
        </div>
        <div className="contact-content">
          <Typography variant="h3">Johanna Eriksson</Typography>
          <Typography variant="p">+46(0)70-525 33 16</Typography>
        </div>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/johanna-e-594254155/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/iconLinkedin.svg" alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/joheri1"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/iconGithub.svg" alt="GitHub" />
          </a>
        </div>
      </section>
    </Grid>
  );
};

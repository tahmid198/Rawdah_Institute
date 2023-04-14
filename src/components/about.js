import './css/about.css';
export default function About() {
    return(

<section className="about-container">
  <div className="about">
    <div className="about-info">
      {/* About Us title */}
      <h1 style={{ fontSize: "3.5rem", color: "#fff", fontWeight: "300" }}>
        About Us
      </h1>

      {/* Rawdah Institute description */}
      <p className = "about-desc" 
      style={{ fontSize: "1.5em", color: 'white' }}>
        Rawdah Institute is an educational institute that strives to connect
        Muslims of all walks of life with the Islamic tradition. Rawdah
        Institute aims to provide high quality instruction on content that
        includes: Quranic Recitation, Arabic Language, Islamic Studies, and
        Self-Development.
      </p>

      {/* Our Mission title */}
      <h10
        className="ourMissionTitle"
        style={{ fontSize: "3.5rem", color: "#fff", fontWeight: "300" }}
      >
        Our Mission
      </h10>

      {/* Our Mission description */}
      <p
        className="ourMissionDesc"
        style={{ fontSize: "1.5em", height: 30, color: "#fff" }}
      >
        To inspire people with the truth and to empower them with knowledge
        that will lead to action.
      </p>

      {/* Our Vision title */}
      <h6
        className="ourVision"
        style={{ fontSize: "3.5rem", color: "#fff", fontWeight: "300" }}
      >
        Our Vision
      </h6>

      {/* Our Vision description */}
      <p className="ourVision-desc" style={{ fontSize: "1.5em", height: 30 }}>
      Our vision for Rawdah Institute is for it to become a vibrant, state-of-the-art, world-class institute that will provide rich and accessible content on the Islamic tradition for the everyday Muslim.
      </p>
    </div>
  </div>
</section>



           
    ) 
    
}





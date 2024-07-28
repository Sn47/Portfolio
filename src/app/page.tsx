"use client";

import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };
  

  return (
    <div className="container">
      <Head>
        <title>Ahsan Naveed</title>
        <meta name="description" content="Ahsan Naveed - Senior Experience Designer" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
      </Head>

      <main className="main">
        <h1 className="title">
          <span className="bold">Ahsan Naveed</span>         
          <br />
          <span className="designer">DESIGNER . DEVELOPER . ENGINEER . ARTIST . STUDENT</span>

        </h1>
        <br />

        {/* Portrait Section */}
        <div className="portrait-container">
          <img
            src="/WhatsApp Image 2024-07-26 at 22.40.37.jpeg"
            alt="Ahsan Naveed"
            className="portrait"
          />
        </div>
        <br />
        <br />

        <br />
        <br />
        <br />
        <br />


        {/* Education Section */}
        <section id="education">
          <h2 className="education-heading">Education</h2>
          <ul className="education-list">
            <li>
              <div className="text-content">
                <h3>BSCS at Fast University</h3>
                <div className="more-info">
                  <p>Duration: 2021-Present</p>
                  <p>Relevant Coursework: Data Structures, Algorithms, Computer Systems, Web Development</p>
                </div>
              </div>
            </li>
            <li>
              <div className="text-content">
                <h3>FSC at Government College Lahore</h3>
                <div className="more-info">
                  <p>Duration: 2019-2021</p>
                </div>
              </div>
            </li>
            <li>
              <div className="text-content">
                <h3>Matriculation at Govt. Pilot Higher Secondary School</h3>
                <div className="more-info">
                  <p>Duration: 2016-2019</p>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        {/* Work Section */}
        <section id="work">
          <h2 className="work-heading">Work</h2>
          <ul className="work-list">
            <li>
              <div className="text-content">
                <h3>Website Development Intern at LowCodeSystems</h3>
                <div className="more-info">
                  <p>Duration: (Add Duration)</p>
                  <p>Mastered MERN stack and explored OutSystems, passionate about innovation.</p>
                </div>
              </div>
              <img src="/lowcodesystem.jpg" alt="Internship Image 1" className="section-image" />
            </li>
            <li>
              <div className="text-content">
                <h3>Graphics Director at Nobel10</h3>
                <div className="more-info">
                  <p>Duration: (Add Duration)</p>
                  <p>Led UI/UX and graphic design at Nobel10, delivering impactful solutions.</p>
                </div>
              </div>
              {/* <img src="/graphics-director.jpg" alt="Graphics Director Image" className="section-image" /> */}
            </li>
            <li>
              <div className="text-content">
                <h3>ML Intern at Rapide Technologies</h3>
                <div className="more-info">
                  <p>Duration: (Add Duration)</p>
                  <p>Worked on machine learning projects and gained hands-on experience with various algorithms and tools.</p>
                </div>
              </div>
              {/* <img src="/ml-intern.jpg" alt="ML Intern Image" className="section-image" /> */}
            </li>
          </ul>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        {/* Certifications Section */}
        <section id="certifications">
          <h2 className="certifications-heading">Certifications</h2>
          <ul className="certifications-list">
            <li>
              <div className="text-content">
                <h3>IoT Grandeur Bootcamp (2022)</h3>
                <div className="more-info">
                  <p>Learned IoT basics and Arduino.</p>
                </div>
              </div>
              <img src="/WhatsApp Image 2024-07-27 at 02.17.56.jpeg" alt="Certification Image 3" className="section-image" />
              <img src="/WhatsApp Image 2024-07-27 at 02.17.57.jpeg" alt="Certification Image 3" className="section-image" />
            </li>
            <li>
              <div className="text-content">
                <h3>Devsinc Bootcamp (2023)</h3>
                <div className="more-info">
                  <p>Covered MERN stack web development fundamentals.</p>
                </div>
              </div>
              {/* <img src="/certification4.jpg" alt="Certification Image 4" className="section-image" /> */}
            </li>
            <li>
              <div className="text-content">
                <h3>AI Bootcamp Soliton (2023)</h3>
                <div className="more-info">
                  <p>Gained hands-on experience in ML and deep learning.</p>
                </div>
              </div>
              {/* <img src="/certification5.jpg" alt="Certification Image 5" className="section-image" /> */}
            </li>
            <li>
              <div className="text-content">
                <h3>Stanford University - Machine Learning Specialization</h3>
                <div className="more-info">
                  <p>Mastered AI concepts and practical ML skills in a 3-course program by Andrew Ng.</p>
                </div>
              </div>
              {/* <img src="/certification6.jpg" alt="Certification Image 6" className="section-image" /> */}
            </li>
          </ul>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* Courses Section */}
        <section id="courses">
          <h2 className="courses-heading">Courses</h2>
          <ul className="courses-list">
            <li>
              <div className="text-content">
                <h3>DeepLearning.AI - Deep Learning Specialization</h3>
                <div className="more-info">
                  <p>Learned deep learning fundamentals and advanced techniques from Andrew Ng and team.</p>
                </div>
              </div>
              {/* <img src="/certification7.jpg" alt="Certification Image 7" className="section-image" /> */}
            </li>
            <li>
              <div className="text-content">
                <h3>Machine Learning Specialist</h3>
                <div className="more-info">
                  <p>Issuing Organization: Coursera</p>
                  <p>Year: 2019</p>
                </div>
              </div>
              {/* <img src="/certification2.jpg" alt="Certification Image 2" className="section-image" /> */}
            </li>
          </ul>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* Projects Section */}
        <section id="projects">
          <h2 className="projects-heading">Projects</h2>
          <ul className="projects-list">
          <li>
  <img src="uber.jpeg" alt="Uber Backend Project" className="section-image" />
  <div className="text-content">
    <h3>Uber Backend (2021)</h3>
    <div className="more-info">
      <p>Description: Designed and implemented a backend system for Uber utilizing core Object-Oriented Programming (OOP) principles to ensure scalability and efficiency.</p>
    </div>
  </div>
</li>

<li>
  <img src="WhatsApp Image 2024-07-27 at 02.17.56 (1).jpeg" alt="Electricity Usage Meter Project" className="section-image" />
  <div className="text-content">
    <h3>Electricity Usage Meter (2021)</h3>
    <div className="more-info">
      <p>Description: Created an IoT-based electricity usage meter app, enabling real-time monitoring and data analytics of electricity consumption.</p>
    </div>
  </div>
</li>

<li>
  <img src="Mainpage · 6.31am · 07-27.jpeg" alt="Soghat Project" className="section-image" />
  <div className="text-content">
    <h3>Soghat (2022)</h3>
    <div className="more-info">
      <p>Description: Developed a plant-selling application using Vanilla HTML/CSS, providing a user-friendly interface for plant enthusiasts to browse and purchase plants.</p>
    </div>
  </div>
</li>

<li>
  <img src="211189770-b1ba1267-b246-4717-bfc6-9c29a470d7e4.png" alt="Game Dev ASM Project" className="section-image" />
  <div className="text-content">
    <h3>Game Dev (ASM) (2022)</h3>
    <div className="more-info">
      <p>Description: Programmed classic arcade games like Space Invader and Bucket Catcher in Assembly language, demonstrating low-level programming skills and game logic implementation.</p>
    </div>
  </div>
</li>

            <li>
              <img src="/jcm-09-00749-g005-550.jpg" alt="Project Image 5" className="section-image" />
              <div className="text-content">
                <h3>Mitosis Cell Detection (2024)</h3>
                <div className="more-info">
                  <p>Developed a mitosis cell detection system utilizing a U-Net architecture for accurate segmentation and a CNN-based classifier for detecting mitosis cells. Ensured high precision and reliability in cell detection.

</p>
                </div>
              </div>
            </li>
            <li>
            <img src="/Screenshot 2024-07-27 at 4.44.17 AM.png" alt="Project Image 5" className="section-image" />
              <div className="text-content">
                <h3>Stock Predictor using ML (2024)</h3>
                <div className="more-info">
                  <p>Developed a machine learning model for stock prediction using LSTM networks to analyze historical stock data. Implemented advanced feature engineering for enhanced prediction accuracy and trend forecasting.</p>
                </div>
              </div>
            </li>
            <li>
            <img src="/Plants_Sell-1646982393.png" alt="Project Image 5" className="section-image" />
              <div className="text-content">
                <h3>Plant Selling App (2024)</h3>
                <div className="more-info">
                  <p> Created a plant selling app using Flutter.</p>
                </div>
              </div>
            </li>
            <li>
             <img src="/5fdfb94d16213785ea61b730_MPsoyUkSTjWmBdQl.png" alt="Project Image 5" className="section-image" />
              <div className="text-content">
                <h3>Audio Diarization</h3>
                <div className="more-info">
                  <p>Built an audio diarization system leveraging pre-trained SpeechBrain models for speaker embedding and clustering, combined with Kaldi for accurate speaker identification and segmentation.


.</p>
                </div>
              </div>
            </li>
            <li>
            <img src="/Examples-of-facial-expressions-elicited-during-pain-and-disgust-induction-Facial.png" alt="Project Image 5" className="section-image" />
              <div className="text-content">
                <h3>Facial Emotions Video Classification</h3>
                <div className="more-info">
                  <p>Created a facial emotions classification system using pre-trained EmotionNet models and OpenFace for robust emotion detection and analysis in video streams.</p>
                </div>
              </div>
            </li>
            <li>
            <img src="/combatting-email-spam-what-you-should-know.jpeg" alt="Project Image 5" className="section-image" />

             
              <div className="text-content">
                <h3>Email Spam Detection</h3>
                <div className="more-info">
                  <p>Description: Built an email spam detection system using machine learning.</p>
                </div>
              </div>
            </li>
            <li>
            <img src="dlc2.png" alt="Project Image 5" className="section-image" />
              <div className="text-content">
                <h3>DLC Project</h3>
                <div className="more-info">
                  <p>Description: Developed a deep learning-based system to track rats for experimental purposes.</p>
                </div>
              </div>
            </li>
            <li>
            <img src="cat.jpeg" alt="Project Image 5" className="section-image" />
              <div className="text-content">
                <h3>Cat Breed Detection App (2024)</h3>
                <div className="more-info">
                  <p>Description: Created an app for detecting cat breeds using YOLO and CNN models.</p>
                </div>
              </div>
            </li>
            <li>
            <img src="Human-Pose-represented-by-skeleton-Depth-data-obtained-from-Microsoft-Kinect-TM-and-pose.png" alt="Project Image 5" className="section-image" />

              <div className="text-content">
                <h3>Human Pose Detection (2024)</h3>
                <div className="more-info">
                  <p>Description: Developed a human pose detection system using YOLO and deep learning models.</p>
                </div>
              </div>
            </li>
            
          </ul>
        </section>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        {/* Skills Section */}
        <section id="skills">
          <h2 className="skills-heading">Skills</h2>
          <ul className="skills-list">
            <li>
              <h3>Programming Languages:</h3>
              <p>C++/C/C#, JavaScript, Python, SQL, ASM, R</p>
            </li>
            <li>
              <h3>Artificial Intelligence:</h3>
              <p>Machine Learning, Deep Learning, Large Language Models, Prompt Engineering</p>
            </li>
            <li>
              <h3>Web Development:</h3>
              <p>HTML/CSS, React, MERN, Flutter, Firebase</p>
            </li>
            <li>
              <h3>Models I Have Worked On</h3>
              <p>YOLOv3, CNN, VGG16, 3D CNN, U-Net, LSTM, Naive Bayes, Isolation Forest, Quantile Regression, BERT, RoBERTa, Kalman Filter, GMM, Graph Neural Networks, Large Language Models</p>
            </li>
          </ul>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <footer className="footer">
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} Ahsan Naveed. All rights reserved.</p>
            <div className="footer-links">
              <a href="https://linkedin.com/in/your-profilehttps://www.linkedin.com/in/ahsan-naveed-805a5a230/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/Sn47" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="ahsan47sn@gmail.com">Email</a>
              <a href="/ahsan.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
              {/* Add more links as needed */}
            </div>
          </div>
        </footer>
      </main>

      {/* Floating Buttons */}
      <div className="floating-buttons">
        <button className="floating-button button-1" onClick={() => scrollToSection('education')}></button>
        <button className="floating-button button-2" onClick={() => scrollToSection('work')}></button>
        <button className="floating-button button-3" onClick={() => scrollToSection('certifications')}></button>
        <button className="floating-button button-4" onClick={() => scrollToSection('courses')}></button>
        <button className="floating-button button-5" onClick={() => scrollToSection('projects')}></button>
        <button className="floating-button button-6" onClick={() => scrollToSection('skills')}></button>
      </div>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsOpen(false)}>&times;</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

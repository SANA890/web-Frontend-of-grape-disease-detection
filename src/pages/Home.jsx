import React from "react";
import { useState } from 'react';
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import HeroHomeSlider from "../components/home-hero-slider/HeroHomeSlider";
import axios from 'axios';
function Home() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileUrl, setFileUrl] = useState('');
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
      setFileUrl(URL.createObjectURL(file));
      console.log(event);
        setSelectedFile(event.target.files[0]);
    };
    
    const handleUpload = async () => {
      if (!selectedFile) {
          console.error('No file selected');
          return;
      }

      const formData = new FormData();
      formData.append('image', selectedFile);

      try {
          const response = await axios.post('http://192.168.100.5:8000/predict', formData, {
              headers: {
                  'Content-Type': 'multipart/form-data'
              }
          });
          
          console.log('Response:', response.data);
          // Convert the object to a JSON string
          var jsonString = JSON.stringify(response.data);
          $('#num').text(jsonString);
          // Do something with the response if needed
      } catch (error) {
          console.error('Error uploading image:', error);
      }
  };

  return (
    <>
      <Header />
      <main>
        <HeroHomeSlider />
        {/* About-2 Area Start  */}
        {/* =================== */}
        <div
          className="about-area2 section-padding40 wow fadeInUp"
          data-wow-delay="0.6s"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-12 fadeIn" data-wow-delay="0.3s">
                <div className="about-img ">
                  <img src="assets/img/gallery/About_grape.png" alt="" />
                </div>
              </div>
              <div className="col-lg-5 col-md-12 fadeIn" data-wow-delay="0.4s">
                <div className="about-caption">
                  <div className="section-tittle mb-35">
                    <a id="benefits">
                      <h2>Benefits of Healthy Grapes:</h2>
                    </a>
                  </div>
                  <ul className="pera-bottom mb-30">
                    <ul>
                      <li>
                        <span className="font-weight-bold">
                          {" "}
                          Rich in Antioxidants:
                        </span>{" "}
                        Grapes are packed with antioxidants like flavonoids,
                        resveratrol, and quercetin, which help neutralize
                        harmful free radicals and protect cells from oxidative
                        damage.
                      </li>
                      <li>
                        {" "}
                        <span className="font-weight-bold">
                          Heart Health:
                        </span>{" "}
                        The high levels of polyphenols in grapes have been
                        linked to improved heart health by promoting healthy
                        blood circulation, reducing blood pressure, and
                        supporting overall cardiovascular function.
                      </li>
                      <li>
                        <span className="font-weight-bold">
                          Improved Immunity:
                        </span>{" "}
                        Grapes contain vitamin C and other immune-boosting
                        compounds that help strengthen the body's defense
                        system, making it more resistant to infections and
                        illnesses.
                      </li>
                      <li>
                        <span className="font-weight-bold">
                          Digestive Health:
                        </span>
                        Grapes are a good source of dietary fiber, which aids in
                        digestion, promotes regular bowel movements, and
                        supports a healthy gut microbiome.
                      </li>
                      <li>
                        <span className="font-weight-bold">
                          Cancer Prevention:
                        </span>
                        Some studies suggest that the antioxidants in grapes may
                        help reduce the risk of certain cancers by preventing
                        cellular damage and inhibiting the growth of cancerous
                        cells.
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =================== */}
        {/* Services Area Start  */}
        {/* =================== */}
        <section
          className="wantToWork-area section-bg3 wow fadeInup"
          data-wow-delay="0.1s"
        >
          <div className="container">
            <div className="wants-wrapper w-padding2">
              <div className="row align-items-center justify-content-between">
                <div className="col-xl-7 col-lg-9 col-md-8">
                  <div className="wantToWork-caption wantToWork-caption2">
                    <h2>
                      Grapes Detection
                      <br />
                      System
                    </h2>
                    <p>
                      Detect Your Grapes
                      <br />
                      Disease
                    </p>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4">
                  <a href="#benefits" className="btn f-right sm-left">
                    Benefits
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          className="service-area wow fadeIn"
          id="detect"
          data-wow-delay="0.5s"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="single-cat text-center mb-50">
                  <div className="table">
                    <div className="table-cell">
                      <div className="modal">
                        <div id="profile">
                        <img class="c-width" src={fileUrl}/>
                          
                          <label id="dragLabel">
                          
                          </label>
                        </div>
                        <div className="editable">
                          <i className="fa fa-pencil"></i>
                          <h1 id="imgUph1" contenteditable>
                            Upload Image
                          </h1>
                        </div>
                        <input type="file" onChange={handleFileChange} />
                      </div>
                    </div>
                  </div>
                  <input type="file" id="mediaFile" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="single-cat text-center mb-50">
                  <div className="table">
                    <div className="table-cell">
                      <div className="modal">
                        <div className="editable">
                          <i className="fa fa-pencil"></i>
                          <h1 id="imgUph1" contenteditable>
                            Predict Image
                          </h1>
                        </div>
                        <div className="stat">
                          <div id="label">Disease</div>
                          <div id="num"></div>
                        </div>
                        <button onClick={handleUpload}>Predict Image</button>
                      </div>
                    </div>
                  </div>
                  <input type="file" id="mediaFileee" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =============== */}
        {/* Team Area Start */}
        {/* =============== */}
        
        {/* ===================== */}
        {/* Grapes Disease Start */}
        {/* ===================== */}
        <div className="container mt-5 wow fadeInUp" data-wow-delay="0.6s">
          <div className="row">
            <div className="col-12">
              <div className="wantToWork-caption wantToWork-caption2">
                <h1 style={{ fontSize: "40px" }}>Diseases of Grapes</h1>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div
              className="col-md-6 text-center mx-auto d-flex justify-content-center wow fadeIn"
              data-wow-delay="0.2s"
            >
              <div className="card" style={{ width: "44rem" }}>
                <img
                  src="assets/img/hero/blackrot.JPG"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h1 className="card-title">Grape Black_rot</h1>
                  <a href="#" className="btn btn-primary">
                    Grape Black_rot
                  </a>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 text-center d-flex justify-content-center wow fadeIn"
              data-wow-delay="0.4s"
            >
              <div className="card" style={{ width: "44rem" }}>
                <img
                  src="assets/img/hero/esca.JPG"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h1 className="card-title">Grape Esca</h1>
                  <a href="#" className="btn btn-primary">
                    Grape Esca
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div
              className="col-md-6 text-center mx-auto d-flex justify-content-center wow fadeIn"
              data-wow-delay="0.6s"
            >
              <div className="card" style={{ width: "44rem" }}>
                <img
                  src="assets/img/hero/healthy.JPG"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h1 className="card-title">Grape healthy</h1>
                  <a href="#" className="btn btn-primary">
                    Grape healthy
                  </a>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 text-center d-flex justify-content-center wow fadeIn"
              data-wow-delay="0.8s"
            >
              <div className="card" style={{ width: "44rem" }}>
                <img
                  src="assets/img/hero/leafblight.JPG"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h1 className="card-title">Grape Leaf_blight</h1>
                  <a href="#" className="btn btn-primary">
                    Grape Leaf_blight
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* =================== */}
        {/* Grapes Disease End */}
        {/* =================== */}
      </main>
      <Footer />
    </>
  );
}

export default Home;

import React, { useState } from 'react';
import Data from '../../Data/projectData/corona/index'
import DepartmentForm from '../../Department/DepartmentForm';
import '../coronaCard.css'
const CoronaCard = () => {
    const sliceData = Data.slice(0, 4)
    const [data] = useState(sliceData)
    console.log(data)
    return (
        <div className="container py-3 my-3">
            <div className="d-flex justify-content-center">
                <p className="h2 text-success">
                    Coronavirus disease (COVID-19)
                </p>
            </div>
            <div className="row px-5">
                <div className="d-flex mr-3 fontline">
                    <div className="line mt-3"></div>
                    <p className="h6 text-success">Recent News</p>
                    <div className="line mt-3"></div>
                </div>
                {
                    data.map((each, index) =>
                        <>
                            <div className=" col-md-3 mt-3">
                                <div class="parent">
                                    <div class="child">
                                        <img className="img-fluid cardmm" src={each.img} alt="" />
                                    </div>
                                </div>
                                <div className="wrapper">
                                    <small>{each.date}</small>
                                    <p className="mt-3 texttt text-success">{each.title}</p>
                                    <small></small>
                                    <div className="d-flex justify-content-center mb-3">
                                        <button className="detailsbtn center">See Details</button>
                                    </div>
                                </div>

                            </div>
                        </>
                    )
                }
            </div>
            <div className="ml-4 p-5 ">
                <div className="d-flex mr-3 fontline">
                    <div className="line mt-3"></div>
                    <p className="h6 text-success">Overview</p>
                    <div className="line mt-3"></div>
                </div>
                <p>Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.</p>
                <p>Most people infected with the virus will experience mild to moderate respiratory illness and recover without requiring special treatment. However, some will become seriously ill and require medical attention. Older people and those with underlying medical conditions like cardiovascular disease, diabetes, chronic respiratory disease, or cancer are more likely to develop serious illness. Anyone can get sick with COVID-19 and become seriously ill or die at any age.</p>
                <p>The best way to prevent and slow down transmission is to be well informed about the disease and how the virus spreads. Protect yourself and others from infection by staying at least 1 metre apart from others, wearing a properly fitted mask, and washing your hands or using an alcohol-based rub frequently. Get vaccinated when it’s your turn and follow local guidance.</p>
                <p>The virus can spread from an infected person’s mouth or nose in small liquid particles when they cough, sneeze, speak, sing or breathe. These particles range from larger respiratory droplets to smaller aerosols. It is important to practice respiratory etiquette, for example by coughing into a flexed elbow, and to stay home and self-isolate until you recover if you feel unwell.</p>
            </div>

            <div className="d-flex justify-content-center">
                <div className="line mt-3"></div>
                <p className="h4 text-success">Prevention</p>
                <div className="line mt-3"></div>
            </div>
            <div className="d-flex align-items-center flex-column">

                <ul>
                    <p className="h5 mt-3">To prevent infection and to slow transmission of COVID-19, do the following:</p>
                    <p className="h6 mt-4">To prevent infection and to slow transmission of COVID-19, do the following:</p>
                    <li >Get vaccinated when a vaccine is available to you.</li>
                    <li>Stay at least 1 metre apart from others, even if they don’t appear to be sick.</li>
                    <li>Wear a properly fitted mask when physical distancing is not possible or when in poorly ventilated settings.</li>
                    <li>Choose open, well-ventilated spaces over closed ones. Open a window if indoors.</li>
                    <li>Wash your hands regularly with soap and water or clean them with alcohol-based hand rub.</li>
                    <li>Cover your mouth and nose when coughing or sneezing.</li>
                    <li>If you feel unwell, stay home and self-isolate until you recover.</li>
                </ul>
            </div>

            <div className="d-flex justify-content-center mt-5">
                <div className="container">
                    <div className="d-flex justify-content-center">
                <div className="line mt-3"></div>
                <a className="h4 text-success" href="">Any Urgent needed</a>
                <div className="line mt-3"></div>
            </div>
                    <DepartmentForm></DepartmentForm>
                </div>

            </div>

        </div>
    );
};

export default CoronaCard;

import React from 'react';

function AboutUs() {
    return (
        <div className="container">
            <section className="about__wrapper">
                <div className="about__text">
                    <h3 className="about__text-header">O nas</h3>
                    <img src="src/assets/Decoration.svg" alt="" className="about__text-decoration"/>
                    <p className="about__text-content">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                    <img src="src/assets/Signature.svg" alt="" className="about__text-signature"/>
                </div>
                <div className="about__img"></div>
            </section>
        </div>
    );
}

export default AboutUs;
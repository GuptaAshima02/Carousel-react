import React, { useState } from "react";
import homecss from "./home.module.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import service1 from './service-box-image-4.jpg'
import service2 from './services-img-1.jpg'
import service3 from './service-box-image-1.jpg'
import service4 from './service-box-image-2.jpg'
import service5 from './service-box-image-3.png'
import video from './videoplayback.mp4'




const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const serviceCardsItems = [
    {
      id: 1,
      image: service1,
      title: "Cognitive Solutions",
      link:"/cognitive-solution"
    },
    {
      id: 2,
      image: service2,

      title: "Cloud Platform Engineering",
      link:"/cloud-platform-engineering"

    },
    {
      id: 3,
      image: service3,

      title: "Software Product Engineering",
      link:"/software-product-engineering"

    },
    {
      id: 4,
      image: service4,

      title: "Salesforce CRM",
      link:"/salesforce-crm"

    },
    {
      id: 5,
      image: service5,

      title: "Hardware Product Engineering",
      link:"/hardware-product-engineering"

    },
  ];

  const handleControlClick = (direction) => {
    if (direction === "previous") {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex + serviceCardsItems.length - 1) % serviceCardsItems.length
      );
    } else {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % serviceCardsItems.length
      );
    }
  };

  const updateServiceCards = () => {
    // Update the serviceCardsItems based on currentIndex
    const updatedServiceCardsItems = serviceCardsItems.map((card, index) => {
      const newIndex =
        ((index - currentIndex + serviceCardsItems.length) %
          serviceCardsItems.length) +
        1;
      return { ...card, newIndex };
    });

    return updatedServiceCardsItems;
  };

  const updatedServiceCardsItems = updateServiceCards();

  return (
    <>
    <div className={homecss.main}>
      <div className={homecss.video}>
        <video autoPlay muted loop playsInline preload="metadata">
          <source
            src={video}
            type="video/mp4"
          />
        </video>
      </div>
      <section className={`${homecss.cardssec}`}>
        <Container>
          <div className={homecss.clienttitle}>
            <h2 className="text-center pt-5 mt-4">SERVICES WE PROVIDE</h2>
          </div>
          <Row>
            <Col className={homecss.serviceCards}>
              <div className={homecss.serviceCards_container}>
                {updatedServiceCardsItems.map((card) => (
                   <Card
                     className={`${homecss.serviceCards_item} ${
                       homecss["item" + card.newIndex]
                     }`}
                   >
                     <Card.Img
                       variant="top"
                       src={card.image}
                       className={homecss.cardImg}
                     />
                     <Card.Body className={homecss.cardBody}>
                       <Card.Title className={homecss.cardTitle}>
                         {card.title}
                       </Card.Title>
                     </Card.Body>
                   </Card>
                ))}
              </div>
              <div className={homecss.serviceCards_controls}>
                <button
                  className={homecss.serviceCards_controls_previous}
                  onClick={() => handleControlClick("previous")}
                >
                  <i class="fa-solid fa-angle-left"></i>
                </button>
                <button
                  className={homecss.serviceCards_controls_next}
                  onClick={() => handleControlClick("next")}
                >
                  <i class="fa-solid fa-angle-right"></i>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      </div>
    </>
  );
};

export default Services;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import homecss from "./home.module.css";
// import GetRoute from "../../Container/server";
// import { Card, Container, Row, Col } from "react-bootstrap";

// const Services = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const serviceCardsItems = [
//     {
//       id: 1,
//       image: "service-box-image-4.jpg",
//       title: "Cognitive Solutions",
//     },
//     {
//       id: 2,
//       image: "services-img-1.jpg",
//       title: "Cloud Platform Engineering",
//     },
//     {
//       id: 3,
//       image: "service-box-image-1.jpg",
//       title: "Software Product Engineering",
//     },
//     {
//       id: 4,
//       image: "service-box-image-2.jpg",
//       title: "Salesforce CRM",
//     },
//     {
//       id: 5,
//       image: "service-box-image-3.png",
//       title: "Hardware Product Engineering",
//     },
//   ];

//   const handleControlClick = (direction) => {
//     if (direction === "previous") {
//       setCurrentIndex(
//         (prevIndex) =>
//           (prevIndex + serviceCardsItems.length - 1) % serviceCardsItems.length
//       );
//     } else {
//       setCurrentIndex(
//         (prevIndex) => (prevIndex + 1) % serviceCardsItems.length
//       );
//     }
//   };

//   const updateServiceCards = () => {
//     // Update the serviceCardsItems based on currentIndex
//     const updatedServiceCardsItems = serviceCardsItems.map((card, index) => {
//       const newIndex =
//         ((index - currentIndex + serviceCardsItems.length) %
//           serviceCardsItems.length) +
//         1;
//       return { ...card, newIndex };
//     });

//     return updatedServiceCardsItems;
//   };

//   const updatedServiceCardsItems = updateServiceCards();

//   return (
//     <>
//       <div className={homecss.main}>
//       <div className={homecss.video}>
//         <video autoPlay muted loop playsInline preload="metadata">
//           <source
//             src={GetRoute("/videoplayback.mp4")}
//             type="video/mp4"
//           />
//         </video>
//       </div>
//         <section className={`${homecss.cardssec}`}>
//           <Container>
//           <div className={homecss.clienttitle}>
//             <h2 className="text-center">SERVICES WE PROVIDE</h2>
//           </div>
//             <Row>
//               <Col className={homecss.serviceCards}>
//                 <div className={homecss.serviceCards_container}>
//                   {updatedServiceCardsItems.map((card) => (
//                     <Link key={card.id} to={`/${card.title.toLowerCase().replace(/\s+/g, "-")}`}>
//                       <Card
//                         className={`${homecss.serviceCards_item} ${
//                           homecss["item" + card.newIndex]
//                         }`}
//                       >
//                         <Card.Img
//                           variant="top"
//                           src={GetRoute(`/${card.image}`)}
//                           className={homecss.cardImg}
//                         />
//                         <Card.Body className={homecss.cardBody}>
//                           <Card.Title className={homecss.cardTitle}>
//                             {card.title}
//                           </Card.Title>
//                         </Card.Body>
//                       </Card>
//                     </Link>
//                   ))}
//                 </div>
//                 <div className={homecss.serviceCards_controls}>
//                 <button
//                   className={homecss.serviceCards_controls_previous}
//                   onClick={() => handleControlClick("previous")}
//                 >
//                   <i class="fa-solid fa-angle-left"></i>
//                 </button>
//                 <button
//                   className={homecss.serviceCards_controls_next}
//                   onClick={() => handleControlClick("next")}
//                 >
//                   <i class="fa-solid fa-angle-right"></i>
//                 </button>
//                 </div>
//               </Col>
//             </Row>
//           </Container>
//         </section>
//       </div>
//     </>
//   );
// };

// export default Services;

import { Text } from "@chakra-ui/react";
import styles from "./Aboutlocaion.module.css"

const Aboutlocaion = () => {
  return (
    <div>
        {/*-----heading of about section----------  */}
      <h1 className={styles.heading} >
        {" "}
        About Location
      </h1>
      {/* -------content of about section------------ */}
      <Text className={styles.about_text} >
        <br></br>
        <br></br>
        Goa is India's smallest state by area and the fourth smallest by
        population. Located on the west coast of India in the region known as
        the Konkan, it is bounded by the state of Maharashtra to the north, and
        by Karnataka to the east and south, while the Arabian Sea forms its
        western coast. Panaji is the state's capital, while Vasco da Gama is the
        largest city. The historic city of Margao still exhibits the cultural
        influence of the Portuguese, who first landed in the early 16th century
        as merchants, and conquered it soon thereafter. The Portuguese overseas
        territory existed for about 450 years, until it was annexed by India in
        1961. Renowned for its beaches, places of worship and world heritage
        architecture, Goa is visited by large numbers of international and
        domestic tourists each year. It also has rich flora and fauna, owing to
        its location on the Western Ghats range, which is classified as a
        biodiversity hotspot.
        <br></br>
        <br></br>
        Goa has two World Heritage Sites: the Bom Jesus Basilica and a few
        designated convents. The Basilica holds the mortal remains of St.
        Francis Xavier, regarded by many Catholics as the patron saint of Goa
        (the patron of the Archdiocese of Goa is actually the Blessed Joseph
        Vaz). Once every twelve years, the body is taken down for veneration and
        for public viewing. The last such event was conducted in 2004. The
        Velhas Conquistas regions are also known for its Goa-Portuguese style
        architecture. There are many forts in Goa such as Tiracol, Chapora,
        Corjuem, Aguada, Gaspar Dias and Cabo de Rama.
        <br></br>
        <br></br>
        In many parts of Goa, mansions constructed in the Indo-Portuguese style
        architecture still stand, though in some villages, most of them are in a
        dilapidated condition. Fontainhas in Panaji has been declared a cultural
        quarter, showcasing the life, architecture and culture of Goa. Some
        influences from the Portuguese era are visible in some of Goa's temples,
        notably the Mangueshi Temple and the Mahalasa Temple, although after
        1961, many of these were demolished and reconstructed in the indigenous
        Indian style. Goa also has a few museums, the two important ones being
        Goa State Museum and the Naval Aviation Museum. The Aviation museum is
        the only one of its kind in the whole of India. Also, a place not well
        known to tourists is the Goa Science Center, which is located in Panjim.
      </Text>
    </div>
  );
};
export default Aboutlocaion;

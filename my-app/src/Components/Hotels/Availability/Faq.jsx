import { Text } from "@chakra-ui/react";
import styles from "./Faq.module.css"


const Faq = ({props}) => {
  return (
    <div>
      <h1 className={styles.heading_faq}>
        FAQs
      </h1>
     {/* --------Map FAQ data comming using props ------- */}
      {props.faq.map((el) => {
        return (
          <Text className={styles.faq_text}> 
            <br></br>
            <br></br>
            <span style={{ color: "black", fontWeight: "500" }}>    
              {" "}
              {el.quistion}         
            </span>
            <br></br>
            <br></br>
            {el.answer}
          </Text>
        );
      })}
    </div>
  );
};

export default Faq;

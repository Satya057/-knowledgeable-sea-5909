import { Box, Heading, Text } from "@chakra-ui/react";
import styles from "./faq.module.css";
export default function Faq() {
  return (
    <Box className={styles.faq}>
      <Box
       className={styles.faq1}
      >
        <Heading as='h1' size='4xl' fontSize={51.98102000000001} margin="0.67em 0" >Frequenty AskeQuestions</Heading>
        <Heading as='h5' size='sm' margin="0 0 10px " fontSize='18.2px' fontWeight={600}>
          Why should you make sure that you always book through Tripvillas.com
          and not directly with the owner?
        </Heading>
        <Text margin="0 0 10px ">
          Your credit card information is safe and never shared with the owners
          of properties.
        </Text>

        <Text margin="0 0 10px ">
          You benefit from our intervention in case the property owner has
          misrepresented the facts or anything goes wrong during your travel.
        </Text>

        <Text margin="0 0 10px ">
          You benefit from our refund policy in case you decide to change your
          mind.
        </Text>
        <Text margin="0 0 10px ">
          You need to have at least 100USD in your account before you request
          for payout. On being eligible for payout, you can empty your account.
        </Text>

        <Text margin="0 0 10px ">How do I cancel my booking?</Text>
        <Text margin="0 0 10px ">
          Please contact our team at support@tripvillas.com if you want to
          cancel your booking and they will assist you.
        </Text>

        <Heading as='h5' fontSize='18.2px' fontWeight={600} size='sm' margin="0 0 10px ">What is the cancellation policy?</Heading>
        <Text margin="0 0 10px ">
          Cancellations done 90 Days before the check-in date receive 50% of the
          booking amount minus a 200USD processing fee.
        </Text>
        <Text margin="0 0 10px ">
          Cancellations done less than 90 days before the check-in date are not
          eligible for any refunds.
        </Text>
        <Text margin="0 0 10px ">
          Please note that our properties are private holiday homes and not
          Hotels with dedicated marketing teams. It is not possible for the
          owners to accommodate cancellations especially due to the seasonal
          nature of travel.
        </Text>
        <Heading as='h5' fontSize='18.2px' fontWeight={600} size='sm' margin="0 0 10px ">What happens with my money?</Heading>
        <Text margin="0 0 10px ">
          For all bookings made on our website www.tripvillas.com, as soon as
          your payment has been received you will be able to access your
          voucher. Please note that you are not protected if you pay any of the
          owners directly or outside our system.
        </Text>
        <Text margin="0 0 10px ">
          As soon as your payment has been received you will be able to access
          your voucher.
        </Text>
        <Text margin="0 0 10px ">
          All funds are initially transferred to Tripvillas' escrow service.
        </Text>
        <Text margin="0 0 10px ">
          If you notice any problems with your booking within 48 hours of
          arriving at the property, inform us immediately and we will freeze the
          funds. Otherwise, the funds are released to the owner's account.
        </Text>

        <Text margin="0 0 10px ">
          In case of a dispute, our customer support team will get in touch with
          the traveler and the owner to resolve the issue.
        </Text>
      </Box>
    </Box>
  );
}

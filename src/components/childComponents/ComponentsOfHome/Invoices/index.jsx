import React from "react";
import TextDisplaying from "../../TextDisplaying";
import Transaction from "../../Transaction";

const Invoices = () => {
  return (
    <div className="invoices-text">
      <TextDisplaying
        textContent="Invoices"
        fontSize="20px"
        fontWeight="500"
        color="var(--grey-color)"
      ></TextDisplaying>

      <Transaction
        id="#123456"
        imageUrl={
          "https://images.unsplash.com/photo-1568602562958-75fa1a44ab44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRyYWdvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
        }
        name={"Shopee pay"}
        time={"10:20:05 Jun 23"}
        amount={"100.5"}
      />

      <Transaction
        id="#123456"
        imageUrl={
          "https://images.unsplash.com/photo-1568602562958-75fa1a44ab44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRyYWdvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
        }
        name={"Shopee pay"}
        time={"10:20:05 Jun 23"}
        amount={"100.5"}
      />

      <Transaction
        id="#123456"
        imageUrl={
          "https://images.unsplash.com/photo-1568602562958-75fa1a44ab44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRyYWdvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
        }
        name={"Shopee pay"}
        time={"10:20:05 Jun 23"}
        amount={"100.5"}
      />
    </div>
  );
};

export default Invoices;

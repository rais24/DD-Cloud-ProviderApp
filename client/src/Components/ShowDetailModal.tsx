import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { GET_SERVICE_BY_SERVICE_ID } from "../GraphQL/Queries";

function ShowDetailModal(props: {showModal: boolean, serviceId: string}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const {showModal, serviceId} = props;
  let service_id: number = serviceId === undefined?0:parseInt(serviceId); 

  const {data} = useQuery(GET_SERVICE_BY_SERVICE_ID,{variables :{service_id}});

  useEffect(() => {
     if(serviceId !== "0")
        setModalIsOpen(true);
  },[showModal, serviceId])

  return (
    <>
    {data && data.getServiceByServiceId.map((service: any) => {
      return(
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} ariaHideApp={false}>
        <h2>{service.service}</h2>
        <p>{service.description}</p>
        <p>{service.cost}</p>
        <div>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
      )
    })}
     </> 
  );

}

export default ShowDetailModal;
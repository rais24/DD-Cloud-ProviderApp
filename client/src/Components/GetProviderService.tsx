import { useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GET_SERVICE_BY_PROVIDER_ID, SEARCH_SERVICE } from '../GraphQL/Queries'
import ShowDetailModal from './ShowDetailModal';

function GetProviderService(provider_id : number, search_text: string) {
   // console.log(search_text);
    const [toggleModal, setToggleModal] = useState(false);
    const [serviceId, setServiceId] = useState("0");
    let apiname = SEARCH_SERVICE;
    let params;
    if(search_text === ''){
      apiname = GET_SERVICE_BY_PROVIDER_ID;
      params = {variables : {provider_id}};
    }
    else{
      apiname = SEARCH_SERVICE;
      params = {variables:{provider_id: provider_id, search_text: search_text}};
    }
    var {data} = useQuery(apiname,params);

    const openDetailModal = (serviceid: string) => {
      setToggleModal(!toggleModal);
      setServiceId(serviceid);
    }

  return (
        <>
        {data && data !== undefined && data.getServiceByProviderId !== undefined && data.getServiceByProviderId.map((service :any) => {
           return(<div className="cont-part" key={service.serviceid}>
             <button type='button' onClick={() => openDetailModal(service.serviceid)}>{service.service}</button>
             </div>)
        })}
        {data && data !== undefined && data.searchService !== undefined && data.searchService.map((service :any) => {
           return(<div className="cont-part" key={service.serviceid}>
             <button type='button' onClick={() => openDetailModal(service.serviceid)}>{service.service}</button>
             </div>)
        })}

        <ShowDetailModal showModal={toggleModal} serviceId={serviceId}/>
        </>
    
  )
}

export default GetProviderService
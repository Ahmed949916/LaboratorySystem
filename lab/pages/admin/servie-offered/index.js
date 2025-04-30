import ServicesOffered from '../../../container/Admin/ServicesOffered'
 
import React from 'react'

import { servicesOfffered } from "../../../../testOfferedData"; 
const Page = ({ services }) => {
  return (
    <div>
      <ServicesOffered services={services} />
    </div>
  );
};

export default Page;

export async function getStaticProps() {
  return {
    props: {
      services: servicesOfffered
    },
  };
}
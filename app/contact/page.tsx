"use client"

import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import {sendEmail} from '../api/sendEmail/sendEmail'
import Carouselc from '../../components/Carouselc';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

 

 


export default function Home() { 
      const router = useRouter(); 
      const [inputs, setInputs] = useState({});
      const [active, setActive] = useState(false) 
      const [value, setValue] = useState(''); 
  
       
  
      const handleChange = (e: any) => { 
          if(e.target.name == "phone"){ 
              const numericValue = e.target.value.replace(/[^0-9]/g, ''); 
              setValue(numericValue);
          }
  
          const name = e.target.name;
          const value = e.target.value;
          setInputs((prevState) => ({ ...prevState, [name]: value}));
      };
   
  


  return (
    <>

<Carouselc />
      <div className="">
        <div className="container-xl">
          <br />
          <h4 id='titlemymymy' style={{textAlign:"center"}}>GET IN TOUCH</h4>

        </div>
      </div>
      <div className="container-xl mt-5">
        <div>
          <div className="pl-5 pt-4 pr-5"> 
<form action={async formData => { await sendEmail(formData); }}>
  <div className="row">
    <div className="col-md-6">
      <div className="form-group row">
        <div className="col-sm-12">
          <input
            className="form-control borderc" 
            name="firstname"
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-group row pt-2">
        <div className="col-sm-12">
          <input
            className="form-control borderc"
            style={{ border: '1px solid #c5c5c5' }}
            name="lastname"
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-group row pt-2">
        <div className="col-sm-12">
          <input
            className="form-control borderc"
            style={{ border: '1px solid #c5c5c5' }}
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-group row pt-2">
        <div className="col-sm-12">
          <input
            className="form-control borderc"
            style={{ border: '1px solid #c5c5c5' }}
            name="phone"
            type="text"
            placeholder="Phone Number"
            value={value}
            onChange={handleChange}
            required
          />
        </div>
      </div>
    </div>

    <div className="col-md-6">
      <div className="form-group row">
        <div className="col-sm-12">
          <textarea
            className="form-control form-control-text-area borderc"
            style={{ border: '1px solid #c5c5c5' }}
            name="message"
            placeholder="Message"
            rows={9}
            required
            onChange={handleChange}
            defaultValue={""}
          />
        </div>
      </div>
    </div>
  </div>

  <div className="form-group row pt-2">
    <div className="col-md-5"></div>
    <div className="col-md-2">
      <button type="submit" className="klaviyo_submit_button" style={{ padding: "1.5em" }}>
        Send
      </button>
    </div>
    <div className="col-md-5"></div>
  </div>
  <br />
</form>

          </div>
        </div>
        
      </div>
      <div className="clearfix" />



<div className="container-xl mt-4 mb-5 text-left md:text-center">
  <h5 className="mb-4" id="titlemymymy">Contact Information</h5>
  <div className="mx-auto text-base leading-relaxed inline-block text-left md:text-center">
    <p className="flex items-center justify-start  mb-2">
      <FaEnvelope style={{ color: '#fffd04', marginRight: '8px' }} />
      <strong>Email:&nbsp;</strong> <a href="mailto:info@azeec.com">info@azeec.com</a>
    </p>
    <p className="flex items-center justify-start  mb-2">
      <FaMapMarkerAlt style={{ color: '#fffd04', marginRight: '8px' }} />
      <strong>Sin El Fil:&nbsp;</strong> Chalouhi Center, Blvd, Beirut, Lebanon
    </p>
    <p className="flex items-center justify-start ">
      <FaMapMarkerAlt style={{ color: '#fffd04', marginRight: '8px' }} />
      <strong>Burj Hammoud:&nbsp;</strong> Cinema Royal, St. Haykazian Center, GF, Beirut, Lebanon
    </p>
  </div>
</div>





<style
  dangerouslySetInnerHTML={{
    __html: `
      .form-control {
        border: 1px solid #c5c5c5 !important;
      }
    `,
  }}
/>

      
      
    </>

  )
}

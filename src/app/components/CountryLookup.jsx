"use client";

import React, { useEffect, useState } from 'react'

export default function CountryLookup() {

    const [country, setCountry] = useState("United States");

    useEffect(() => {
        fetch("http://ip-api.com/json/").then((res)=> res.json()).then((data)=>setCountry(data.country));
    }, [])

  return (
    <div>{country}</div>
  )
}

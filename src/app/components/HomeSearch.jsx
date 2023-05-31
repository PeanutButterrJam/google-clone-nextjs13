"use client";

import React, {useState} from 'react';
import {useRouter} from 'next/navigation';
import {AiOutlineSearch} from 'react-icons/ai';
import {BsFillMicFill} from 'react-icons/bs';
import { images } from 'next.config';

export default function HomeSearch() {

    const router = useRouter();
    const[input, setInput]= useState("");
    const [loading, setLoading] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
       if(!input.trim()) return;
       router.push(`/search/web?searchTerm=${input}`)
    };

    async function randomSearch(e){
        setLoading(true);
        const randomWord = await fetch("https://random-word-api.herokuapp.com/word").then((res) => res.json()).then((data) => data[0]);
        if (!randomWord) return;
        router.push(`/search/web?searchTerm=${randomWord}`);
        setLoading(false);
    }

    return (
      <div>
          <form onSubmit={handleSubmit} className='flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full focus-within: shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl'>
          <AiOutlineSearch className='text-xl text-gray-500 mr-3'/>
          <input type='text' className='flex-grow focus:outline-none' onChange={(e) => setInput(e.target.value)} value={input}/>
          <BsFillMicFill className='text-lg'/>
          </form>
          
          <div className='flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8 '>
              <button onClick={handleSubmit} className='btn flex items-center justify-center'>Google Search</button>
              <button onClick={randomSearch} disabled={loading} className='btn flex items-center justify-center disabled:opacity-80'>{loading ? (<img className="h-10 m-auto " src="pulse.svg" alt="loading..." />) : "I Am Feeling Lucky"}</button>
          </div>
      </div>
    );
  };
  ;
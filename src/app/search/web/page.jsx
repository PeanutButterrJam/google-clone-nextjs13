import Link from 'next/link';
import React from 'react'
import { TbH1 } from 'react-icons/tb';

export default async function page({searchParams}) {

    const response = await fetch(`
    https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
    )

    if(!response.ok){
        throw new Error ("Something went wrong");
    }
    
    const data = await response.json();

    console.log(data);
    
    const results = data.items;

    if(!results){
        return(
            <div className="flex flex-col justify-center items-center pt-10">
                <h1 className="text-3xl mb-4">No results found</h1>
                <p className='text-lg'>Try searching for something else or go back to the homepage.</p>
                <Link href="/" className='text-blue-500 pt-1'>
                Home
                </Link>
            </div>
        )
    }

  return (
    <div>{results && results.map((result) => <h1>{result.title}</h1>)}</div>
  )
}

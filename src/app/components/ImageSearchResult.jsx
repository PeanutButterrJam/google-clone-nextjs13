import Link from 'next/link'
import React from 'react'

export default function ImageSearchResult({results}) {
  return (
    <div className="pb-24 mt-4 mx-3">
        <div className="grid grid-cols01 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-x-4 px-3">
            {results.items.map((result) => (
                <div key={result.link} className="mb-8">
                <div className='group'>
                <Link href={result.image.contextLink}>
                <img src={result.link} alt={result.title} className="h-40 group-hover:shadow-xl w-full object-contain transition-shadow"/>
                </Link>
                <Link href={result.image.contextLink}>
                <h2 className="group-hover:underline truncate text-md">{result.title}</h2>
                </Link>
                <Link href={result.image.contextLink}>
                <p className="group-hover: underline text-gray-600 text-sm">{result.displayLink}</p>
                </Link>
                </div>
                </div>
            ))}
        </div>
    </div>
  )
}

import SearchHeading from '../components/SearchHeading'
import '.././globals.css'

export default function RootLayout({ children }) {
  return (
      <div>
        <SearchHeading /> 
        {children}
      
      </div>
  )
}

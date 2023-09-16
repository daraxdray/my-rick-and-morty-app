import * as React from 'react'
import CharacterListItem from './CharacterListItem'
import Character from '../interfaces/character'
import { useState } from 'react'

type Props = {
  items: Character[]
}
const ITEMS_PER_PAGE = 25; // Number of items to display per page

const List = ({ items }: Props) => { 
  const [currentPage, setCurrentPage] = useState(1);
  
   // Calculate the range of items to display based on the current page
   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
   const endIndex = startIndex + ITEMS_PER_PAGE;
   const currentItems = items.slice(startIndex, endIndex);

    // Function to handle page changes
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

   
  return  (
    <div>
      
  <ol>
    {currentItems.map((item) => (
      <li key={item.id} >
        <CharacterListItem character={item} />
      </li>
    ))}
  </ol>


   {/* Pagination controls */}
   <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={endIndex >= items.length}
        >
          Next
        </button>
      </div>
  </div>
)
    }
export default List

import React from 'react'
import Header from '../components/seat-layout/Header'
import Footer from '../components/seat-layout/Footer'
import { useParams } from 'react-router-dom'
import {keepPreviousData, useQuery} from "@tanstack/react-query"
import { getShowById } from '../apis'
const SeatLayout = () => {
    const { showId } = useParams();

const {
  data: showData,
  isLoading,
  isError,
  error,
} = useQuery({
  queryKey: ["show", showId],
  queryFn: async () => await getShowById(showId),
  placeholderData:keepPreviousData,
  select:(res)=>res.data,
});



  return (
    <>
      <div className='h-screen overflow-y-hidden'>

        {/* Fixed Header */}
        <div className='fixed top-0 left-0 w-full z-10'>
          <Header showData={showData} />
        </div>
        {/* Scrollable Seat Layout */}
        {/* Fixed Footer */}
        <div className='fixed bottom-0 left-0 w-full h-[100px] bg-white border-t border-gray-200 py-4 px-4 z-10'>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default SeatLayout


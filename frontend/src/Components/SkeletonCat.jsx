import React from 'react'
import { Container,Skeleton } from '@mui/material'
const SkeletonCat = () => {
  return (
    <div className='flex md:flex-row justify-around flex-col w-[1300px] p-10'>
        <div className='flex flex-col w-1/4 gap-2'>
            <Skeleton sx={{ bgcolor: 'grey.400' }} variant="rounded" width={"100%"} height={160}  />
            <div className='w-full flex gap-x-2 items-center'>
                <Skeleton sx={{ bgcolor: 'grey.400' }} variant="circular" width={40} height={40}  />
                <Skeleton sx={{ bgcolor: 'grey.400' }} variant="rounded" width={"90%"} height={30}  />
            </div>
            <Skeleton sx={{ bgcolor: 'grey.400' }} variant="rounded" width={"100%"} height={50}  />
            <Skeleton sx={{ bgcolor: 'grey.400' }} variant="rounded" width={"100%"} height={20}  />
            <Skeleton sx={{ bgcolor: 'grey.400' }} variant="rounded" width={"100%"} height={30}  />
        </div>
        <div className='flex flex-col w-1/4 gap-2'>
            <Skeleton sx={{ bgcolor: 'grey.400' }} variant="rounded" width={"100%"} height={160}  />
            <div className='w-full flex gap-x-2 items-center'>
                <Skeleton sx={{ bgcolor: 'grey.400' }} variant="circular" width={40} height={40}  />
                <Skeleton sx={{ bgcolor: 'grey.400' }} variant="rounded" width={"90%"} height={30}  />
            </div>
            <Skeleton sx={{ bgcolor: 'grey.400' }} variant="rounded" width={"100%"} height={50}  />
            <Skeleton sx={{ bgcolor: 'grey.400' }} variant="rounded" width={"100%"} height={20}  />
            <Skeleton sx={{ bgcolor: 'grey.400' }} variant="rounded" width={"100%"} height={30}  />
        </div>
        <div className='flex flex-col w-1/4 gap-2'>
            <Skeleton sx={{ bgcolor: 'grey.400' }} variant="rounded" width={"100%"} height={160}  />
            <div className='w-full flex gap-x-2 items-center'>
                <Skeleton sx={{ bgcolor: 'grey.400' }} variant="circular" width={40} height={40}  />
                <Skeleton sx={{ bgcolor: 'grey.400' }} variant="rounded" width={"90%"} height={30}  />
            </div>
            <Skeleton sx={{ bgcolor: 'grey.400' }} variant="rounded" width={"100%"} height={50}  />
            <Skeleton sx={{ bgcolor: 'grey.400' }} variant="rounded" width={"100%"} height={20}  />
            <Skeleton sx={{ bgcolor: 'grey.400' }} variant="rounded" width={"100%"} height={30}  />
        </div>    
    </div>
  )
}

export default SkeletonCat
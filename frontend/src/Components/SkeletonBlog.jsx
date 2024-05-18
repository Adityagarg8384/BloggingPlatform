import { Container,Skeleton } from '@mui/material'
import React from 'react'

const SkeletonBlog = () => {
  return (
    <Container sx={{
        width:"65%",
        display:"flex",
        flexDirection:"column",
        p:5,
        // alignItems:"center",
        rowGap:2
        
    }}>
        <Skeleton sx={{ bgcolor: 'grey.400' }} variant="rounded" width={"100%"} height={60}  />
        <Skeleton sx={{ bgcolor: 'grey.400' }} variant="rounded" width={"80%"} height={40}  />
        <hr/>
        <div className='w-full h-full flex gap-x-4'>
            <Skeleton sx={{ bgcolor: 'grey.400' }} variant="circular" width={60} height={60}  />
            <div className='h-full w-[90%] flex flex-col justify-center gap-y-2'>
                <Skeleton variant="rounded" sx={{ bgcolor: 'grey.400' }} width={"50%"} height={25}  />
                <Skeleton variant="rounded" sx={{ bgcolor: 'grey.400' }} width={"50%"} height={25}  />
            </div>
        </div>
        <hr/>
        <Skeleton variant="rounded" sx={{ bgcolor: 'grey.400' }} width={"100%"} height={80}  />
        <Skeleton variant="rounded" sx={{ bgcolor: 'grey.400' }} width={"100%"} height={200}  />
        <Skeleton variant="rounded" sx={{ bgcolor: 'grey.400' }} width={"100%"} height={100}  />
    </Container>
  )
}

export default SkeletonBlog
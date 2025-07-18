import React from 'react'

import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

const Home = () => {
    return (
        <>
            <Hero />
            <HomeCards />
            <JobListings qtyToShow={3} />
            <ViewAllJobs />
        </>
    )
}

export default Home
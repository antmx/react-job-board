//import React from 'react'
import { useState, useEffect } from 'react'
import JobListing from './JobListing'
//import jobs from '../jobs.json-array.json'
import Spinner from './Spinner'

const JobListings = ({ qtyToShow = -1 }) => {

    //const jobsToList = qtyToShow > -1 ? jobs.slice(0, qtyToShow) : jobs;
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                // Simulating an API call
                // const response = await new Promise((resolve) => {
                //     setTimeout(() => resolve(jobs), 1000);
                // });

                let url = '/api/jobs' + (qtyToShow > -1 ? '?_limit=${qtyToShow}' : '')

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();

                setJobs(qtyToShow > -1 ? data.slice(0, qtyToShow) : data);
            } catch (error) {
                console.error("Error fetching jobs data:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchJobs();
    }, []);

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {qtyToShow ? 'Featured Jobs' : 'Browse Jobs'}
                </h2>

                {
                    // jobsToList.map((job) => (
                    //     <JobListing key={job.id} job={job} />
                    // ))

                    loading ?
                        <Spinner loading={loading} />
                        :
                        jobs.length > 0 ?
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {jobs.map((job) => (
                                    <JobListing key={job.id} job={job} />
                                ))}
                            </div>
                            :
                            <div className="col-span-3 text-center">
                                <p>No jobs found</p>
                            </div>
                }
            </div>

        </section>
    )
}

export default JobListings
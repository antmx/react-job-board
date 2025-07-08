import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'

const Job = () => {

	const { id } = useParams();
	const [job, setJob] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {

		const fetchJob = async () => {

			try {
				let url = `/api/jobs/${id}`;
				console.log("Fetching job from URL:", url);

				const response = await fetch(url);

				if (!response.ok) {
					throw new Error('Network response was not ok: ' + response.statusText);
				}

				const data = await response.json();
				setJob(data);
			} catch (error) {
				console.error("Error fetching job data:", error);
			} finally {
				setLoading(false);
			}
		}

		fetchJob();

	}, []);

	return loading ?
		<Spinner /> : 
		<h1>Job {job.title}</h1>

}

export default Job
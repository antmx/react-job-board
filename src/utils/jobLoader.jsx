/**
 * Responsible for loading individual Job data
 * @param {*} param0 the id of the Job to load
 * @returns 
 */
const jobLoader = async ({ params }) => { 

	const response = await fetch(`/api/jobs/${params.id}`);
	const data = await response.json();

	if (!response.ok) {
		throw new Error('Failed to fetch job data for ID: ' + params.id);
	}

	return data;
}

export default jobLoader

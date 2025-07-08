import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Main from './layouts/Main'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import NotFound from './pages/NotFound'
import JobAdd from './pages/JobAdd'
import Job from './pages/Job'
import jobLoader from './utils/jobLoader'

const App = () => {

  const addJob = async (newJob) => {
    //console.log("newJob:" + JSON.stringify(newJob));
    const response = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    });

    return;
  }

  const deleteJob = async (jobId) => {
    //console.log("deleteJob: " + jobId);
    const response = await fetch(`/api/jobs/${jobId}`, {
      method: 'DELETE'
    });
    //console.log("deleteJob:" + jobId + " deleted");
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Main />}>
        <Route path='/' element={<Home />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/job/:id' element={<Job deleteJobFn={deleteJob} />} loader={jobLoader} />
        <Route path='/jobadd' element={<JobAdd addJobFn={addJob} />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App
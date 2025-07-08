import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Main from './layouts/Main'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import NotFound from './pages/NotFound'
import JobAdd from './pages/JobAdd'
import Job from './pages/Job'
import jobLoader from './utils/jobLoader'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Main />}>
      <Route path='/' element={<Home />} />
      <Route path='/jobs' element={<Jobs />} />
      <Route path='/job/:id' element={<Job />} loader={jobLoader} />
      <Route path='/jobadd' element={<JobAdd />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
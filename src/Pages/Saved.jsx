import React, { useEffect, useState } from 'react'
import { IoTrashOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { deleteAllResumeApi, getAllResumeApi } from '../service/apiService';

function Saved() {
  const [allResumes, setAllResumes] = useState([])
  const [searchKey, setSearchKey] = useState("")
  const [dummyAllResumes,setDummyAllResumes] = useState([])
  console.log(searchKey);

  useEffect(() => {
    searchKey == "" ? getAllResumes() : searchCandidate()
  }, [searchKey])

  const searchCandidate = () => {
    setAllResumes(dummyAllResumes.filter(item => item.job.toLowerCase().includes(searchKey.toLowerCase())))
  }

  //  const searchInput=useMemo(()=>{
  //  setAllResumes(dummyAllResumes.filter(item => item.job.toLowerCase().includes(searchKey.toLowerCase())))
  // },[searchKey])

  const getAllResumes = async () => {
    const response = await getAllResumeApi();
    if (response.status === 200) {
      setAllResumes(response.data)
      setDummyAllResumes(response.data)
    }
  }

  const removeResume = async (id) => {
    if (confirm("Are You Sure , do you want to delete this resume?")) {
      const response = await deleteAllResumeApi(id)
      if (response.data === 200) {
        getAllResumes()
      }

    }
  }
  return (
    <div className="container my-5">
      <h1 className="text-center">All Saved Resumes</h1>
      <div className='d-flex justify-content-center align-items-center w-50 mt-3'>
        <input onChange={(e) => setSearchKey(e.target.value)} type="text" placeholder='search candidate by their job name' className='form-control' />
        <FaSearch style={{ marginLeft: '20px' }} />
      </div>
      <table className="table table-hover table-striped my-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Resume</th>
            <th>Job Role</th>
            <th>...</th>
          </tr>
        </thead>

        <tbody>
          {allResumes.length > 0 ? (
            allResumes.map((resume, index) => (
              <tr key={resume.id}>
                <td>{index + 1}</td>
                <td>
                  <Link to={`/resume/${resume.id}`}>
                    {resume.fullname?.toUpperCase() || "Unnamed Resume"}
                  </Link>
                </td>
                <td>{resume.job?.toUpperCase() || "Not specified"}</td>
                <td><button onClick={() => { removeResume(resume?.id) }} className="btn btn-danger"> <IoTrashOutline /> </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                NO RESUMES ADDED YET
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Saved;
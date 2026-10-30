import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowBack } from "react-icons/io";
import { getAllDownloadResumeApi } from '../service/apiService';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight: '80vh',
  overflow: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Download() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [downloadList, setDownloadList] = useState([])
  const [label, setLabel] = useState([])
  const [value, setValue] = useState([])
  const colorpallete = ['#0d4e84', '#e9914a', '#342403', '#73533a', '#cbc3c0', '#3aacd0', '#90dae5', '#8d3319']
  const backgroundColor = label.map((value, index) => colorpallete[index % colorpallete.length])
  //console.log(downloadList);

  const data = {
    labels: label,
    datasets: [
      {
        label: 'download count',
        data: value,
        backgroundColor
      }
    ]
  }
  useEffect(() => {
    getAllDownloads()
  }, [])
  const getAllDownloads = async () => {
    const result = await getAllDownloadResumeApi()
    setDownloadList(result.data)
    const output = {}
    result.data.forEach(item => {
      const currentJob = item.jobrole
      if (currentJob in output) {
        output[currentJob] += 1
      } else {
        output[currentJob] = 1
      }
    })

    setLabel(Object.keys(output))
    setValue(Object.values(output))
  }
  return (
    <div className='container  my-5'>
      <div className='d-flex justify-content-between align-items-center'>
        <h3 className='fs-1'>Download Resume History</h3>
        <button className='btn text-light' style={{ backgroundColor: '#17365D' }} onClick={handleOpen}>  View In Chart</button>
      </div>
      <p className='mt-3 fs-3 fw-semibold ' style={{ color: '#008C95' }}>Total Downloaded Resumes from Our Site : <span className='fw-bolder text-danger'>{downloadList.length}</span></p>
      <div className='row my-5'>
        {/*  */}
        {
          downloadList?.length > 0 ?
            downloadList?.map(resume => (
              <div className='col-lg-4'>
                <div style={{ height: '350px' }} className='rounded shadow p-3'>
                  <h6>Review at:{resume?.timeStamp}</h6>
                  <div className='mt-4 text-center'>
                    <Link to={`/resume/${resume?.resumeId}`}> <img className='w-100' style={{ height: '300px' }} src={resume?.resumeImg} alt="resumeimage" /></Link>
                  </div>
                </div>
              </div>
            ))
            :
            <div>No resumes Downloaded Yet</div>
        }
      </div>
      {/* modal */}
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ backgroundColor: '#008C95', width: '100%', padding: '10px', color: 'white' }}>  CV Count by Job Role </Typography>
         <div className='text-center'>   <Pie data={data} /> </div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            This chart provides an overview of the number of CV downloads associated with different jobs on the website.it hewlps visualize the demand and engagement for CV's across various career categories , making it easier to identify which job role attracts the heighest number of downloads. By comparing download count across the roles , the chart can provide useful insights into user prefernces and the popularity of different carrier oppurtunities on the platform.
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}
export default Download

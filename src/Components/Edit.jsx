import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaUserEdit } from "react-icons/fa";
import { TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FaXmark } from "react-icons/fa6";
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
function Edit() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button style={{ color: '#421c03' }} className='btn' onClick={handleOpen}><FaUserEdit size={20} className='me-1' />Edit CV</Button>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2"> Edit Resume Details </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            <div>
              <h3>Personal Details</h3>
              <div className='row p-5'>
                <TextField id="standard-basic-name" label="Full Name" variant="standard" />
                <TextField id="standard-basic-loc" label="Location" variant="standard" />
                <FormControl variant="standard"  >
                  <InputLabel id="demo-simple-select-label">Choose Job Title</InputLabel>
                  <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Job" >
                    <MenuItem value={"job"}>Ten</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div>
              <h3>Contact Details</h3>
              <div className='row p-5'>
                <TextField id="standard-basic-email" label="Email" variant="standard" />
                <TextField id="standard-basic-phno" label="Contact Number" variant="standard" />
                <TextField id="standard-basic-link" label="Linkedin Link" variant="standard" />
                <TextField id="standard-basic-github" label="Github Link" variant="standard" />
              </div>
            </div>

            <div className='mt-3'>
              <h3>Educational Details</h3>
              <div className='row p-5'>
                <TextField id="standard-basic-degree" label="Bachelor's Degree" variant="standard" />
                <TextField id="standard-basic-college" label="University/college Name" variant="standard" />
                <TextField id="standard-basic-year" label="Year Of Graduation" variant="standard" />
              </div>
            </div>
            {/* skills */}
            <div>
              <h3>Skills</h3>
              <div className='d-flex'>
                <input type="text" className='form-control' />
                <Button className='btn'>Add</Button>
              </div>
              <h5 className='mt-3'>Added Skills : </h5>
              <div className=' p-3 d-flex justify-content-between flex-wrap'>
                <button  className='btn btn-warning' variant='contained'>Skill <FaXmark className='ms-3' /></button>
              </div>
            </div>
            {/* summary */}
            <div>
              <h3>Summary</h3>
              <div className='row p-3'>
                <TextField id='summary' label='summary' variant='standard'></TextField>
              </div>
            </div>
            {/* update button */}
            <button className='btn btn-success mt-3'>Update CV</button>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default Edit

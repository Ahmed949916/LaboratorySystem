import React, { useState, useEffect, useRef } from 'react';
import {
  Drawer,
  Box,
  Typography,
  TextField,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from '@/components/CustomButton';
import CustomInput from '@/components/CustomInput';

const AddService = ({ open, onClose, onAdd }) => {
    const ServiceName=useRef()
     const ServicePrice=useRef()
     const ServiceDescription=useRef()
     
 
 
  const handleSave = () => {
    const name= ServiceName.current.value;
    const price= ServicePrice.current.value;
    const description= ServiceDescription.current.value;
    if (!name || !price) return;  
    onAdd({
       testName: name.trim(),
      price: parseFloat(price),
      description: description.trim(),
    });


    onClose();
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 400, p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6">Add New Service</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box
          component="form"
          sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}
          noValidate
          autoComplete="off"
        >
              <CustomInput label={"Service Name"} placeholder={"e.g. LFT"}  ref={ServiceName} ></CustomInput>
        
        <CustomInput label={"Service Price"} placeholder={"e.g. 1000"}  ref={ServicePrice} ></CustomInput>
        
         <CustomInput label={"Service Description"} placeholder={"e.g. Test for ..."}   ref={ServiceDescription} ></CustomInput>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
            <CustomButton variant="secondary" onClick={onClose} sx={{ mr: 1 }}>
              Cancel
            </CustomButton>
            <CustomButton variant='tertiary' onClick={handleSave}>Save</CustomButton>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default AddService;

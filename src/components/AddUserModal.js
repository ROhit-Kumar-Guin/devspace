import React, { useState } from 'react';
import { Modal, Button, TextField, Typography } from '@mui/material';

const AddUserModal = ({ isOpen, onClose, onAddUser }) => {
  const [userData, setUserData] = useState({ name: '', email: '', address: {}, phone: '', website: '', company: {} });


  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      // Move to the next input field when Enter is pressed
      const form = e.target.form;
      const index = Array.prototype.indexOf.call(form, e.target);
      form.elements[index + 1].focus();
      e.preventDefault();
    }
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddUser = () => {
    onAddUser(userData);
    onClose();
  };

  return (
    <Modal open={isOpen} onClose={onClose} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ padding: 20, margin: 20, borderRadius: 10, boxShadow: 'inset 0 0 10px #F0F0F0', backgroundColor: '#E7473C', maxWidth: '400px', width: '100%', color:'#F0F0F0' }}>
        <Typography variant="h6">Add User</Typography>
        <form action="submit">
        <TextField
          label="Name"
          name="name"
          value={userData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          sx={{ width: '45%',margin:'5px',backgroundColor: '#F0F0F0',color:'#E7473C','&:hover': {backgroundColor: '#BFA181', color: 'white'},borderRadius:'10px' }}
          onKeyDown={handleKeyDown}
        />
        <TextField
          label="Email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          sx={{ width: '45%',margin:'5px',backgroundColor: '#F0F0F0',color:'#E7473C','&:hover': {backgroundColor: '#BFA181', color: 'white'},borderRadius:'10px' }}
          onKeyDown={handleKeyDown}
        />
        <TextField
          label="Street"
          name="address.street"
          value={userData.address?.street}
          onChange={handleChange}
          fullWidth
          margin="normal"
          sx={{ width: '45%',margin:'5px',backgroundColor: '#F0F0F0',color:'#E7473C','&:hover': {backgroundColor: '#BFA181', color: 'white'},borderRadius:'10px' }}
          onKeyDown={handleKeyDown}
        />
        <TextField
          label="Suite"
          name="address.suite"
          value={userData.address?.suite}
          onChange={handleChange}
          fullWidth
          margin="normal"
          sx={{ width: '45%',margin:'5px',backgroundColor: '#F0F0F0',color:'#E7473C','&:hover': {backgroundColor: '#BFA181', color: 'white'},borderRadius:'10px' }}
          onKeyDown={handleKeyDown}
        />
        <TextField
          label="City"
          name="address.city"
          value={userData.address?.city}
          onChange={handleChange}
          fullWidth
          margin="normal"
          sx={{ width: '45%',margin:'5px',backgroundColor: '#F0F0F0',color:'#E7473C','&:hover': {backgroundColor: '#BFA181', color: 'white'},borderRadius:'10px' }}
          onKeyDown={handleKeyDown}
        />
        
        <TextField
          label="Phone"
          name="phone"
          value={userData.phone}
          onChange={handleChange}
          fullWidth
          margin="normal"
          sx={{ width: '45%',margin:'5px',backgroundColor: '#F0F0F0',color:'#E7473C','&:hover': {backgroundColor: '#BFA181', color: 'white'},borderRadius:'10px' }}
          onKeyDown={handleKeyDown}
        />
        <TextField
          label="Website"
          name="website"
          value={userData.website}
          onChange={handleChange}
          fullWidth
          margin="normal"
          sx={{ width: '45%',margin:'5px',backgroundColor: '#F0F0F0',color:'#E7473C','&:hover': {backgroundColor: '#BFA181', color: 'white'},borderRadius:'10px' }}
          onKeyDown={handleKeyDown}
        />
        <TextField
          label="Company Name"
          name="company.name"
          value={userData.company?.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          sx={{ width: '45%',margin:'5px',backgroundColor: '#F0F0F0',color:'#E7473C','&:hover': {backgroundColor: '#BFA181', color: 'white'},borderRadius:'10px' }}
          onKeyDown={handleKeyDown}
        />
        <Button onClick={handleAddUser} variant="contained" color="primary" sx={{backgroundColor: '#F0F0F0',color:'#E7473C',marginLeft:'3px','&:hover': {backgroundColor: '#BFA181', color: 'white'} }}>
          Add User
        </Button>
        </form>
      </div>
    </Modal>
  );
};

export default AddUserModal;


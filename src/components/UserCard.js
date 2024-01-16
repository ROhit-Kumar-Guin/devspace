import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Modal } from '@mui/material';

const UserCard = ({ user, onEdit, onDelete, onViewProfile }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = () => {
    onEdit(user);
  };

  const handleDelete = () => {
    onDelete(user.id);
  };

  const handleViewProfile = () => {
    onViewProfile(user.id);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Card sx={{ marginBottom: 10, minWidth: 250, maxWidth: 300, backgroundColor: '#E7473C', color:'#F0F0F0',transition: 'transform 0.3s','&:hover': {transform: 'scale(1.05)'} }}>
      <CardContent>
        <Typography variant="h4">{user.name}</Typography>
        <Typography variant="body2"><strong>E-mail:</strong>{user.email}</Typography>
        <Typography variant="body2"><strong>Address:</strong> {user.address?.street}, {user.address?.suite}, {user.address?.city}, {user.address?.zipcode}</Typography>
        <Typography variant="body2"><strong>Phone:</strong> {user.phone}</Typography>
        <Typography variant="body2"><strong>Website:</strong> {user.website}</Typography>
        <Typography variant="body2"><strong>Company:</strong> {user.company?.name}</Typography>
        <Button onClick={handleEdit} sx={{backgroundColor: '#F0F0F0',color:'#E7473C',marginLeft:'3px',transition: 'transform 0.3s','&:hover': {backgroundColor: '#BFA181', color: 'white',transform: 'scale(1.05)'} }}>Edit</Button>
        <Button onClick={handleDelete} sx={{backgroundColor: '#F0F0F0',color:'#E7473C',marginLeft:'3px',transition: 'transform 0.3s','&:hover': {backgroundColor: '#BFA181', color: 'white',transform: 'scale(1.05)'} }}>Delete</Button>
        <Button onClick={handleViewProfile} sx={{backgroundColor: '#F0F0F0',color:'#E7473C',marginLeft:'3px',transition: 'transform 0.3s','&:hover': {backgroundColor: '#BFA181', color: 'white',transform: 'scale(1.05)'} }}>View Profile</Button>
      </CardContent>
      <Modal open={isModalOpen} onClose={handleModalClose}>
        <div>
          {/* Modal Content */}
        </div>
      </Modal>
    </Card>
  );
};

export default UserCard;

//2
// import React, { useState } from 'react';
// import { Card, CardContent, Typography, Button, Modal } from '@mui/material';

// const UserCard = ({ user, onEdit, onDelete, onViewProfile }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleEdit = () => {
//     onEdit(user);
//   };

//   const handleDelete = () => {
//     onDelete(user.id);
//   };

//   const handleViewProfile = () => {
//     onViewProfile(user.id);
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <Card>
//       <CardContent>
//         <Typography variant="h6">{user.name}</Typography>
//         <Typography variant="subtitle1">{user.email}</Typography>
//         <Typography variant="body2"><strong>Address:</strong> {user.address?.street}, {user.address?.suite}, {user.address?.city}, {user.address?.zipcode}</Typography>
//         <Typography variant="body2"><strong>Phone:</strong> {user.phone}</Typography>
//         <Typography variant="body2"><strong>Website:</strong> {user.website}</Typography>
//         <Typography variant="body2"><strong>Company:</strong> {user.company?.name}</Typography>
//         <Button onClick={handleEdit}>Edit</Button>
//         <Button onClick={handleDelete}>Delete</Button>
//         <Button onClick={handleViewProfile}>View Profile</Button>
//       </CardContent>
//       <Modal open={isModalOpen} onClose={handleModalClose}>
//         <div>
//           {/* Modal Content */}
//         </div>
//       </Modal>
//     </Card>
//   );
// };

// export default UserCard;




//2
// import React, { useState } from 'react';
// import { Card, CardContent, Typography, Button, Modal } from '@mui/material';

// const UserCard = ({ user, onEdit, onDelete, onViewProfile }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleEdit = () => {
//     onEdit(user);
//   };

//   const handleDelete = () => {
//     onDelete(user.id);
//   };

//   const handleViewProfile = () => {
//     onViewProfile(user.id);
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <Card>
//       <CardContent>
//         <Typography variant="h6">{user.name}</Typography>
//         <Typography variant="subtitle1">{user.email}</Typography>
//         <Button onClick={handleEdit}>Edit</Button>
//         <Button onClick={handleDelete}>Delete</Button>
//         <Button onClick={handleViewProfile}>View Profile</Button>
//       </CardContent>
//       <Modal open={isModalOpen} onClose={handleModalClose}>
//         <div>
//           {/* Modal Content */}
//         </div>
//       </Modal>
//     </Card>
//   );
// };

// export default UserCard;

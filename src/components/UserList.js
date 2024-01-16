import React from 'react';
import UserCard from './UserCard';

const UserList = ({ users, onEdit, onDelete, onViewProfile }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {users.map((user) => (
        <UserCard key={user.id} user={user} onEdit={onEdit} onDelete={onDelete} onViewProfile={onViewProfile} />
      ))}
    </div>
  );
};

export default UserList;







// import React from 'react';
// import UserCard from './UserCard';
// import { Grid, Card, CardContent, Typography, Button } from '@mui/material';


// const UserList = ({ users, onEdit, onDelete, onViewProfile }) => {
//   return (
//     <Grid container spacing={2}>
//       {users.map((user) => (
//         <Grid item key={user.id} xs={12} sm={6} md={3}>
//           <Card>
//             <CardContent>
//               <Typography variant="h6">{user.name}</Typography>
//               <Typography variant="subtitle1">{user.email}</Typography>
//               <Button onClick={() => onEdit(user)}>Edit</Button>
//               <Button onClick={() => onDelete(user.id)}>Delete</Button>
//               <Button onClick={() => onViewProfile(user.id)}>View Profile</Button>
//             </CardContent>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default UserList;



import React, { useState, useEffect } from 'react';
import { getUsers, addUser, editUser, deleteUser, getUserPosts, getUserAlbums } from './api';
import UserList from './components/UserList';
import AddUserModal from './components/AddUserModal';
import { Button, Modal, Typography} from '@mui/material';
import NavBar from './components/NavBar';

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [isEditDeleteModalOpen, setIsEditDeleteModalOpen] = useState(false);
  const [userPosts, setUserPosts] = useState([]);
  const [userAlbums, setUserAlbums] = useState([]);

  useEffect(() => {
    getUsers().then((response) => setUsers(response.data));
  }, []);

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setIsEditDeleteModalOpen(true);
  };

  const handleDeleteUser = (userId) => {
    deleteUser(userId).then(() => {
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
      setIsEditDeleteModalOpen(false);
    });
  };

  const handleViewProfile = async (userId) => {
    try {
      const postsResponse = await getUserPosts(userId);
      const albumsResponse = await getUserAlbums(userId);

      setUserPosts(postsResponse.data);
      setUserAlbums(albumsResponse.data);

      setIsEditDeleteModalOpen(true);
    } catch (error) {
      console.error('Error fetching user posts and albums:', error);
    }
  };

  const handleAddUser = (userData) => {
    addUser(userData).then((response) => {
      setUsers((prevUsers) => [...prevUsers, response.data]);
      setIsAddUserModalOpen(false);
    });
  };

  const handleEditUserData = (userData) => {
    editUser(selectedUser.id, userData).then((response) => {
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === selectedUser.id ? response.data : user))
      );
      setIsEditDeleteModalOpen(false);
    });
  };

  const handleModalClose = () => {
    setIsAddUserModalOpen(false);
    setIsEditDeleteModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <>
      <NavBar/>
      <div style={{ padding: 20 }}>
        <UserList users={users} onEdit={handleEditUser} onDelete={handleDeleteUser} onViewProfile={handleViewProfile} />
        <Button onClick={() => setIsAddUserModalOpen(true)}>Add User</Button>
        <AddUserModal isOpen={isAddUserModalOpen} onClose={handleModalClose} onAddUser={handleAddUser} />
        <Modal open={isEditDeleteModalOpen} onClose={handleModalClose}>
          <div>
            {selectedUser ? (
              <>
                <Typography variant="h5">Edit User</Typography>
                <input
                  type="text"
                  name="name"
                  value={selectedUser.name}
                  onChange={(e) => setSelectedUser((prevUser) => ({ ...prevUser, name: e.target.value }))}
                  placeholder="Name"
                />
                <input
                  type="text"
                  name="email"
                  value={selectedUser.email}
                  onChange={(e) => setSelectedUser((prevUser) => ({ ...prevUser, email: e.target.value }))}
                  placeholder="Email"
                />
                <Button onClick={() => handleEditUserData(selectedUser)}>Save Changes</Button>
                <Button onClick={() => handleDeleteUser(selectedUser.id)}>Delete User</Button>
              </>
            ) : (
              <>
                <Typography variant="h5">User Profile</Typography>
                <div>
                  <Typography variant="h6">Posts:</Typography>
                  <ul>
                    {userPosts.map((post) => (
                      <li key={post.id}>{post.title}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Typography variant="h6">Albums:</Typography>
                  <ul>
                    {userAlbums.map((album) => (
                      <li key={album.id}>{album.title}</li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        </Modal>
      </div>
    </>
  );
};

export default App;
























// import React, { useState, useEffect } from 'react';
// import { getUsers, addUser, editUser, deleteUser, getUserPosts, getUserAlbums } from './api';
// import UserList from './components/UserList';
// import AddUserModal from './components/AddUserModal';
// import { Button, Modal, Typography, Grid, Card, CardContent } from '@mui/material';

// const App = () => {
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
//   const [isEditDeleteModalOpen, setIsEditDeleteModalOpen] = useState(false);
//   const [userPosts, setUserPosts] = useState([]);
//   const [userAlbums, setUserAlbums] = useState([]);

//   useEffect(() => {
//     getUsers().then((response) => setUsers(response.data));
//   }, []);

//   const handleEditUser = (user) => {
//     setSelectedUser(user);
//     setIsEditDeleteModalOpen(true);
//   };

//   const handleDeleteUser = (userId) => {
//     deleteUser(userId).then(() => {
//       setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
//       setIsEditDeleteModalOpen(false);
//     });
//   };

//   const handleViewProfile = async (userId) => {
//     try {
//       const postsResponse = await getUserPosts(userId);
//       const albumsResponse = await getUserAlbums(userId);

//       setUserPosts(postsResponse.data);
//       setUserAlbums(albumsResponse.data);

//       setIsEditDeleteModalOpen(true);
//     } catch (error) {
//       console.error('Error fetching user posts and albums:', error);
//     }
//   };

//   const handleAddUser = (userData) => {
//     addUser(userData).then((response) => {
//       setUsers((prevUsers) => [...prevUsers, response.data]);
//       setIsAddUserModalOpen(false);
//     });
//   };

//   const handleEditUserData = (userData) => {
//     editUser(selectedUser.id, userData).then((response) => {
//       setUsers((prevUsers) =>
//         prevUsers.map((user) => (user.id === selectedUser.id ? response.data : user))
//       );
//       setIsEditDeleteModalOpen(false);
//     });
//   };

//   const handleModalClose = () => {
//     setIsAddUserModalOpen(false);
//     setIsEditDeleteModalOpen(false);
//     setSelectedUser(null);
//   };

//   return (
//     <div>
//       <UserList users={users} onEdit={handleEditUser} onDelete={handleDeleteUser} onViewProfile={handleViewProfile} />
//       <Button onClick={() => setIsAddUserModalOpen(true)}>Add User</Button>
//       <AddUserModal isOpen={isAddUserModalOpen} onClose={handleModalClose} onAddUser={handleAddUser} />
//       <Modal open={isEditDeleteModalOpen} onClose={handleModalClose}>
//         <div>
//           {selectedUser ? (
//             <>
//               <Typography variant="h5">Edit User</Typography>
//               <input
//                 type="text"
//                 name="name"
//                 value={selectedUser.name}
//                 onChange={(e) => setSelectedUser((prevUser) => ({ ...prevUser, name: e.target.value }))}
//                 placeholder="Name"
//               />
//               <input
//                 type="text"
//                 name="email"
//                 value={selectedUser.email}
//                 onChange={(e) => setSelectedUser((prevUser) => ({ ...prevUser, email: e.target.value }))}
//                 placeholder="Email"
//               />
//               <Button onClick={() => handleEditUserData(selectedUser)}>Save Changes</Button>
//               <Button onClick={() => handleDeleteUser(selectedUser.id)}>Delete User</Button>
//             </>
//           ) : (
//             <>
//               <Typography variant="h5">User Profile</Typography>
//               <div>
//                 <Typography variant="h6">Posts:</Typography>
//                 <ul>
//                   {userPosts.map((post) => (
//                     <li key={post.id}>{post.title}</li>
//                   ))}
//                 </ul>
//               </div>
//               <div>
//                 <Typography variant="h6">Albums:</Typography>
//                 <ul>
//                   {userAlbums.map((album) => (
//                     <li key={album.id}>{album.title}</li>
//                   ))}
//                 </ul>
//               </div>
//             </>
//           )}
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default App;


// User.js
import React, { useState, useEffect } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import AddUser from './Adduser';
import EditUser from '../EditUser/Edituser'; // Import the EditUser component
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserAsync, fetchUsersAsync, fetchUserAsync } from '../../Service/Action/userAction';
import Loader from '../Loader/Loader';
import './user.css';

function User() {
  const [add, setAdd] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [editUser, setEditUser] = useState(null);

  const { users, isEdit } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();

  const handleEditUser = (id) => {
    dispatch(fetchUserAsync(id)); // Fetch the user to edit
    setEditUser(id); // Store the user ID being edited
    setAdd(true); // Open the EditUser component
  };
  const handleDeleteUser = (id) => {
    dispatch(deleteUserAsync(id));
  };

  useEffect(() => {
    // Fetch users and handle loading
  }, []);

  return (
    <div className="user-container">
      {/* Other UI elements */}
      <div className="user-content">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Button className="add-user-button" onClick={() => setAdd(true)}>
              Add User
            </Button>
            {/* Render user list */}
            <Card className="user-list-card">
              <Card.Body>
                <ListGroup>
                  {users.map((user) => (
                    <ListGroup.Item key={user.id} className="user-list-item">
                      <div className="user-info">
                        <span className="user-name">{user.name}</span> -{' '}
                        {user.email}
                      </div>
                      <div className="user-actions">
                        <Button
                          variant="outline-primary"
                          onClick={() => handleEditUser(user.id)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="outline-danger"
                          onClick={() => handleDeleteUser(user.id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
            {/* Add/Edit User Modal */}
            <AddUser show={add} handleClose={() => setAdd(false)} />
            {/* Edit User Modal */}
            <EditUser
              show={add && isEdit}
              handleClose={() => setAdd(false)}
              userId={editUser} // Pass the user ID being edited
            />
          </>
        )}
      </div>
    </div>
  );
}

export default User;

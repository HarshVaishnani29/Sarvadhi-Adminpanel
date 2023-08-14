import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUserAsync, updateUserAsync } from '../../Service/Action/userAction';
import { Modal, Form, Button } from 'react-bootstrap';
import './Adduser.css'; // Import custom CSS file

const AddUser = ({ user, handleClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(user || {
    name: '',
    email: '',
    // Add other user properties here
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      dispatch(updateUserAsync(formData));
    } else {
      dispatch(addUserAsync(formData));
    }
    handleClose();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Modal show={true} onHide={handleClose} className="add-user-modal">
      <Modal.Header closeButton>
        <Modal.Title>{user ? 'Edit User' : 'Add User'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter name"
              className="custom-input"
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="custom-input"
            />
          </Form.Group>
          {/* Add other Form.Group components for other user properties */}
          <div className="d-flex justify-content-end">
            <Button variant="outline-secondary" onClick={handleClose} className="mr-2">
              Cancel
            </Button>
            <Button variant="primary" type="submit" className="custom-button">
              {user ? 'Update' : 'Save'}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddUser;

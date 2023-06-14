import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Fab, ListItem, Tooltip, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import '../MyOrder.css'
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';

const ShareCustomer = ({ order, handleDelete }) => {

    const addressStyle = { display: 'flex', justifyContent: 'space-between',color:"white"};

    return (
        <Box>

            <ListItem button divider className="divide"> User Share Order</ListItem>
            <ListItem button divider className='divide'>
                <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                    <Grid item xs={4} sm={4} md={4} >
                        <Typography style={addressStyle}><span>My Name</span><span>:</span></Typography>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} >
                        <Typography style={{color:"white"}}>{order?.cus_name}</Typography>
                    </Grid>

                </Grid>
            </ListItem>
            
            <ListItem button divider  className="divide">
                <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                    <Grid item xs={4} sm={4} md={4} >
                        <Typography style={addressStyle}><span>Schedule</span><span>:</span></Typography>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} >
                        <Typography style={{color:"white"}}>{order?.schedules}</Typography>

                        {/* <Link style={{textDecoration:"none"}} to={`/dashboard/userSchedule/updatepotter/${order._id}`}><span> <FaEdit className='edit-icon' /> Edit </span></Link> */}
                    </Grid>
                   

                </Grid>
            </ListItem>
            <ListItem button divider  className="divide">
                <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                    <Grid item xs={4} sm={4} md={4} >
                        <Typography style={addressStyle}><span>Purchase</span><span>:</span></Typography>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} >
                        <Typography style={{color:"white"}}>{order?.purchase}</Typography>

                        {/* <Link style={{textDecoration:"none"}} to={`/dashboard/userPurchase/updatepotter/${order._id}`}><span> <FaEdit className='edit-icon' /> Edit </span></Link> */}
                    </Grid>

                </Grid>
            </ListItem>
            <ListItem button divider  className="divide">
                <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                    <Grid item xs={4} sm={4} md={4} >
                        <Typography style={addressStyle}><span>Country</span><span>:</span></Typography>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} >
                        <Typography style={{color:"white"}}>{order?.cus_country}</Typography>
                    </Grid>

                </Grid>
            </ListItem>
            <ListItem button divider  className="divide">
                <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                    <Grid item xs={4} sm={4} md={4} >
                        <Typography style={addressStyle}><span>City</span><span>:</span></Typography>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} >
                        <Typography style={{color:"white"}}>{order?.cus_city}</Typography>
                    </Grid>

                </Grid>
            </ListItem>
            <ListItem button divider  className="divide">
                <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                    <Grid item xs={4} sm={4} md={4} >
                        <Typography style={addressStyle}><span>Code</span><span>:</span></Typography>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} >
                        <Typography style={{color:"white"}}>{order?.code}</Typography>
                    </Grid>

                </Grid>
            </ListItem>
            <ListItem button divider  className="divide">
                <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                    <Grid item xs={4} sm={4} md={4} >
                        <Typography style={addressStyle}><span>Item</span><span>:</span></Typography>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} >
                        <Typography style={{color:"white"}}>{order?.item}</Typography>
                    </Grid>

                </Grid>
            </ListItem>
            <ListItem button divider  className="divide">
                <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                    <Grid item xs={4} sm={4} md={4} >
                        <Typography style={addressStyle}><span>ShareName</span><span>:</span></Typography>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} >
                        <Typography style={{color:"white"}}>{order?.ShareName}</Typography>
                    </Grid>

                </Grid>
            </ListItem>
            <ListItem button divider  className="divide">
                <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                    <Grid item xs={4} sm={4} md={4} >
                        <Typography style={addressStyle}><span>Share Mobile</span><span>:</span></Typography>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} >
                        <Typography style={{color:"white"}}>{order?.mobile}</Typography>
                    </Grid>

                </Grid>
            </ListItem>
            <ListItem button divider  className="divide">
                <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                    <Grid item xs={4} sm={4} md={4} >
                        <Typography style={addressStyle}><span>State</span><span>:</span></Typography>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} >
                        <Typography style={{color:"white"}}>{order?.cus_state}</Typography>
                    </Grid>

                </Grid>
            </ListItem>
            <ListItem button divider  className="divide">
                <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                    <Grid item xs={4} sm={4} md={4} >
                        <Typography style={addressStyle}><span>Post Code</span><span>:</span></Typography>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} >
                        <Typography style={{color:"white"}}>{order?.cus_postcode}</Typography>
                    </Grid>

                </Grid>
            </ListItem>

            <ListItem button divider  className="divide">
                <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                    <Grid item xs={4} sm={4} md={4} >
                        <Typography style={addressStyle}><span>Phone</span><span>:</span></Typography>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} >
                        <Typography style={{color:"white"}}>{order?.cus_phone}</Typography>
                    </Grid>

                </Grid>
            </ListItem>
            <ListItem button divider  className="divide">
                <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                    <Grid item xs={4} sm={4} md={4} >
                        <Typography style={addressStyle}><span>Email</span><span>:</span></Typography>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} >
                        <Typography style={{color:"white"}}>{order?.cus_email}</Typography>
                    </Grid>

                </Grid>
            </ListItem>
            <ListItem button divider  className="divide">
                <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                    <Grid item xs={4} sm={4} md={4} >
                        <Typography style={addressStyle}><span>Total Amount</span><span>:</span></Typography>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} >
                        <Typography style={{color:"white"}}>TK.{order?.total_amount} {order?.currency}</Typography>
                    </Grid>

                </Grid>
            </ListItem>
            <ListItem button divider  className="divide">
                <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                    <Grid item xs={4} sm={4} md={4} >
                        <Typography style={addressStyle}><span>Tran_id</span><span>:</span></Typography>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} >
                        <Typography style={{color:"white"}}>{order?.tran_id}</Typography>
                    </Grid>

                </Grid>
            </ListItem>
            <ListItem button divider  className="divide">
                <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                    <Grid item xs={4} sm={4} md={4} >
                        <Typography style={addressStyle}><span>Date</span><span>:</span></Typography>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} >
                        <Typography style={{color:"white"}} >{order?.date}</Typography>
                    </Grid>

                </Grid>
            </ListItem>




            {
                order?.status &&
                <ListItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Tooltip title={order?.status} arrow placement="top">
                        <Fab variant="extended" size="small"
                            color={
                                order?.status === 'Pending' ? "warning" : order?.status === "Approved" && 'success'
                            }
                            aria-label="add">
                            <PendingActionsOutlinedIcon sx={{ mr: 1 }} />
                            {order?.status}
                        </Fab>
                    </Tooltip>
                    <Tooltip title='Delete' arrow placement="top">
                        <Fab onClick={() => handleDelete(order._id)} variant="extended" size="small" color="error" aria-label="add">
                            <DeleteIcon sx={{ mr: 1 }} />
                            Delete
                        </Fab>
                    </Tooltip>

                </ListItem>}
        </Box>
    );
};

export default ShareCustomer;
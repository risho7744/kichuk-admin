import React from 'react'
import { Link } from 'react-router-dom';
import StickyNotes from './main/StickyNotes';
import './css/Sidebar.css';

function Sidebar() {

    const styles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none"
    }

    return (
        <div className="p-0">
            <ul class="list-group">
                <Link to="/Customer">
                    <li style={styles} class="list-group-item list-group-item-action">Customer</li>
                </Link>
                <Link to="/Booking">
                    <li style={styles} class="list-group-item list-group-item-action">Booking</li>
                </Link>
                <Link to="/Rating">
                    <li style={styles} class="list-group-item list-group-item-action">Rating</li>
                </Link>
                <Link to="/Finance">
                    <li style={styles} class="list-group-item list-group-item-action">Finance</li>
                </Link>
                <Link to="/Promocode">
                    <li style={styles} class="list-group-item list-group-item-action">Promocode</li>
                </Link>
                <Link to="/Refferal">
                    <li style={styles} class="list-group-item list-group-item-action">Refferal</li>
                </Link>
                <Link to="/Ads">
                    <li style={styles} class="list-group-item list-group-item-action">Ads</li>
                </Link>
                <Link to="/Complaints">
                    <li style={styles} class="list-group-item list-group-item-action">Complaints</li>
                </Link>
                <Link to="/Hr">
                    <li style={styles} class="list-group-item list-group-item-action">Hr</li>
                </Link>
                <Link to="/Tracking">
                    <li style={styles} class="list-group-item list-group-item-action">Tracking</li>
                </Link>
                <Link to="/Setting">
                    <li style={styles} class="list-group-item list-group-item-action">Setting</li>
                </Link>
                <Link to="/StickyNotes">
                    <li style={styles} class="list-group-item list-group-item-action" >StickyNotes</li>
                </Link>
                <div>
                    <StickyNotes/>
                </div>
               
            </ul>
        </div>
    )
}

export default Sidebar

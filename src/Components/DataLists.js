import * as React from "react";
//import { AiFillEdit } from 'react-icons/fa';
import update_svg from "../Images/update_icon.svg";
import delete_svg from "../Images/delete_icon.svg";
import "./DataLists.css";

function DataLists() {
    return (
        
                <div className="dbLists">
                    <ul>
                        <li></li>
                        <li>Squirrel sighting ID</li>
                        <li>Color Key</li>
                        <li>Activity</li>
                        <li>Age</li>
                        <li>Date</li>
                        <li>Time</li>
                        <li>Location ID</li>
                        <li>
                            <button>
                                <img className="img"src={update_svg} alt="SVG as an image"/>
                            </button></li>
                        <li>
                            <button>
                                <img className="img"src={delete_svg} alt="SVG as an image"/>
                            </button>
                        </li>
                    </ul>
                </div>
    );
}

export default DataLists;
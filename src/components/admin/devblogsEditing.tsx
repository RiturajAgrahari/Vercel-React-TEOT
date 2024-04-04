import React from "react";
import { useState } from "react";
import './devblogsEditing.css'


const DevblogOperations = () => {
    const [news, setNews] = useState([1, 2, 3, 4])

    return (
        <div className="dashboard_content">
            <div className="fill_gap"></div>
            <div className="fill-content">
                <div className="dashboard_content_heading"><h1>DEVBLOGS</h1></div>
                <div className="edit_devblogs">
                    {news.map((num, index) => (
                        <div className="edit_devblog">
                            <div className="edit_devbloghover">
                                <img src="./"></img>
                                <div className="edit_devblog_title">The Darkzone Millionera</div>
                            </div>
                            <div className="edit_devblog_date">
                                <p>2024-02-02</p>
                                <a href="#">announcement</a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="devblog_crud">
                    <table>
                        <tr>
                            <th>S no.</th>
                            <th>Title</th>
                            <th>category</th>
                            <th>image</th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>The Darkzone Millionera</td>
                            <td>Devblog</td>
                            <td>Image1</td>
                            <td className="crud_delete"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></td>
                            <td className="crud_edit"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>The Darkzone Millionera</td>
                            <td>Announcement</td>
                            <td>Image2</td>
                            <td className="crud_delete"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></td>
                            <td className="crud_edit"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>The Darkzone Millionera</td>
                            <td>News</td>
                            <td>Image2</td>
                            <td className="crud_delete"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></td>
                            <td className="crud_edit"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>The Darkzone Millionera</td>
                            <td>News</td>
                            <td>Image2</td>
                            <td className="crud_delete"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></td>
                            <td className="crud_edit"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg></td>
                        </tr>
                        <tr>
                            <td style={{textAlign: "center"}} colSpan={6}><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DevblogOperations;
import React from 'react';
import { Table } from 'react-bootstrap'
import ReactModal from 'react-modal'

const TraineeDetails = ({ details, onclick }) => {
    
    return ( 
        <React.Fragment>
            <ReactModal 
                id="trainee-details"
                ariaHideApp={false}
                isOpen={true}
                contentLabel="Admin Login">
                        
                <button className="close" onClick={onclick}><i className="fas fa-times"></i></button>
                <div className="p-5">
                    <Table striped hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Field</th>
                                <th>Response</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Candidate Name</td>
                                <td>{details[0].name || 'NA'}</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Individual Identity Number</td>
                                <td>{details[0].individualIdentityNumber || 'NA'}</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Father/ Husband Name</td>
                                <td>{details[0].fatherOrHusbandName || 'NA'}</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Mother Name</td>
                                <td>{details[0].motherName || 'NA'}</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Guardian Name</td>
                                <td>{details[0].guardianName || 'NA'}</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Address</td>
                                <td>{details[0].address || 'NA'}</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Grama</td>
                                <td>{details[0].grama || 'NA'}</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Grama Panchayat</td>
                                <td>{details[0].gramaPanchayat || 'NA'}</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Taluk</td>
                                <td>{details[0].taluk || 'NA'}</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Grama</td>
                                <td>{details[0].grama || 'NA'}</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>District</td>
                                <td>{details[0].district || 'NA'}</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>Mobile</td>
                                <td>{details[0].mobile || 'NA'}</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Email Id</td>
                                <td>{details[0].emailId || 'NA'}</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>Phone</td>
                                <td>{details[0].phone || 'NA'}</td>
                            </tr>
                            <tr>
                                <td>15</td>
                                <td>Alternative Mobile</td>
                                <td>{details[0].alternativeMobile || 'NA'}</td>
                            </tr>
                            <tr>
                                <td>16</td>
                                <td>Age</td>
                                <td>{details[0].age || 'NA'}</td>
                            </tr>
                            <tr>
                                <td>17</td>
                                <td>Education Qualification</td>
                                <td>{details[0].educationQualification || 'NA'}</td>
                            </tr>
                            <tr>
                                <td>18</td>
                                <td>Religion</td>
                                <td>{details[0].religion || 'NA'}</td>
                            </tr>
                            <tr>
                                <td>19</td>
                                <td>Gender</td>
                                <td>{details[0].gender || 'NA'}</td>
                            </tr>
                            <tr>
                                <td>20</td>
                                <td>Category</td>
                                <td>{details[0].category || 'NA'}</td>
                            </tr>
                            <tr>
                                <td>21</td>
                                <td>Yearly Income</td>
                                <td>{details[0].yearlyIncome || 'NA'}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </ReactModal>
        </React.Fragment>
    );
}
 
export default TraineeDetails;
import React from 'react';
import Table from 'react-bootstrap/Table';

function ContactTable() {
    return (
        <Table bordered hover className="contact-table">
            <thead>
                <tr>
                    <th>Email</th>
                    <th>Contact US</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>admin@bookstore.com</td>
                    <td>+91 8163475881</td>
                    <td className="address-data">42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex, near Kumarakom restaurant, HSR Layout, Bangalore 560034</td>
                </tr>
            </tbody>
        </Table>);
}

export default ContactTable;
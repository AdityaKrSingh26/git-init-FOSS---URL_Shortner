import React from 'react';

function ResultTable({ ipInfo }) {
    console.log("Props : ", ipInfo);

    // if (ipInfo === null || ipInfo.ipAddress === null || ipInfo.location === null) {
    //     return <div>no value</div>;
    // }

    return (
        <div>
            <table id="customers">
                <tr>
                    <th>Key</th>
                    <th>Value</th>
                </tr>
                <tr>
                    <td>IP Address</td>
                    <td>{ipInfo.ipAddress || 'Not Available'}</td>
                </tr>
                <tr>
                    <td>Country</td>
                    <td>{ipInfo.location?.country || 'Not Available'}</td>
                </tr>
                <tr>
                    <td>Region</td>
                    <td>{ipInfo.location?.region || 'Not Available'}</td>
                </tr>
                <tr>
                    <td>City</td>
                    <td>{ipInfo.location?.city || 'Not Available'}</td>
                </tr>
                <tr>
                    <td>Timezone</td>
                    <td>{ipInfo.location?.timezone || 'Not Available'}</td>
                </tr>
                <tr>
                    <td>Lattitude</td>
                    <td>{ipInfo.location?.ll[0] || 'Not Available'}</td>
                </tr>
                <tr>
                    <td>Longitude</td>
                    <td>{ipInfo.location?.ll[1] || 'Not Available'}</td>
                </tr>
                
            </table>
        </div>
    );
}

export default ResultTable;

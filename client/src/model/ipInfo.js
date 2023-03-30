

const IpInfo = (props) => {
    const isReadyIp = props.isReadyIp
    const dataIP = props.dataIP
    const setShowIpInfo = props.setShowIpInfo
    
    return (
        <div id="ipInfo" className="Rmodal">
            <div className="modal-content">
                <h2>ip info</h2>
                {isReadyIp &&
                    <table >
                        <tr>
                            <td>As</td>
                            <td>{dataIP.as}</td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>{dataIP.city}</td>
                        </tr>
                        <tr>
                            <td>Country</td>
                            <td>{dataIP.country}</td>
                        </tr>
                        <tr>
                            <td>CountryCode</td>
                            <td>{dataIP.countryCode}</td>
                        </tr>
                        <tr>
                            <td>Isp</td>
                            <td>{dataIP.isp}</td>
                        </tr>
                        <tr>
                            <td>Lat</td>
                            <td>{dataIP.lat}</td>
                        </tr>
                        <tr>
                            <td>Lon</td>
                            <td>{dataIP.lon}</td>
                        </tr>
                        <tr>
                            <td>Org</td>
                            <td>{dataIP.org}</td>
                        </tr>
                        <tr>
                            <td>Query</td>
                            <td>{dataIP.query}</td>
                        </tr>
                        <tr>
                            <td>Region</td>
                            <td>{dataIP.region}</td>
                        </tr>
                        <tr>
                            <td>RegionName</td>
                            <td>{dataIP.regionName}</td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            <td>{dataIP.status}</td>
                        </tr>
                        <tr>
                            <td>Timezone</td>
                            <td>{dataIP.timezone}</td>
                        </tr>
                        <tr>
                            <td>Zip</td>
                            <td>{dataIP.zip}</td>
                        </tr>
                    </table >
                }
                <button className="close" onClick={() => setShowIpInfo(false)}>close</button>
            </div>
        </div>
    )
}

export default IpInfo


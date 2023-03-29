

const IpInfo = (props) => {
    const isReadyIp = props.isReadyIp
    const dataIP = props.dataIP
    const setShowIpInfo = props.setShowIpInfo
    
    return (
        <div id="MenusAdd" class="Rmodal">
            <div class="modal-content">
                <h2>ip info</h2>
                {isReadyIp &&
                    <table >
                        <tr>
                            <td class="td">As</td>
                            <td class="td">{dataIP.as}</td>
                        </tr>
                        <tr>
                            <td class="td">City</td>
                            <td class="td">{dataIP.city}</td>
                        </tr>
                        <tr>
                            <td class="td">Country</td>
                            <td class="td">{dataIP.country}</td>
                        </tr>
                        <tr>
                            <td class="td">CountryCode</td>
                            <td class="td">{dataIP.countryCode}</td>
                        </tr>
                        <tr>
                            <td class="td">Isp</td>
                            <td class="td">{dataIP.isp}</td>
                        </tr>
                        <tr>
                            <td class="td">Lat</td>
                            <td class="td">{dataIP.lat}</td>
                        </tr>
                        <tr>
                            <td class="td">Lon</td>
                            <td class="td">{dataIP.lon}</td>
                        </tr>
                        <tr>
                            <td class="td">Org</td>
                            <td class="td">{dataIP.org}</td>
                        </tr>
                        <tr>
                            <td class="td">Query</td>
                            <td class="td">{dataIP.query}</td>
                        </tr>
                        <tr>
                            <td class="td">Region</td>
                            <td class="td">{dataIP.region}</td>
                        </tr>
                        <tr>
                            <td class="td">RegionName</td>
                            <td class="td">{dataIP.regionName}</td>
                        </tr>
                        <tr>
                            <td class="td">Status</td>
                            <td class="td">{dataIP.status}</td>
                        </tr>
                        <tr>
                            <td class="td">Timezone</td>
                            <td class="td">{dataIP.timezone}</td>
                        </tr>
                        <tr>
                            <td class="td">Zip</td>
                            <td class="td">{dataIP.zip}</td>
                        </tr>
                    </table >
                }
                <button class="close" onClick={() => setShowIpInfo(false)}>close</button>
            </div>
        </div>
    )
}

export default IpInfo
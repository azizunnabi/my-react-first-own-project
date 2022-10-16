const Display =(props) => {

    return(
        <div class="container">
            {props.myData.length > 0 ? <table class="table">
                <thead>
                <tr>
                    <th >name</th>
                    <th >email</th>
                    <th >message</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                    {props.myData.map(data => {
                        return(
                            <tr key={data.name}>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.Message}</td>
                                <td><button class="btn btn-danger" onClick ={() => props.jobsDelete(data.name)}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table> : 'no data'}
            </div>
    )

}
export default Display
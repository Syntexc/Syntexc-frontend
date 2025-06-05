import Style from "./style.module.scss"
const RealityCheck = ()=>{
    return (
        <>
        <section className={Style.section}>
            <h3><span>Classic vs. Lightning:</span> A Quick Reality Check</h3>
            <div className={Style.tablebox}>
                <table>
                    <thead>
                        <tr>
                            <th className="col1">Feature</th>
                            <th className="col2">Lightning Experience</th>
                            <th className="col3">Classic</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Interface</td>
                            <td>Modern & Dynamic</td>
                            <td>Static & Dated</td>
                        </tr>
                        <tr>
                            <td>App Builder</td>
                            <td>Yes</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>Automation Tools</td>
                            <td>Lightning Flow</td>
                            <td>Limited</td>
                        </tr>
                        <tr>
                            <td>Mobile Optimization</td>
                            <td>Built-in</td>
                            <td>Add-on</td>
                        </tr>
                        <tr>
                            <td>Einstein Integration Ready</td>
                            <td>Yes</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>Custom Branding</td>
                            <td>Fully Supported</td>
                            <td>Basic</td>
                        </tr>
                        <tr>
                            <td>Productivity Features</td>
                            <td>Kanban, Path, Notes</td>
                            <td>Limited</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        </>
    )
}
export default RealityCheck;
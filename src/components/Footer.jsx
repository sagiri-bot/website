import React, {Component} from 'react'

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="content text-center">
                        <span>
                            Copyright &copy; 2018 sagiri.party · Please help to keep this project alive on
                            <a href="https://patreon.com/sagiribot"> Patreon</a>
                        </span>
                        <br/>
                        <span>
                            design by Enra, code: gabixdev & Kiru
                        </span>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
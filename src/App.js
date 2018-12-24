import React, { Component } from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            txtUsername: '',
            txtPassword: '',
            txtDesc: '',
            sltGender: 0,
            rdLang: 'en',
            chbkStatus: true
        }
    }

    onHandleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        })
    }

    onHandleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

  render() {
    return (
        <div className="container mt-30">
            <div className="row">
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title">Form</h3>
                        </div>
                        <div className="panel-body">
                            
                            <form onSubmit={this.onHandleSubmit}>
                                
                            
                                <div className="form-group">
                                    <label>Username: </label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="txtUsername" 
                                        onChange={this.onHandleChange}
                                        value={this.state.txtUsername}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Password: </label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        name="txtPassword" 
                                        onChange={this.onHandleChange}
                                        value={this.state.txtPassword}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Mo ta: </label>
                                    <textarea 
                                        name="txtDesc" 
                                        className="form-control" 
                                        rows="3"
                                        onChange={this.onHandleChange}
                                        value={this.state.txtDesc}
                                    ></textarea>
                                </div>

                                <select 
                                    name="sltGender" 
                                    className="form-control"
                                    value={this.state.sltGender}
                                    onChange={this.onHandleChange}
                                >
                                    <option value={0}>Nu</option>
                                    <option value={1}>Nam</option>
                                </select>
                            
                                <label>Ngon ngu</label>
                                <div className="radio">
                                    <label>
                                        <input 
                                            type="radio" 
                                            name="rdLang" 
                                            value="vi" 
                                            onChange={this.onHandleChange}
                                            checked={this.state.rdLang === 'vi'}
                                        />
                                        Tieng Viet
                                    </label><br/>
                                    <label>
                                        <input 
                                            type="radio" 
                                            name="rdLang" 
                                            value="en"
                                            onChange={this.onHandleChange}
                                            checked={this.state.rdLang === 'en'}
                                        />
                                        Tieng Anh
                                    </label>
                                </div>

                                <div className="checkbox">
                                    <label>
                                        <input 
                                            type="checkbox" 
                                            //value={true} 
                                            name="chbkStatus" 
                                            onChange={this.onHandleChange}
                                            checked={this.state.chbkStatus === true}
                                        />
                                        Trang thai
                                    </label>
                                </div>
                            
                                <button type="submit" className="btn btn-primary">Luu lai</button>&nbsp;
                                <button type="reset" className="btn btn-default">Xoa trang</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default App;

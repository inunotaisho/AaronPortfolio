import * as React from 'react';

import axios from 'axios';
import { IRegistrationModel } from '../../../Models/Registration.Model';


export class RegistrationFormComponent extends React.Component{

    constructor(props:any){
        super(props);
        this.register = this.register.bind(this);
    }

   user:IRegistrationModel = new IRegistrationModel();

    register(e:any){
        console.log(e);
        e.preventDefault();
        axios.post('/users/register', this.user ).then( res => {
            if(res.status === 200) {
                console.log(res);
            } else {
                console.log(res);
            }
        }).catch(err => {
            console.log(err);
            console.log('not logging in');
        })
    } 


    render(){
        return(
          <div id="login" className="ptb ptb-xs-40 page-signin">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="main-body">
                    <div className="body-inner">
                      <div className="card bg-white">
                        <div className="card-content">
                          <section className="logo text-center">
                            <h2 className="title-header">Register</h2>
                            <div className="underline1"></div>
                          </section>
                          <div className="row about-row">
                            <div className="col-md-6 col-md-offset-3 col-sm-10 col-sm-offset-1 contact-col ">
                              <form onSubmit={this.register} className="form-horizontal ng-pristine ng-valid">
                                <fieldset>
                                  <div className="form-group">
                                    <div className="ui-input-group">
                                      <input type="text" value={this.user.FirstName} className="form-control" placeholder="First Name" required/>
                                      <span className="input-bar"></span>
                                    </div>
                                  </div>
                                  <div className="form-group">
                                    <div className="ui-input-group">
                                      <input type="text" value={this.user.LastName} className="form-control" placeholder="Last Name" required/>
                                      <span className="input-bar"></span>
                                    </div>
                                  </div>
                                  <div className="form-group">
                                    <div className="ui-input-group">
                                      <input type="text" value={this.user.Email} className="form-control email" placeholder="Email" required/>
                                      <span className="input-bar"></span>
                                    </div>
                                  </div>
                                  <div className="form-group">
                                    <div className="ui-input-group">
                                      <input type="text" value={this.user.Password} className="form-control" placeholder="Password" required/>
                                      <span className="input-bar"></span>
                                    </div>
                                  </div>
                                  <div className="form-group">
                                    <div className="ui-input-group">
                                      <input type="text" value={this.user.Password_confirm} className="form-control" placeholder="Password Confirmation" required/>
                                      <span className="input-bar"></span>
                                    </div>
                                  </div>
                                  <div className="spacer"></div>
                                  <div className="form-group checkbox-field">
                                    <label className="text-small">
                                      <input type="checkbox" id="check_box" />
                                      <span className="ion-ios-checkmark-empty22 custom-check"></span> By clicking on sign up, you agree to <a href="javascript:;"><i>terms</i></a> and <a href="javascript:;"><i>privacy policy</i></a></label>
                                  </div>
                                </fieldset>
                                <button className="btn btn-success text-center" type="button" onClick={this.register}>Sign Up</button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
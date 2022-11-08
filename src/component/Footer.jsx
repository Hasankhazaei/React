import React from 'react';
import {Link} from 'react-router-dom';


const Footer = () =>{
    return (
        <div className="bg-dark">
            <div className="container">

                <footer className="bg-dark text-center text-white">
                    <div className="container p-4 pb-0">
                        <section className="mb-4">
                            <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button"
                            ><i className="fa fa-facebook-f"></i
                            ></Link>

                            <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button"
                            ><i className="fa fa-twitter"></i
                            ></Link>

                            <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button"
                            ><i className="fa fa-google"></i
                            ></Link>

                            <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button"
                            ><i className="fa fa-instagram"></i
                            ></Link>

                            <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button"
                            ><i className="fa fa-linkedin"></i
                            ></Link>

                            <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button"
                            ><i className="fa fa-github"></i
                            ></Link>
                        </section>
                    </div>

                    <div className="text-center p-3" >
                        © 2020 Copyright :
                      <Link className="text-white" to="https://mdbootstrap.com/"> COLLECTION.com</Link>
                    </div>
                </footer>
            </div >
        </div>
    )
}

export default Footer;
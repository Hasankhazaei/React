import React from 'react';
import {useSelector} from 'react-redux';


const Checkout =() =>{
    const state = useSelector((state)=> state.handleCart)
    var total = 0;
    const itemList = (item) =>{
        total = total + item.price;
        return(
            <li className="list-group-item d-flex justify-content-between lh-sm" key={item.id}>
            <div>
              <h6 className="my-0">{item.title}</h6>
            </div>
            <span className="text-muted">${item.price}</span>
          </li>
        )
    }
    return(
        <>
            <div className="container my-5">
                <div className="row g-5">
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Billing address</h4>
                        <form className="needs-validation"  wtx-context="B79DB1C4-8ECA-4EAF-9EED-7AE33949B042">
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label">First name</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="" required="" wtx-context="FA878B03-0937-4612-8C37-B7D6120D3539" />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="lastName" className="form-label">Last name</label>
                                    <input type="text" className="form-control" id="lastName" placeholder=""  required="" wtx-context="4932CC40-B2E6-4B83-8DD7-61017649FDC1" />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text">@</span>
                                        <input type="text" className="form-control" id="username" placeholder="Username" required="" wtx-context="06608A55-E188-46DC-8BF7-B192DD6E319F" />
                                        <div className="invalid-feedback">
                                            Your username is required.
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                                    <input type="email" className="form-control" id="email" placeholder="you@example.com" wtx-context="143EF66E-B86C-4FF7-9608-D532128D746A" />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" wtx-context="F2C08721-9492-49D7-9176-5BCF10974246" />
                                    <div className="invalid-feedback">
                                        Please enter your shipping address.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
                                    <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" wtx-context="E5A3E642-DF29-4671-8A15-E637BB7F1AD7" />
                                </div>

                                <div className="col-md-5">
                                    <label htmlFor="country" className="form-label">Country</label>
                                    <select className="form-select" id="country" required="" wtx-context="A8551703-20B3-4EF5-9CDC-C08B60504C97">
                                        <option >Choose...</option>
                                        <option>United States</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <label htmlFor="state" className="form-label">State</label>
                                    <select className="form-select" id="state" required="" wtx-context="4D823F8A-E459-479C-9488-C106AD9FC1C7">
                                        <option >Choose...</option>
                                        <option>California</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please provide a valid state.
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="zip" className="form-label">Zip</label>
                                    <input type="text" className="form-control" id="zip" placeholder="" required="" wtx-context="B2EB4014-52C0-46C6-A42C-A7872FFA66A9" />
                                    <div className="invalid-feedback">
                                        Zip code required.
                                    </div>
                                </div>
                            </div>

                            <hr className="my-4" />

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="same-address" wtx-context="DBC7C0B9-C215-4135-8C28-BFEC0ECE9265" />
                                <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                            </div>

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="save-info" wtx-context="4AF80213-55AC-4677-8F4C-47EA0DD162B4" />
                                <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
                            </div>

                            <hr className="my-4" />

                            <h4 className="mb-3">Payment</h4>

                            <div className="my-3">
                                <div className="form-check">
                                    <input id="credit" name="paymentMethod" type="radio" className="form-check-input" required="" wtx-context="A0E9B784-8A1B-43BE-818C-5D0749A2D1D8" />
                                    <label className="form-check-label" htmlFor="credit">Credit card</label>
                                </div>
                                <div className="form-check">
                                    <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required="" wtx-context="156E2085-3417-42E0-8394-687F693BFD42" />
                                    <label className="form-check-label" htmlFor="debit">Debit card</label>
                                </div>
                                <div className="form-check">
                                    <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required="" wtx-context="F1C7F61E-923C-4136-A27B-F5D93EBF3126" />
                                    <label className="form-check-label" htmlFor="paypal">PayPal</label>
                                </div>
                            </div>

                            <div className="row gy-3">
                                <div className="col-md-6">
                                    <label htmlFor="cc-name" className="form-label">Name on card</label>
                                    <input type="text" className="form-control" id="cc-name" placeholder="" required="" wtx-context="D9D5A466-F08A-4480-A330-2DB15EF03860" />
                                    <small className="text-muted">Full name as displayed on card</small>
                                    <div className="invalid-feedback">
                                        Name on card is required
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="cc-number" className="form-label">Credit card number</label>
                                    <input type="text" className="form-control" id="cc-number" placeholder="" required="" wtx-context="E2B6DD74-AC56-44B9-8D2A-979AB09055E4" />
                                    <div className="invalid-feedback">
                                        Credit card number is required
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="cc-expiration" className="form-label">Expiration</label>
                                    <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" wtx-context="3D132A8E-93B2-42B2-971E-6723AD705C73" />
                                    <div className="invalid-feedback">
                                        Expiration date required
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="cc-cvv" className="form-label">CVV</label>
                                    <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" wtx-context="107A4309-9E48-412D-8AA8-7959AB8A315D" />
                                    <div className="invalid-feedback">
                                        Security code required
                                    </div>
                                </div>
                            </div>

                            <hr className="my-4" />

                            <button className="w-100 btn btn-outline-dark btn-lg" type="submit">Continue to checkout</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Checkout;
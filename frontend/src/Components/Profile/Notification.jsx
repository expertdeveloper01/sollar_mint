import React from 'react'

export default function Notification() {
    return (
        <div>
            <div className="tab-7">
                <div className="row wow fadeIn">
                    <div className="col-md-6 mb-sm-20">
                        <div className="switch-with-title s2">
                            <h5>Item Sold</h5>
                            <div className="de-switch">
                                <input type="checkbox" id="notif-item-sold" className="checkbox" />
                                <label for="notif-item-sold"></label>
                            </div>
                            <div className="clearfix"></div>
                            <p className="p-info">When someone purhased your item.</p>
                        </div>

                        <div className="spacer-20"></div>

                        <div className="switch-with-title s2">
                            <h5>Bid Activity</h5>
                            <div className="de-switch">
                                <input type="checkbox" id="notif-bid-activity" className="checkbox" />
                                <label for="notif-bid-activity"></label>
                            </div>
                            <div className="clearfix"></div>
                            <p className="p-info">When someone purhased your item.</p>
                        </div>

                        <div className="spacer-20"></div>

                        <div className="switch-with-title s2">
                            <h5>Auction Expiration</h5>
                            <div className="de-switch">
                                <input type="checkbox" id="notif-auction-expiration" className="checkbox" />
                                <label for="notif-auction-expiration"></label>
                            </div>
                            <div className="clearfix"></div>
                            <p className="p-info">When an auction you created ends.</p>
                        </div>

                    </div>

                    <div className="col-md-6">
                        <div className="switch-with-title s2">
                            <h5>Successful Purchase</h5>
                            <div className="de-switch">
                                <input type="checkbox" id="notif-successful-purchase" className="checkbox" />
                                <label for="notif-successful-purchase"></label>
                            </div>
                            <div className="clearfix"></div>
                            <p className="p-info">When you successfully buy an item.</p>
                        </div>

                        <div className="spacer-20"></div>

                        <div className="switch-with-title s2">
                            <h5>Outbid</h5>
                            <div className="de-switch">
                                <input type="checkbox" id="notif-outbid" className="checkbox" />
                                <label for="notif-outbid"></label>
                            </div>
                            <div className="clearfix"></div>
                            <p className="p-info">When an offer you placed is exceeded by another user.</p>
                        </div>

                        <div className="spacer-20"></div>



                    </div>
                </div>
            </div>
        </div>
    )
}

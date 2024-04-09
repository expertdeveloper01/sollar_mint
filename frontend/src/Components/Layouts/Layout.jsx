import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({ children, title = "" }) {
    return (
        <>
            <Header />
            <div className="no-bottom no-top" id="content">
                <div id="top"></div>
                {
                    title && (
                        <section
                            id="subheader"
                            className="text-light"
                            style={{
                                background: "url(images/background/subheader.jpg) top"
                            }}
                        >
                            <div className="center-y relative">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h1>{title}</h1>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                }
                <section aria-label="section" className="pt-0">
                    {children}
                </section>
            </div>
            <a href="#" id="back-to-top"></a>
            <Footer />
        </>
    )
}

export default Layout
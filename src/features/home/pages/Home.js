import React from 'react'
import '../../../components/css/home.css'
import AcImage from "../../../assets/images/Air-Conditioner-Buying-Guide.jpg"
import electric1 from "../../../assets/images/electronic-image.jpg"
import groceryList from "../../../assets/images/grocery-list.jpg"
import { Link } from 'react-router-dom'
function Home() {
    return (
        <div>
            <div className='mt-2'>

                <div id="summerhero">
                    <a href="">
                        <img src="https://bjs.scene7.com/is/image/bjs/Campaign_Lockup_Summer_250415?fmt=png-alpha" alt="summer logo" id="testing" class="noImTesting" />
                    </a>
                </div>
                <div class="_3O5f_sZm9lytUM1Wosllfr mx-auto px-3 py-3" id="secondDiv" style={{ background: "white" }}>
                    <div class="_2SA8bHAsHyq8gQ-1tNHq3m p-0 mx-auto _2BpZ_5iVDJBziEXQCeUJkf container">
                        <div class="_375oix3DLhDQRsPsmoJl_U justify-content-center align-items-stretch p-0 Xy8BIaTdZgx45JccL-ou3 row">
                            <div class="col-6 col-sm-4 col-md-3 col-lg-3  _25EOnylYCLkIcfwFI03c4T col">
                                <div class="tile  _2-pOk6ANwdnuJTHpfGCaXt  rSpeLQrNlDiNvgcVA6QO_ pt-3 py-3 container" >
                                    <a href="/cg/our-brands/?shopall=y&amp;bcid=hphrgc01&amp;idt=20250527&amp;icn=Seasonal_Summer" target="_self" data-gtm-id="" data-gtm-position="" data-gtm-name="" data-gtm-creative="" class="anchor-wrap plp-espot-gtm-tag plp-espot-gtm-view  d-flex flex-wrap text-decoration-none mt-2 _4H6fQslkWrZUtx4R06Z--" >
                                        <div class="_1ZhovVYzMSoIiWB1XSbB3W col-12 px-0">
                                            <div class="sc-aXZVg iXGUiA ipiOJvFjUHtcs7c9JuuYQ">
                                                <Link to="/category/Grocery"><img src="https://bjs.scene7.com/is/image/bjs/Campaign_Tile_SS8_OBEvent_250523" alt="Our Brand Event" class="d-block w-100 " style={{ height: "175px" }} /></Link>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-6 col-sm-4 col-md-3 col-lg-3  _25EOnylYCLkIcfwFI03c4T col">
                                <div class="tile  _2-pOk6ANwdnuJTHpfGCaXt  rSpeLQrNlDiNvgcVA6QO_ pt-3 py-3 container" >
                                    <a href="/cg/our-brands/?shopall=y&amp;bcid=hphrgc01&amp;idt=20250527&amp;icn=Seasonal_Summer" target="_self" data-gtm-id="" data-gtm-position="" data-gtm-name="" data-gtm-creative="" class="anchor-wrap plp-espot-gtm-tag plp-espot-gtm-view  d-flex flex-wrap text-decoration-none mt-2 _4H6fQslkWrZUtx4R06Z--" >
                                        <div class="_1ZhovVYzMSoIiWB1XSbB3W col-12 px-0">
                                            <div class="sc-aXZVg iXGUiA ipiOJvFjUHtcs7c9JuuYQ">
                                                <Link to="/category/Electronics">   <img src={electric1} alt="Our Brand Event" class="d-block w-100" style={{ height: "175px" }} /></Link>

                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div class="col-6 col-sm-4 col-md-3 col-lg-3  _25EOnylYCLkIcfwFI03c4T col">
                                <div class="tile  _2-pOk6ANwdnuJTHpfGCaXt  rSpeLQrNlDiNvgcVA6QO_ pt-3 py-3 container" >
                                    <a href="/cg/our-brands/?shopall=y&amp;bcid=hphrgc01&amp;idt=20250527&amp;icn=Seasonal_Summer" target="_self" data-gtm-id="" data-gtm-position="" data-gtm-name="" data-gtm-creative="" class="anchor-wrap plp-espot-gtm-tag plp-espot-gtm-view  d-flex flex-wrap text-decoration-none mt-2 _4H6fQslkWrZUtx4R06Z--" >
                                        <div class="_1ZhovVYzMSoIiWB1XSbB3W col-12 px-0">
                                            <div class="sc-aXZVg iXGUiA ipiOJvFjUHtcs7c9JuuYQ">
                                                <Link to="/category/Grocery">  <img src={groceryList} alt="Our Brand Event" class="d-block w-100" style={{ height: "175px" }} /></Link>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='container text-center'>

                <h2>Our Stories</h2>
                <p className='text-center'>In 1989, we realised that times were changing. With mothers beginning to work outside the home, it was increasingly difficult to invest the time and effort needed to prepare pickles and powders for the family. Home-made pickles were disappearing from the typical Telugu home.</p>
                <button className='btn btn-warning mb-3'>READMORE</button>
            </div>
            <div className='container mb-3 mt-2'>
                <div className='row'>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6 mb-2'>
                        <img src={AcImage} style={{ width: "100%", height: "350px" }} />
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6 mb-2 text-center'>
                        <h2>4pm Cool Comfort
                        </h2>
                        <p>Whether you're working from home, helping the kids with homework, or just pausing for a cup of coffee, make sure your space stays just the way you like it—cool, calm, and comfortable. Our range of premium air conditioning solutions are designed for Indian homes, with a perfect blend of energy efficiency and powerful cooling.

                        </p>
                        <p>From compact split ACs for cozy bedrooms to powerful inverter models for large living rooms, we offer a variety of options tailored for your lifestyle. And for those unexpected guests or weekend movie nights, our fast-cooling turbo mode ensures your space is always welcoming—no sweat!

                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
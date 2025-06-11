import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';

import apiList from '../../../Api/Api_Calls'
import image1 from '../../../assets/images/Groceries/download.jpeg'
import image2 from '../../../assets/images/Groceries/rice.jpeg'
import image3 from '../../../assets/images/Groceries/amul.jpeg'
import image4 from '../../../assets/images/Groceries/kissan.jpeg'
import image5 from '../../../assets/images/Groceries/oats.jpeg'
import { useAuthContext } from '../../auth/context/AuthContext';
import { useCartContext } from '../../cart/context/CartContext';
const images = {
    1: image1,
    2: image2,
    3: image3,
    4: image4,
    5: image5
}
function Category(props) {
    const { role } = useAuthContext()

    const navigate = useNavigate()

    const params = useParams()
    const [searchParams, setSearchParams] = useSearchParams()
    console.log("searchParams", params)
    const [products, setProducts] = useState([]);
    const [editProduct, setEditProduct] = useState(null);
    params['sort'] = searchParams.get('sort')
    console.log(params);
    const { state: { cart }, dispatch } = useCartContext();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [params.id, params.sub_id])


    // const { setLogin, setRole } = useAuthContext();
    useEffect(() => {

        const sweetsData = async () => {
            console.log(apiList.fetch)

            try {
                const response = await axios.get(apiList.fetch, {
                    headers: {
                        'X-IBM-Client-Id': '0f5acdc45a51eb2bfd3639cf7a25e116',
                        'X-IBM-Client-Secret': 'b70cae6ca81e796a8fc4e593f86cc227'
                    }
                });

                //   console.log("oductData", response.data.categoryDataDetails); // Do something with the response
                console.log("responsegr", response.data.Grocery)
                setProducts(response.data.Grocery)
            } catch (error) {
                console.error("Error fetching product details:", error);
            }
        }
        sweetsData();
    }, [params])

    const handleEditChange = (e) => {
        setEditProduct({
            ...editProduct,
            [e.target.name]: e.target.value
        });
    };
    const handleUpdateProduct = async () => {
        try {
            const dataDetails = await axios.post(`${apiList.updateProduct}/grocery`,
                {
                    product_name: editProduct.ITEM_NAME,
                    quantity: editProduct.QTY,
                    price: editProduct.PRICE
                }, {
                headers: {
                    'X-IBM-Client-Id': '0f5acdc45a51eb2bfd3639cf7a25e116',
                    'X-IBM-Client-Secret': 'b70cae6ca81e796a8fc4e593f86cc227'
                }
            }

            );
            console.log(dataDetails.data)
            alert("Product updated successfully");


            setProducts((prev) =>
                prev.map((p) => (p.ITEM_ID === editProduct.ITEM_ID ? editProduct : p))
            );
        } catch (error) {
            console.error("Error updating product:", error);
            alert("Failed to update product");
        }
    };
    const handleAddCart = useCallback((itemToAdd) => {


        console.log("updatedCart", itemToAdd)
        dispatch({ type: 'ADD_CART', products: itemToAdd })
    }, [dispatch])
    return (


        <div className='container-fluid'>
            <div className='row mt-2'>
                <h3 className='text-center mt-3 mb-3'>{params.name}</h3>

                {products.map((product, index) => {
                    // const selectedWeight = selectedWeights[product.product_id] || product.weights[0];
                    // const key = `${product.product_id}-${selectedWeight.weight_id}`;

                    return (<div className='col-12 col-sm-12 col-md-3 col-lg-3 mb-3'>


                        <img src={images[product.ITEM_ID]} style={{ width: 200, height: 200, objectFit: 'contain' }} />

                        <h5 className='text-center'>{product.ITEM_NAME}</h5>
                        <div className='text-center mb-2'>
                            <span>From </span>
                            <span>Rs. {product.PRICE}</span>
                        </div>
                        {role === 1 && <div>
                            <button
                                className='btn btn-primary w-100'
                                data-bs-toggle="modal" data-bs-target="#exampleModal1" onClick={() => setEditProduct({ ...product })}>
                                Update Product
                            </button>
                        </div>}
                        {role === 0 && <div>
                            <button
                                className='btn w-100 text-light' style={{ backgroundColor: "rgb(197, 47, 36)" }}
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal" onClick={() => handleAddCart({ ...product, image: images[product.ITEM_ID] })}>
                                Add To Cart
                            </button>
                        </div>}




                    </div>
                    )
                })}

            </div>
            <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Product Modification</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            {editProduct && (
                                <div className='form-group mb-3'>
                                    <label>Qty</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="QTY"
                                        value={editProduct.QTY || ''}
                                        onChange={handleEditChange}
                                    />
                                    <label>Price</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="PRICE"
                                        value={editProduct.PRICE || ''}
                                        onChange={handleEditChange}
                                    />
                                </div>
                            )}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={handleUpdateProduct}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <b class="modal-title w-100" id="exampleModalLabel">
                                <div className='row text-center'>
                                    <div className='col-2 col-sm-2 col-md-2 col-lg-2'>
                                        Just added
                                    </div>
                                    <div className='col-2 col-sm-2 col-md-2 col-lg-2'>
                                        Item
                                    </div>
                                    <div className='col-2 col-sm-2 col-md-2 col-lg-2'>
                                        Qty
                                    </div>
                                    <div className='col-2 col-sm-2 col-md-2 col-lg-2'>
                                        Item Price(Size)
                                    </div>
                                    <div className='col-2 col-sm-2 col-md-2 col-lg-2'>
                                        Total Price
                                    </div>
                                    <div className='col-2 col-sm-2 col-md-2 col-lg-2'>
                                        Sub Total
                                    </div>
                                </div>
                            </b>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">


                            <div className='row text-center'>
                                <div className='col-2 col-sm-2 col-md-2 col-lg-2'>
                                    image
                                </div>
                                <div className='col-2 col-sm-2 col-md-2 col-lg-2'>
                                    <p>product_name</p>
                                </div>
                                <div className='col-2 col-sm-2 col-md-2 col-lg-2'>
                                    Qty
                                </div>
                                <div className='col-2 col-sm-2 col-md-2 col-lg-2'>
                                    price
                                </div>
                                <div className='col-2 col-sm-2 col-md-2 col-lg-2'>
                                    total
                                </div>
                                <div className='col-2 col-sm-2 col-md-2 col-lg-2'>
                                    Sub Total
                                </div>
                            </div>



                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" >KEEP SHOPPING</button>
                            <button data-bs-dismiss="modal" className='btn btn-primary' onClick={() => { navigate("/Cart") }}>Go To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Category
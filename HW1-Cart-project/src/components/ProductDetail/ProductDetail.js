import React from "react";
import "./ProductDetail.css";

const ProductDetail = (props) => {
    const { selectedProduct } = props;
    return (
        <>
            {selectedProduct !== null && (
                <div className="product-detail-container">
                    <div className="card mb-3" style={{ maxWidth: 860 }}>
                        <div className="row g-0">
                            <div className="col-md-6 mb-3 mt-3 d-flex flex-column justify-content-center">
                                <h3
                                    className="card-title"
                                    style={{ textAlign: "center" }}
                                >
                                    {selectedProduct?.name}
                                </h3>
                                <img
                                    src={selectedProduct?.img}
                                    className="img-fluid rounded-start"
                                    alt="..."
                                />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h3 className="card-title">Tech specs</h3>
                                    <div className="card-text">
                                        <div className="tech-specs-container">
                                            <p>Màn hình</p>
                                            <p>
                                                {selectedProduct?.info.screen}
                                            </p>
                                            <p>Hệ điều hành</p>
                                            <p>{selectedProduct?.info.os}</p>
                                            <p>Camera trước</p>
                                            <p>
                                                {
                                                    selectedProduct?.info
                                                        .frontCamera
                                                }
                                            </p>
                                            <p>Camera sau</p>
                                            <p>
                                                {
                                                    selectedProduct?.info
                                                        .backCamera
                                                }
                                            </p>
                                            <p>RAM</p>
                                            <p>{selectedProduct?.ram}</p>
                                            <p>ROM</p>
                                            <p>{selectedProduct?.rom}</p>
                                        </div>
                                    </div>
                                    <p className="card-text">
                                        <small className="text-muted">
                                            Last updated 3 mins ago
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductDetail;

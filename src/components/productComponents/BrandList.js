import React from "react";

const BrandList = () => {
    return (
        <div>
            <div className="mt-5 container" style={{
                marginLeft: "160px",
            }}><p className="" style={{ fontWeight: "bolder", marginBottom: "-15px", fontSize: "20px", color: "rgb(10,10,150)" }} >Brand List</p></div>

            <div className="row" style={{ justifyContent: "center", }}>
                <div className="col-2 card" style={{ backgroundColor: "rgb(246,246,246)", margin: "20px" }}>
                    <img class="card-img-top" src={require("../dev/static/bmw.png")} alt="Card image cap" />
                    <span>Bmw</span>

                </div>
                <div className="col-2 card" style={{ backgroundColor: "rgb(246,246,246)", margin: "20px" }}>

                    <img class="card-img-top" src={require("../dev/static/audi.png")} alt="Card image cap" />
                    <span>Audi</span>

                </div>
                <div className="col-2 card" style={{ backgroundColor: "rgb(246,246,246)", margin: "20px" }}>

                    <img class="card-img-top" src={require("../dev/static/wolkswagen.png")} alt="Card image cap" />
                    <span>Wolkswagen</span>

                </div>
                <div className="col-2 card" style={{ backgroundColor: "rgb(246,246,246)", margin: "20px" }}>

                    <img class="card-img-top" src={require("../dev/static/mercedes.png")} alt="Card image cap" />
                    <span>Mercedes</span>

                </div>
            </div>

        </div>)

}

export default BrandList;

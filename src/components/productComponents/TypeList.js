import React from "react"


const TypeList = () => {

    return (
        <div>
            <div className="mt-5 container" style={{
                marginLeft: "160px",
            }}><p className="" style={{ fontWeight: "bolder", marginBottom: "-15px", fontSize: "20px", color: "rgb(10,10,150)" }} >TypeList</p></div>

            <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-2 card" style={{ margin: "20px" }}>
                    <img class="card-img-top" src={require("../dev/static/4x4.png")} alt="Card image cap" />
                    4x4
                </div>

                <div className="col-2 card" style={{ margin: "20px" }}>
                    <img class="card-img-top" src={require("../dev/static/sport.png")} alt="Card image cap" />
sport                </div>

                <div className="col-2 card" style={{ margin: "20px" }}  >
                    <img class="card-img-top" src={require("../dev/static/family.jpg")} alt="Card image cap" />
                    for family
                </div>
            </div>

        </div>)

}


export default TypeList;
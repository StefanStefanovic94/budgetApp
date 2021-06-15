import React from "react"
import $ from 'jquery';
import "./singlecategoriesincome.css"

const SingleCategoriesIncome = ({ categories, setId, idCheckboxState }) => {


  $("input:radio").on('click', function () {
    var $box = $(this);
    if ($box.is(":checked")) {
      var group = "input:radio[name='" + $box.attr("name") + "']";
      $(group).prop("checked", false);
      $box.prop("checked", true);
    } else {
      $box.prop("checked", false);
    }
  });


  return (
    <div >{
      categories.map((one) => {
        return (
          <div className={idCheckboxState === one.id ? "active" : ""}>
            <div className="singleCategory">
              <div className="leftDiv">
                <div>
                  <img src={one.icon_svg} alt="icon" />
                </div>
                <div>
                  <h2>{one.name}</h2>
                  <h3>{one.description}</h3>
                </div>
              </div>
              <div className="inputDiv">
                <input className="butt" onClick={setId} type="radio" id={one.id} name="" value="test"></input>
              </div>
            </div>
          </div>
        )
      })
    }</div>
  )
}


export default SingleCategoriesIncome
import React, {useState} from 'react'
import '../../css/Stars.css'


function Stars() {
    const [star,setStar] = useState(0);

    function GetStar(e) {
        setStar(e);
    }
  return (
    <div className='d-flex align-items-center gap-1'>
        <span className='text-warning starItem'>{star}</span>
        <div className="rating">
            <input value="5" name="rate" id="star5" type="radio"/>
            <label title="text4" for="star5" onClick={() => GetStar(5)}></label>
            <input value="4" name="rate" id="star4" type="radio"/>
            <label title="text3" for="star4" onClick={() => GetStar(4)}></label>
            <input value="3" name="rate" id="star3" type="radio"/>
            <label title="text2" for="star3" onClick={() => GetStar(3)}></label>
            <input value="2" name="rate" id="star2" type="radio"/>
            <label title="text1" for="star2" onClick={() => GetStar(2)}></label>
            <input value="1" name="rate" id="star1" type="radio"/>
            <label title="text0" for="star1" onClick={() => GetStar(1)}></label>
        </div>
    </div>
  )
}

export default Stars
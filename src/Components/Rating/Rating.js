import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import "./Rating.css"

const Rating = () => {
  return (
    <div>
      <Header />
      <div className='m-3'>
        <div>
          <span className='cshead'>Customer Satisfaction Survey</span>
        </div>
        <div className='mt-3 mb-3'>
          <span className='cs_Ques'>
            How satisfied are you with our customer service department?
          </span>
        </div>
        <div className='d-flex flex-column'>
          <div className=" vaultUpdate btn-group " role="group" aria-label="">
            <div>
              <input
                type="radio"
                className="btn-check"
                name="productType"
                id="VerySatisfied"
                autoComplete="off"
                checked=""
              // value="Inward"
              // value={stageupdate?.productType }
              // checked={stageupdate?.productType == 'Inward'}
              // onChange={updatehandleChange}
              />
              <label className="btn vaultBtn p-2" htmlFor="VerySatisfied">Very Satisfied</label>
            </div>
            <div>
              <input
                type="radio"
                className="btn-check"
                name="productType"
                id="Satisfied"
                autoComplete="off"
                checked="checked"
              // value="Inward"
              // value={stageupdate?.productType }
              // checked={stageupdate?.productType == 'Inward'}
              // onChange={updatehandleChange}
              />
              <label className="btn vaultBtn p-2" htmlFor="Satisfied">Satisfied</label>
            </div>
            <div>
              <input
                type="radio"
                className="btn-check"
                name="productType"
                id="Neutral"
                autoComplete="off"
                checked=""
              // value="Inward"
              // value={stageupdate?.productType }
              // checked={stageupdate?.productType == 'Inward'}
              // onChange={updatehandleChange}
              />
              <label className="btn vaultBtn p-2" htmlFor="Neutral">Neutral</label>
            </div>
            <div>
              <input
                type="radio"
                className="btn-check"
                name="productType"
                id="Dissatisfied"
                autoComplete="off"
                checked=""
              // value="Inward"
              // value={stageupdate?.productType }
              // checked={stageupdate?.productType == 'Inward'}
              // onChange={updatehandleChange}
              />
              <label className="btn vaultBtn p-2" htmlFor="Dissatisfied">Dissatisfied</label>
            </div>
            <div>
              <input
                type="radio"
                className="btn-check"
                name="productType"
                id="VeryDissatisfied"
                autoComplete="off"
                checked=""
              // value="Inward"
              // value={stageupdate?.productType }
              // checked={stageupdate?.productType == 'Inward'}
              // onChange={updatehandleChange}
              />
              <label className="btn vaultBtn p-2" htmlFor="VeryDissatisfied">Very Dissatisfied</label>
            </div>
            
           


          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Rating
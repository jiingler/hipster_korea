import { useEffect } from "react";
import ItemButton from "./ItemButton";

const ButtonsField = ({ handleKeywordClick, setKeywordKorean }) => {
  useEffect(() => {
    const accessoriesBtn = document.getElementById('accessoriesBtn')
    const clothesBtn = document.getElementById('clothesBtn')
    const adornmentsBtn = document.getElementById('adornmentsBtn')
    const othersBtn = document.getElementById('othersBtn')
    const accessoriesCollapse = document.getElementById('accessories')
    const clothesCollapse = document.getElementById('clothes')
    const adornmentsCollapse = document.getElementById('adornments')
    const othersCollapse = document.getElementById('others')
    accessoriesBtn.addEventListener('click', () => {
      clothesCollapse.classList.remove("show")
      adornmentsCollapse.classList.remove("show")
      othersCollapse.classList.remove("show")
    })
    clothesBtn.addEventListener('click', () => {
      accessoriesCollapse.classList.remove("show")
      adornmentsCollapse.classList.remove("show")
      othersCollapse.classList.remove("show")
    })
    adornmentsBtn.addEventListener('click', () => {
      clothesCollapse.classList.remove("show")
      accessoriesCollapse.classList.remove("show")
      othersCollapse.classList.remove("show")
    })
    othersBtn.addEventListener('click', () => {
      clothesCollapse.classList.remove("show")
      adornmentsCollapse.classList.remove("show")
      accessoriesCollapse.classList.remove("show")
    })
  })
  return (
    <div className="text-center mb-4">
      <div>
        <div className="d-grid gap-2">  
          <button id="accessoriesBtn"
            className="btn btn-dark rounded-0 fw-bold border-top-0 border-start-0 border-end-0 border-white" onClick={() => handleKeywordClick("設計小物")}
            type="button" data-bs-toggle="collapse" data-bs-target="#accessories"
            aria-expanded="false" aria-controls="accessories">
            設計小物
          </button>
        </div>
        <div className="collapse mb-3" id="accessories">
          <ItemButton name={'手機殼'} setKeywordKorean={setKeywordKorean} />
          <ItemButton name={'airpods殼'} setKeywordKorean={setKeywordKorean} />
          <ItemButton name={'電腦包'} setKeywordKorean={setKeywordKorean} />
          <ItemButton name={'ipad包'} setKeywordKorean={setKeywordKorean} />
          <ItemButton name={'環保杯'} setKeywordKorean={setKeywordKorean} />
          <ItemButton name={'玻璃杯'} setKeywordKorean={setKeywordKorean} />
          <ItemButton name={'筆記本'} setKeywordKorean={setKeywordKorean} />
          <ItemButton name={'手帳'} setKeywordKorean={setKeywordKorean} />
          <ItemButton name={'便利貼'} setKeywordKorean={setKeywordKorean} />
        </div>
      </div>
      <div>
        <div className="d-grid gap-2">  
          <button id="clothesBtn"
            className="btn btn-dark rounded-0 fw-bold border-top-0 border-start-0 border-end-0 border-white" onClick={() => handleKeywordClick("衣褲帽包")}
            type="button" data-bs-toggle="collapse" data-bs-target="#clothes"
            aria-expanded="false" aria-controls="clothes">
            衣、褲、帽、包
          </button>
        </div>  
        <div className="collapse mb-3" id="clothes">
          <ItemButton name={'睡衣'} setKeywordKorean={setKeywordKorean} />
          <ItemButton name={'褲'} setKeywordKorean={setKeywordKorean} />
          <ItemButton name={'鞋'} setKeywordKorean={setKeywordKorean} />
          <ItemButton name={'包'} setKeywordKorean={setKeywordKorean} />
          <ItemButton name={'帽'} setKeywordKorean={setKeywordKorean} />
        </div>
      </div>
      <div>
        <div className="d-grid gap-2">
          <button  id="adornmentsBtn" className="btn btn-dark rounded-0 fw-bold border-top-0 border-start-0 border-end-0 border-white" onClick={() => handleKeywordClick("飾品")}
            type="button" data-bs-toggle="collapse" data-bs-target="#adornments"
            aria-expanded="false" aria-controls="adornments">
              飾品
          </button>
        </div>
        <div className="collapse mb-3" id="adornments">
          <ItemButton name={'耳環'} setKeywordKorean={setKeywordKorean} />
          <ItemButton name={'項鍊'} setKeywordKorean={setKeywordKorean} />
          <ItemButton name={'手練'} setKeywordKorean={setKeywordKorean} />
          <ItemButton name={'手錶'} setKeywordKorean={setKeywordKorean} />
          <ItemButton name={'戒指'} setKeywordKorean={setKeywordKorean} />
        </div>
      </div>
      <div>
        <div className="d-grid gap-2">
          <button  id="othersBtn" className="btn btn-dark rounded-0 fw-bold border-top-0 border-start-0 border-end-0 border-white" onClick={() => handleKeywordClick("其他雜貨")}
            type="button" data-bs-toggle="collapse" data-bs-target="#others"
            aria-expanded="false" aria-controls="others">
            雜貨
          </button>
        </div>
        <div className="collapse mb-3" id="others">
          <ItemButton name={'化妝品'} setKeywordKorean={setKeywordKorean}/>
          <ItemButton name={'保養品'} setKeywordKorean={setKeywordKorean} />
          <ItemButton name={'偶像周邊'} setKeywordKorean={setKeywordKorean} />
          <ItemButton name={'家用品'} setKeywordKorean={setKeywordKorean} />
        </div>
      </div>
    </div>
  );
};

export default ButtonsField;

import { useEffect } from "react";
import ItemButton from "./ItemButton";

const ButtonsField = ({ handleKeywordClick, handleItemButtonClick }) => {
  useEffect(() => {
    const accessoriesBtn = document.getElementById('accessoriesBtn')
    const clothesBtn = document.getElementById('clothesBtn')
    const shoesBtn = document.getElementById('shoesBtn')
    const hatsBtn = document.getElementById('hatsBtn')
    const bagsBtn = document.getElementById('bagsBtn')
    const adornmentsBtn = document.getElementById('adornmentsBtn')
    const othersBtn = document.getElementById('othersBtn')
    const accessoriesCollapse = document.getElementById('accessories')
    const clothesCollapse = document.getElementById('clothes')
    const shoesCollapse = document.getElementById('shoes')
    const hatsCollapse = document.getElementById('hats')
    const bagsCollapse = document.getElementById('bags')
    const adornmentsCollapse = document.getElementById('adornments')
    const othersCollapse = document.getElementById('others')
    accessoriesBtn.addEventListener('click', () => {
      clothesCollapse.classList.remove("show")
      shoesCollapse.classList.remove("show")
      hatsCollapse.classList.remove("show")
      bagsCollapse.classList.remove("show")
      adornmentsCollapse.classList.remove("show")
      othersCollapse.classList.remove("show")
    })
    clothesBtn.addEventListener('click', () => {
      shoesCollapse.classList.remove("show")
      hatsCollapse.classList.remove("show")
      bagsCollapse.classList.remove("show")
      accessoriesCollapse.classList.remove("show")
      adornmentsCollapse.classList.remove("show")
      othersCollapse.classList.remove("show")
    })
    shoesBtn.addEventListener('click', () => {
      clothesCollapse.classList.remove("show")
      hatsCollapse.classList.remove("show")
      bagsCollapse.classList.remove("show")
      accessoriesCollapse.classList.remove("show")
      adornmentsCollapse.classList.remove("show")
      othersCollapse.classList.remove("show")
    })
    hatsBtn.addEventListener('click', () => {
      clothesCollapse.classList.remove("show")
      shoesCollapse.classList.remove("show")
      bagsCollapse.classList.remove("show")
      accessoriesCollapse.classList.remove("show")
      adornmentsCollapse.classList.remove("show")
      othersCollapse.classList.remove("show")
    })
    bagsBtn.addEventListener('click', () => {
      clothesCollapse.classList.remove("show")
      shoesCollapse.classList.remove("show")
      hatsCollapse.classList.remove("show")
      accessoriesCollapse.classList.remove("show")
      adornmentsCollapse.classList.remove("show")
      othersCollapse.classList.remove("show")
    })
    adornmentsBtn.addEventListener('click', () => {
      shoesCollapse.classList.remove("show")
      hatsCollapse.classList.remove("show")
      bagsCollapse.classList.remove("show")
      clothesCollapse.classList.remove("show")
      accessoriesCollapse.classList.remove("show")
      othersCollapse.classList.remove("show")
    })
    othersBtn.addEventListener('click', () => {
      shoesCollapse.classList.remove("show")
      hatsCollapse.classList.remove("show")
      bagsCollapse.classList.remove("show")
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
          <ItemButton name={'手機殼'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'airpods殼'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'筆電包'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'ipad包'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'環保杯'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'玻璃杯'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'筆記本'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'手帳'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'便利貼'} handleItemButtonClick={handleItemButtonClick} />
        </div>
      </div>
      <div>
        <div className="d-grid gap-2">  
          <button id="clothesBtn"
            className="btn btn-dark rounded-0 fw-bold border-top-0 border-start-0 border-end-0 border-white" onClick={() => handleKeywordClick("服飾")}
            type="button" data-bs-toggle="collapse" data-bs-target="#clothes"
            aria-expanded="false" aria-controls="clothes">
            服飾
          </button>
        </div>  
        <div className="collapse mb-3" id="clothes">
          <ItemButton name={'女襯衫'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'男襯衫'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'短袖T'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'長袖T'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'無袖T'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'Polo衫'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'大學T'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'帽T'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'毛衣'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'連帽外套'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'飛行外套'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'皮外套'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'牛仔外套'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'西裝外套'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'針織外套'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'抓毛絨外套'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'訓練外套'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'棒球外套'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'換季大衣'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'冬大衣'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'羽絨外套'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'教練外套'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'牛仔褲'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'卡其褲'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'西裝褲'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'運動褲'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'短褲'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'leggings'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'吊帶褲'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'洋裝'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'裙子'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'睡衣'} handleItemButtonClick={handleItemButtonClick} />
        </div>
      </div>
      <div>
        <div className="d-grid gap-2">  
          <button id="shoesBtn"
            className="btn btn-dark rounded-0 fw-bold border-top-0 border-start-0 border-end-0 border-white" onClick={() => handleKeywordClick("鞋子")}
            type="button" data-bs-toggle="collapse" data-bs-target="#shoes"
            aria-expanded="false" aria-controls="shoes">
            鞋子
          </button>
        </div>  
        <div className="collapse mb-3" id="shoes">
          <ItemButton name={'帆布鞋'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'sneakers'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'跑步鞋'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'皮鞋'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'靴子'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'拖鞋'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'襪子'} handleItemButtonClick={handleItemButtonClick} />
        </div>
      </div>
      <div>
        <div className="d-grid gap-2">  
          <button id="hatsBtn"
            className="btn btn-dark rounded-0 fw-bold border-top-0 border-start-0 border-end-0 border-white" onClick={() => handleKeywordClick("帽子")}
            type="button" data-bs-toggle="collapse" data-bs-target="#hats"
            aria-expanded="false" aria-controls="hats">
            帽子
          </button>
        </div>  
        <div className="collapse mb-3" id="hats">
          <ItemButton name={'棒球帽'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'毛帽'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'漁夫帽'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'貝蕾帽'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'寬沿帽'} handleItemButtonClick={handleItemButtonClick} />
        </div>
      </div>
      <div>
        <div className="d-grid gap-2">  
          <button id="bagsBtn"
            className="btn btn-dark rounded-0 fw-bold border-top-0 border-start-0 border-end-0 border-white" onClick={() => handleKeywordClick("包包")}
            type="button" data-bs-toggle="collapse" data-bs-target="#bags"
            aria-expanded="false" aria-controls="bags">
            包包
          </button>
        </div>  
        <div className="collapse mb-3" id="bags">
          <ItemButton name={'背包'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'小包'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'托特包'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'單肩包'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'郵差包'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'帆布包'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'錢包'} handleItemButtonClick={handleItemButtonClick} />
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
          <ItemButton name={'耳環'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'項鍊'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'手鍊'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'手錶'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'戒指'} handleItemButtonClick={handleItemButtonClick} />
        </div>
      </div>
      <div>
        <div className="d-grid gap-2">
          <button  id="othersBtn" className="btn btn-dark rounded-0 fw-bold border-top-0 border-start-0 border-end-0 border-white" onClick={() => handleKeywordClick("其他雜貨")}
            type="button" data-bs-toggle="collapse" data-bs-target="#others"
            aria-expanded="false" aria-controls="others">
            其他雜貨
          </button>
        </div>
        <div className="collapse mb-3" id="others">
          <ItemButton name={'化妝品'} handleItemButtonClick={handleItemButtonClick}/>
          <ItemButton name={'保養品'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'偶像周邊'} handleItemButtonClick={handleItemButtonClick} />
          <ItemButton name={'生活用品'} handleItemButtonClick={handleItemButtonClick} />
        </div>
      </div>
    </div>
  );
};

export default ButtonsField;

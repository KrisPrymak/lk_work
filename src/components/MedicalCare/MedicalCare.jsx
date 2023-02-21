import React, {useState} from "react";
import style from "./MedicalCare.module.css";
import SearchForm from "./SearchForm/SearchForm";
import MedicalCareList from "./MedicalCareList/MedicalCareList";
import SelectedServicePage from "./SelectedServicePage/SelectedServicePage";
import {useSelector} from "react-redux";
import {TabTitle} from "../common/TabTitle/TabTitle";

const MedicalCare = () => {
  const [isOpenList, setIsOpenList] = useState(false);
  const [isSelectedCare, setIsSelectedCare] = useState({isSelect: false, id: null});
  const medicalCares = useSelector((state) => state.medicalCare.medicalCare);

  const closePage = () => {
    setIsSelectedCare({isSelect: false, id: null})
  }


  return (
        <>
          {/*<MyAccMobile />*/}
          {isSelectedCare.isSelect ? (
            <SelectedServicePage medicalCares={medicalCares} closePage={closePage} id={isSelectedCare.id}/>
          ) : (
            <div className={style.selectCarePage}>
              <TabTitle title={'Медицинские услуги'}/>
              <SearchForm setIsOpenList={setIsOpenList} />
              {isOpenList && (
                <MedicalCareList
                medicalCares={medicalCares}
                setIsSelectedCare={setIsSelectedCare}
                />
              )}
            </div>
          )}
        </>
  );
};

export default MedicalCare;


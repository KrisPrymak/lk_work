import React, { useState } from "react";
import style from "./MedicalCare.module.css";
import SearchForm from "./SearchForm/SearchForm";
import MyAccMobile from "../AdminPanel/AdminInterface/MyAccMobile/MyAccMobile";
import MedicalCareList from "./MedicalCareList/MedicalCareList";
import SelectedServicePage from "./SelectedServicePage/SelectedServicePage";
import { useSelector } from "react-redux";

const MedicalCare = () => {
  const [isOpenList, setIsOpenList] = useState(false);
  const [isSelectedCare, setIsSelectedCare] = useState({isSelect: false, id: null});
  const medicalCares = useSelector((state) => state.medicalCare.medicalCare);

  const closePage = () => {
    setIsSelectedCare({isSelect: false, id: null})
  }


  return (
        <div className={style.medicalCare__content}>
          <MyAccMobile />
          {isSelectedCare.isSelect ? (
            <SelectedServicePage medicalCares={medicalCares} closePage={closePage} id={isSelectedCare.id}/>
          ) : (
            <div className={style.selectCarePage}>
              <h1 className={style.medicalCare__title}>Медицинские услуги</h1>
              <SearchForm setIsOpenList={setIsOpenList} />
              {isOpenList && (
                <MedicalCareList
                medicalCares={medicalCares}
                setIsSelectedCare={setIsSelectedCare}
                />
              )}
            </div>
          )}

        </div>
  );
};

export default MedicalCare;


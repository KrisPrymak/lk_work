import { Icon } from "@iconify/react";
import { Button } from "@material-ui/core";
import React from "react";
import style from "./PopupRescheduleConsult.module.css";
import SelectInput from "../../common/SelectInput/SelectInput";

const PopupRescheduleConsult = ({
  setIsOpenRescheduleConsult,
  rescheduleSuccess,
}) => {
  return (
    <div className={style.popupBg}>
      <div className={style.popup}>
        <div className={style.popup__content}>
          <Icon
            icon="material-symbols:close"
            className={style.popup__cross}
            onClick={() => setIsOpenRescheduleConsult({isOpen: false, id: null})}
          />
          <div className={style.popup__info}>
            <h2 className={style.popup__title}>
              Перенос даты и времени консультации
            </h2>
            <div className={style.popup__name}>
              <span className={style.popup__name_left}>Наименование:</span>
              <span className={style.popup__name_right}>
                Консультация терапевта
              </span>
            </div>
            <div className={style.popup__oldDate}>
              <div className={style.popup__oldDate_title}>
                <span>Старая дата:</span>
                <span>Старое время:</span>
              </div>
              <div className={style.popup__oldDate_date}>
                <span>12.01.2023</span>
                <span>15:00</span>
              </div>
            </div>
            <div className={style.popup__newDate}>
              <SelectInput text="Новая дата" />
              <SelectInput text="Новое время" />
            </div>
            <div className={style.popup__buttonSubmit}>
              <Button
                variant="contained"
                style={{
                  width: "100%",
                  height: "48px",
                  fontWeight: "700",
                  textTransform: "none",
                  background: "#757575",
                  color: "#FFFFFF",
                }}
                disabled
                onClick={rescheduleSuccess}
              >
                Перенести запись
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupRescheduleConsult;

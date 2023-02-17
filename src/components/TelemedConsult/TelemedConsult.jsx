import { Button, FormControl, InputLabel, Select} from "@material-ui/core";
import { ButtonGroup, ListItemButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import style from "./TelemedConsult.module.css";

import BlueButton from "./../common/BlueButton/BlueButton";
import PopupSingUpConsult from "./PopupSingUpConsult/PopupSingUpConsult";
import PopupRescheduleConsult from "./PopupRescheduleConsult/PopupRescheduleConsult";
import PopupSuccessTemplate from "../common/PopupSuccessTemplate/PopupSuccessTemplate";
import PopupCancelQuest from "./PopupCancelQuest/PopupCancelQuest";
import PopupCancelSuccess from "./PopupCancelSuccess/PopupCancelSuccess";
import { useDispatch, useSelector } from "react-redux";
import { removeTelemedConsult } from "../../store/TelemedConsultsSlice";
import DropDownList from "../common/DropDownList/DropDownList";


const stylesSX = {
  buttonDisabled: {
    width: { xs: "160px", md: "100%" },
  },
  buttonChange: {
    width: { xs: "0px", md: "160px" },
    border: "1px solid #2C60E3",
    color: "#2C60E3",
    textTransform: "none",
    fontWeight: "700",
    marginTop: { xs: "100px", md: "0px" },
  },
  buttonCancel: {
    width: { xs: "313px", md: "160px" },
    border: "1px solid #FF0000",
    color: "#FF0000",
    textTransform: "none",
    fontWeight: "700",
    marginTop: { xs: "10px", md: "0px" },
  },
  noBorder: {
    outline: "none",
    border: "none",
    color: "#fff",
  },
};

const TelemedConsult = () => {
const telemedConsultsData = useSelector(state => state.telemedConsults.telemedConsults);
const dispatch = useDispatch();

  const [isAccess] = useState(true);
  const [consultType, setConsultType] = useState("planedConsult");

  const removeConsult = (id) => {
    dispatch(removeTelemedConsult({id}))
    setIsFirstRemoveConsult({ boolean: false, id: null });
    setIsRemovedSuccess(true);
  };

  const selectConsultType = (event) => {
    setConsultType(event.target.value);
  };

  //popup state
  const [isRescheduleSuccess, setIsRescheduleSuccess] = useState(false);
  const [isSignUpSuccess, setIsSignUpSuccess] = useState(false);
  const [isOpenSignUp, setIsOpenSignUp] = useState(false);
  const [isOpenRescheduleConsult, setIsOpenRescheduleConsult] = useState({
    isOpen: false,
    id: null,
  });
  const [isFirstRemoveConsult, setIsFirstRemoveConsult] = useState({
    boolean: false,
    id: null,
  });
  const [isRemovedSuccess, setIsRemovedSuccess] = useState(false);

  //popup set state

 
  const rescheduleSuccess = () => {
    setIsOpenRescheduleConsult({
      isOpen: false,
      id: null,
    });
    setIsRescheduleSuccess(true);
  };
  const openSignUpSuccess = () => {
    setIsSignUpSuccess(true);
    setIsOpenSignUp(false);
  };

  const closeAllModal = () => {
    setIsRescheduleSuccess(false);
    setIsFirstRemoveConsult({ boolean: false, id: null });
    setIsRemovedSuccess(false);
    setIsSignUpSuccess(false);
  };
  console.log(consultType)
  return (
      <div>
        {isRemovedSuccess && (
          <PopupCancelSuccess closeAllModal={closeAllModal} />
        )}
        {isFirstRemoveConsult.boolean && (
          <PopupCancelQuest
            closeAllModal={closeAllModal}
            removeConsult={removeConsult}
            id={isFirstRemoveConsult.id}
          />
        )}
        {isOpenSignUp && (
          <PopupSingUpConsult
          setIsOpenSignUp={setIsOpenSignUp}
            openSignUpSuccess={openSignUpSuccess}
          />
        )}
        {isOpenRescheduleConsult.isOpen && (
          <PopupRescheduleConsult
            rescheduleSuccess={rescheduleSuccess}
            setIsOpenRescheduleConsult={setIsOpenRescheduleConsult}
          />
        )}
        {isRescheduleSuccess && (
          <PopupSuccessTemplate
            text="Перенос записи на консультацию сделан"
            textButton="Перейти к консультации"
            handleClick={closeAllModal}
          />
        )}
        {isSignUpSuccess && (
          <PopupSuccessTemplate
            text="Запись на консультацию сделана"
            handleClick={closeAllModal}
          />
        )}
        <h1 className={style.title}>Телемедицинские консультации</h1>
        <div className={style.content}>
          <DropDownList handleChange={selectConsultType} first={{value: 'planedConsult', text: 'Запланированные консультации'}} second={{value: 'doneConsult', text: 'Проведённые консультации'}}/>

          <BlueButton
            disabled={!isAccess}
            text="Новая консультация"
            width="350px"
            handleClick={setIsOpenSignUp}
            height="48px"
          />

          {isAccess ? (
            consultType === "planedConsult" ? (
              telemedConsultsData.map((d) => {
                const buttonStyleBlue = d.today
                  ? stylesSX.buttonDisabled
                  : stylesSX.buttonChange;
                const buttonStyleRed = d.today
                  ? stylesSX.buttonDisabled
                  : stylesSX.buttonCancel;
                return (
                  <div className={style.content__listItem}>
                    <ListItemButton>
                    <div className={style.consultTemplate}>
                      <h2 className={style.consultTemplate__title}>
                        {d.title}
                      </h2>
                      <div className={style.consultTemplate__info}>
                        <p>
                          Дата:{" "}
                          <span className={style.consultTemplate__date}>
                            {d.date}
                          </span>
                        </p>
                        <p>
                          Время:{" "}
                          <span className={style.consultTemplate__time}>
                            {d.time}
                          </span>
                        </p>
                        <p>
                          Врач:{" "}
                          <span className={style.consultTemplate__doctor}>
                            {d.doctor}
                          </span>
                        </p>
                      </div>
                      <p className={style.consultTemplate__description}>
                        В назначенный день и время, будет активирована кнопка
                        «Подключиться» с помощью которой вы сможете
                        присоединиться к видео-консультации
                      </p>
                      <ButtonGroup
                        sx={{ justifyContent: "space-between" }}
                        className={style.buttons}
                      >
                        <BlueButton
                          width="320px"
                          text="Подключиться к видео"
                          disabled={!d.today}
                        />
                        <Button
                          variant="outlined"
                          style={buttonStyleBlue}
                          onClick={() => {
                            setIsOpenRescheduleConsult({isOpen: true, id: d.id});
                          }}
                          disabled={d.today}
                          sx={{ marginTop: { xs: "10px" } }}
                        >
                          Перенести
                        </Button>
                        <Button
                          variant="outlined"
                          style={buttonStyleRed}
                          disabled={d.today}
                          onClick={() => {
                            setIsFirstRemoveConsult({boolean: true, id: d.id});
                          }}
                        >
                          Отменить
                        </Button>
                      </ButtonGroup>
                    </div>
                  </ListItemButton>
                  </div>
                );
              })
            ) : (
              <div className={style.telemed__doneConsults}>Проведенные</div>
            )
          ) : (
            <div className={style.telemed__accessProhibit}>
              В данный момент Вам не доступны телемедицинские консультации.
              Чтобы получить доступ, Вам надо один раз очно посетить
              специалиста, к которому Вы хотите попасть на телеконсультацию.
            </div>
          )}
        </div>
      </div>
  );
};

export default TelemedConsult;

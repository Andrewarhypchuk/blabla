import * as React from "react";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import styles from "../Styling/homePage.module.css";
import {
  BRAND,
  COMMUNICATION_STRATEGY,
  DESIGN,
  PRODUCTION,
  PROMOTION,
  SMM,
  SMM_STRATEGY,
} from "@/Interfaces/interfaces";
import PopUpArrow from "../Assets/Images/HomePageImages/PopUp/PopUpArrow.svg";
import Image from "next/image";
import ComeBackButton from "./ComeBackButton";

export default function TransitionsModal({ open, modalName }: any) {
  return (
    <Fade in={open}>
      <Box className={styles.modalPopUp}>
        <div className={styles.modalPopUp__infoSection}>
          <div className={styles.modalPopUp__imagesList}>
            {modalName === SMM_STRATEGY && (
              <div className={styles.modalPopUp__imageContainer}>
                <div className={styles.modalPopUp__imageContainerTopLeftImagesText}>30 днів</div>
                <div className={styles.modalPopUp__smmStrategyImage}></div>
              </div>
            )}
            {modalName === SMM && (
              <div className={styles.modalPopUp__imageContainer}>
                <div className={styles.modalPopUp__imageContainerTopLeftImagesText}>30 днів</div>
                <div className={styles.modalPopUp__smmImage}></div>
              </div>
            )}
            {modalName === COMMUNICATION_STRATEGY && (
              <div className={styles.modalPopUp__imageContainer}>
                <div className={styles.modalPopUp__imageContainerTopLeftImagesText}>60 днів</div>
                <div
                  className={styles.modalPopUp__communicationStrategyImage}
                ></div>
              </div>
            )}
            {modalName === BRAND && (
              <div className={styles.modalPopUp__imageContainer}>
                <div className={styles.modalPopUp__imageContainerTopLeftImagesText}>неймінг</div>
                <div className={styles.modalPopUp__brandFirstImage}></div>
              </div>
            )}
            {modalName === BRAND && (
              <div className={styles.modalPopUp__imageContainer}>
                <div className={styles.modalPopUp__imageContainerTopLeftImagesText}>логобук</div>
                <div className={styles.modalPopUp__brandSecondImage}></div>
              </div>
            )}
            {modalName === BRAND && (
              <div className={styles.modalPopUp__imageContainer}>
                <div className={styles.modalPopUp__imageContainerTopLeftImagesText}>брендбук</div>
                <div className={styles.modalPopUp__brandThirdImage}></div>
              </div>
            )}
            {modalName === DESIGN && (
              <div className={styles.modalPopUp__imageContainer}>
                <div className={styles.modalPopUp__imageContainerTopLeftImagesText}>14 - 30 днів</div>
                <div className={styles.modalPopUp__designImage}></div>
              </div>
            )}
            {modalName === PROMOTION && (
              <div className={styles.modalPopUp__imageContainer}>
                <div className={styles.modalPopUp__imageContainerTopLeftImagesText}>30 днів</div>
                <div className={styles.modalPopUp__promotionImage}></div>
              </div>
            )}
            {modalName === PRODUCTION && (
              <div className={styles.modalPopUp__imageContainer}>
                <div className={styles.modalPopUp__imageContainerTopLeftImagesText}>10 днів</div>
                <div className={styles.modalPopUp__productionImage}></div>
              </div>
            )}
          </div>
          <div className={styles.modalPopUp__informationList}>
            {modalName === SMM_STRATEGY && (
              <div className={styles.modalPopUp__informationItem}>
                <div className={styles.modalPopUp__informationItemHeader}>
                  SMM-СТРАТЕГІЯ
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Аналіз проробленої роботи
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Визначення цілей просування
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Аналіз ЦА і релевантного контенту під неї
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Аналіз діяльності конкурентів в соц.мережах та їх
                  позиціонування
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Визначення майданчиків та аналіз форматів
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Архетипування та TOV
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Розробка позиціонування в соціальних мережах
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Розробка унікального рубрикатору
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Розробка 2-х альтернативних візуальних концепцій
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Розробка оформлення сторінок
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Ідеї колаборацій з брендами \ інфлуенсерами
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Мудборд фотосесії
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Таймлайн
                </div>
              </div>
            )}
            {modalName === COMMUNICATION_STRATEGY && (
              <div className={styles.modalPopUp__informationItem}>
                <div className={styles.modalPopUp__informationItemHeader}>
                  КОМУНІКАЦІЙНА СТРАТЕГІЯ
                </div>
                <div className={styles.modalPopUp__informationItemSecondHeader}>
                  ПЕРШИЙ МІСЯЦЬ
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Аналіз середовища
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Кількісне дослідження
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Глибинне дослідження
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Визначення бар’ єрів
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Аналіз шляху клієнта
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Аналіз цільової аудиторії
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Аналіз попередньої діяльності
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Аналіз конкурентів
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  SWOT- аналіз
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Мудборд фотосесії
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Таймлайн
                </div>
                <div className={styles.modalPopUp__informationItemSecondHeader}>
                  ДРУГИЙ МІСЯЦЬ
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Визначення позиціонування
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Архетипізація
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Емоціо та Раціо бренду
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  TOV та меседжі
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Архетипізація
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  KEY Visual
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  KEY-massage
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Ідеї для рекламних роликів
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Ідеї для рубрик у соціальних мережах
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Promotion - ідеї :
                </div>
                <div className={styles.modalPopUp__informationItemSubTitle}>
                  - Точки контакту
                </div>
                <div className={styles.modalPopUp__informationItemSubTitle}>
                  - Соціальна відповідальність
                </div>
                <div className={styles.modalPopUp__informationItemSubTitle}>
                  - Колаборації
                </div>
                <div className={styles.modalPopUp__informationItemSubTitle}>
                  - Медіа
                </div>
                <div className={styles.modalPopUp__informationItemSubTitle}>
                  - Події та заходи
                </div>
                <div className={styles.modalPopUp__informationItemSubTitle}>
                  - Власні продукти
                </div>
              </div>
            )}
            {modalName === SMM && (
              <div className={styles.modalPopUp__informationItem}>
                <div className={styles.modalPopUp__informationItemHeader}>
                  SMM СУПРОВІД
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Створення редакційного плану
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Створення візуалів
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Текстова частина публікації
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Оформлення та публікація stories
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Оформлення та публікація reels
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Модерація сторінки
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Проведення активацій
                </div>
              </div>
            )}
            {modalName === BRAND && (
              <div className={styles.modalPopUp__informationItem}>
                <div className={styles.modalPopUp__informationItemHeader}>
                  НЕЙМІНГ
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Брифінг (1 год)
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Розробка 10 унікальних варіантів неймінгу з доступними
                  доменами
                </div>
              </div>
            )}
            {modalName === BRAND && (
              <div className={styles.modalPopUp__informationItem}>
                <div className={styles.modalPopUp__informationItemHeader}>
                  ЛОГОБУК
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Розробка 5 концепцій лого
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Оформлення логобуку з обраним концептом
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Інструкція та правила використання логотипу
                </div>
              </div>
            )}
            {modalName === BRAND && (
              <div className={styles.modalPopUp__informationItem}>
                <div className={styles.modalPopUp__informationItemHeader}>
                  БРЕНДБУК
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  4 концепти айдентики та лого
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  10 бренд-елементів (макапів)
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  5 макетів з обраних бренд-елементів
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Формування бренд-буку (лого, шрифти,фірмові елементи,
                  прототипи дизайну, брендування соціальних мереж)
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Гайд ( інструкція з використання)
                </div>
              </div>
            )}
            {modalName === DESIGN && (
              <div className={styles.modalPopUp__informationItem}>
                <div className={styles.modalPopUp__informationItemHeader}>
                  UI/UX ДИЗАЙН ТА РОЗРОБКА ВЕБ-САЙТІВ
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Брифування (1 год)
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Створення мудборду
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Розробка UI прототипів та карти сайту
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Верстка та розробка веб-сторінок
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Тестування
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Запуск сайту
                </div>
              </div>
            )}
            {modalName === PROMOTION && (
              <div className={styles.modalPopUp__informationItem}>
                <div className={styles.modalPopUp__informationItemHeader}>
                  СПІВПРАЦЯ З МЕДІА
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Створення карти медіа
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  План теми для прес-релізів
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Комунікація з медіа
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Прес-реліз
                </div>
                <div className={styles.modalPopUp__informationItemHeader}>
                  СПІВПРАЦЯ З ІНФЛУЕНСЕРАМИ
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Створення карти Інфлуенсерів
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  План тем для колаборацій
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Комунікація з блогерами
                </div>
              </div>
            )}
            {modalName === PRODUCTION && (
              <div className={styles.modalPopUp__informationItem}>
                <div className={styles.modalPopUp__informationItemHeader}>
                  ФОТОЗЙОМКА
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Підготовка кошторису, таймінгів, розкадровки та плану зйомки
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Предметна фотозйомка
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Іміджева фотозйомка
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Командна фотозйомка
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Фотозйомка локації, інтер’єру та екстер’єру
                </div>
                <div className={styles.modalPopUp__informationItemTitle}>
                  Зйомка Reels
                </div>
              </div>
            )}
          </div>
        </div>
        <ComeBackButton />
        {/* <div className={styles.modalPopUp__goBack}>порвернутися назад</div> */}
      </Box>
    </Fade>
  );
}

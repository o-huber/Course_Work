import React from 'react';
import Logo from './logo.svg';
import './ArnoMessage.css';
const GREETING =
  'Привіт, я - Арно,\n відгадаю будь-яку пісню. \n Запиши мені аудіо треку або відправ пару фраз пісні.';
const SOMETHING_WRONG = 'Хм, Спробуйте ще раз';
const AUDIO_WRITTEN = 'Ваше аудіо записано, очікуйте результату';

const ArnoMessage = (id, state, data, playSong, tryAgain) => {
  const isMultipleTracks =
    data &&
    data.songInfo &&
    data.songInfo.length >= 1 &&
    data.songInfo[0].title !== '';

  const thinkingTracks = isMultipleTracks
    ? data.songInfo.map(
        (obj, index) =>
          index + 1 <= data.tries && (
            <div key={index}>
              <div className="text1 offered-song">{obj.title || 'Нет вариантов'}</div>
              <div className="text1 artist">by {obj.artist || 'Вообще'}</div>
            </div>
          )
      )
    : null;

  return state && state.result ? (
    <div id={id} key={id}>
      <img src={Logo} alt="" className="arno-logo" />

      <div className="main-text arno-text">
        <div className="win-result">
          {data.win
            ? 'О, даа, я виграв цю битву:)'
            : 'Ця битва за тобою, я йду на покій'}{' '}
        </div>
        Количество попыток: <b>{data.tries}</b> <br />
        Количество побед: <b>{data.rowGames}</b> <br />
        {isMultipleTracks && 'Я думав про ці треки:'}
        {thinkingTracks}
        <div className="win-result">Бажаєте зіграти ще?</div>
      </div>
    </div>
  ) : state && state.audio_written ? (
    <div id={id} key={id}>
      <p className="main-text arno-text">{AUDIO_WRITTEN}</p>
    </div>
  ) : state && (state.greeting || !state.success) ? (
    <div id={id} key={id}>
      <img src={Logo} alt="" className="arno-logo" />
      <p className="main-text arno-text">
        {state.greeting ? GREETING : SOMETHING_WRONG}
      </p>
    </div>
  ) : (
    <div className="" id={id} key={id}>
      <img src={Logo} alt="" className="arno-logo" />
      <div className="main-text arno-text">
       Я думаю це:
				<div className="text1 offered-song">{data ? data.title : 'Нет вариантов'}</div>
				<div className="text1 artist">by {data ? data.artist : 'Вообще'}</div>
        <div className="h text-center">
          <div className="pb-3 pt-3">
            <button className="btn-true float-left" onClick={playSong}>
            Так, правильно
            </button>
            <button className="btn-false float-right" onClick={tryAgain}>
            Ще спроба
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ArnoMessage;

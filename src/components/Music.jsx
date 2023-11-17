import React from 'react'
import styled from 'styled-components';
import Audio1 from "assets/PerfectNight.mp3";
import LESSERAFIM1 from 'assets/르세라핌1.webp';

const MusicCSS = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 330px;
  margin: 10px;
  scale: 90%;

  .music-play-item {
    position: relative;
    display: flex;
    align-items: center;
    align-content: center;
    width: 100%;
  }

  .music-play-item * {
    transition: opacity 120ms;
    transition: scale 120ms;
  }

  .music-play-item:hover * {
    opacity: 0.6;
  }

  .music-play-item:active * {
    scale: 0.9;
  }

  .music-album-cover {
    width: 50px;
    height: 50px;
    border-radius: 3px;
    margin-right: 16px;
  }

  .music-info {
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    padding: 8px 0;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    cursor: pointer;
  }

  .music-info-detail {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin:0 10px;
  }

  .music-info-detail h1 {
    font-size: 16px;
    line-height: 1.2;
    color: #383838;
  }

  .music-info-detail strong {
    display: block;
    font-size: 14px;
    color: #8e8e93;
    margin-top: 5px;
  }

  .music-info-detail p {
    display: block;
    font-size: 14px;
    color: #FBA1B7;
    text-align: center;
    font-weight: 600;
    font-size: 10px;
    border: 1px solid #FBA1B7;
    border-radius: 5px;
    padding: 5px;
  }

  .now-play {
    display: flex;
    flex-direction: column;
    transition-duration: 120ms;
  }

  .now-play button {
    color: #FBA1B7;
    font-size: 17px;
    text-shadow: 0px 2px 5px #b18f97;
    background: transparent;
    border: none;
    transition: scale 120ms;
    cursor: pointer;
  }

  .now-play button:hover {
    scale: 1.4;
  }

  .now-play button:active {
    scale: 1.2;
  }

  audio {
    display: none;
  }
`

const defaultVolume = 0.2

window.onload = function () {
  let musicPlayItems = document.querySelectorAll(".music-play-item")
  const palyBox = document.querySelector(".paly-box")
  const nowPlay = document.querySelector(".now-play")
  const upBtn = document.querySelector(".upBtn")
  const downBtn = document.querySelector(".downBtn")



  musicPlayItems.forEach(function (item) {
    item.audio = item.querySelector("audio")
    if (item.audio.volume === defaultVolume) {
      // 자동 재생 여부 설정
      // item.audio.play()
      item.audio.pause()
    }

    upBtn.addEventListener("click", function () {
      if (item.audio.volume < 0.94) {
        item.audio.volume += 0.05
        downBtn.style.color = "#FBA1B7"
      } else {
        upBtn.style.color = "#aa6d7c"
      }
    })

    downBtn.addEventListener("click", function () {
      if (item.audio.volume > 0.01) {
        item.audio.volume -= 0.05
        upBtn.style.color = "#FBA1B7"
      } else {
        downBtn.style.color = "#aa6d7c"
      }
    })

    item.addEventListener("click", function () {
      let nowTime = item.audio.currentTime
      if (this.isPlaying) {
        palyBox.innerHTML = "🎧"
        upBtn.style.display = "block"
        downBtn.style.display = "block"
        item.audio.play()
      } else {
        palyBox.innerHTML = "⏸"
        upBtn.style.display = "none"
        downBtn.style.display = "none"
        item.audio.pause()
        item.audio.currentTime = nowTime
      }

      item.isPlaying = !item.isPlaying
    })
  })
}


function Music() {
  return (
    <MusicCSS>
      <li className="music-play-item">
        <img
          src={LESSERAFIM1}
          alt="르세라핌" lang="ko"
          className="music-album-cover" />
        <div className="music-info">
          <div className="music-info-detail">
            <div>
              <h1>
                Perfect Night
              </h1>
              <strong>
                LE SSERAFIM
              </strong>
            </div>
            <div className='paly-box'>
              <p className='paly-pause'>Click To<br />PAUSE</p>
            </div>
          </div>
          {/* controls muted autoPlay*/}
          <audio className="music-audio" src={Audio1} type='audio.mp3' onLoadStart={e => e.target.volume = defaultVolume} controls loop />
        </div>
      </li>
      <div className="now-play">
        <button className='upBtn'>▲</button >
        <button className='downBtn'>▼</button>
      </div>
    </MusicCSS>
  )
}

export default Music
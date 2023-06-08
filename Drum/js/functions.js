const audios = {
    btnD: '../songs/crash.mp3',
    btnW: '../songs/tom-2.mp3',
    btnS: '../songs/snare.mp3',
    btnA: '../songs/tom-1.mp3'
  }
  
  const btnD = document.getElementById('btnD')
  const btnW = document.getElementById('btnW')
  const btnS = document.getElementById('btnS')
  const btnA = document.getElementById('btnA')
  
  btnD.addEventListener('click', () => reproduzirAudio('btnD'))
  btnW.addEventListener('click', () => reproduzirAudio('btnW'))
  btnS.addEventListener('click', () => reproduzirAudio('btnS'))
  btnA.addEventListener('click', () => reproduzirAudio('btnA'))
  
  function reproduzirAudio(btnId) {
    console.log(`Botão ${btnId} foi tocado`)
    const audio = new Audio(audios[btnId])
    if (audio) {
      if (audio.paused || audio.currentTime === 0) {
        audio.play()
      } else {
        audio.currentTime = 0
        audio.play()
      }
    }
  }

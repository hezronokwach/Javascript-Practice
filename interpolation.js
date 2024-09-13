function interpolation(obj) {
    let step = obj.step
    let start = obj.start
    let end = obj.end
    let callback = obj.callback
    let duration = obj.duration
    let interval = duration / step
    let decrement = (end - start) / step
      for (let i = 0; i < step; i++) {
        let distance = start + (i * decrement)
        let time = (i + 1) * interval

        setTimeout(() => {
            callback([distance, time])
        }, time)
    }
}
interpolation({
    step: 5,
    start: 0,
    end: 1,
    duration: 10,
    callback: (point) => console.log(point)
});
export const fadeIn = (element, callback = null) => {
    let intialOpacity = 0.1;

    if (callback) callback();

    const timerInterval = setInterval(() => {
        if (intialOpacity >= 1) {
            clearInterval(timerInterval);

            return;
        }

        element.style.opacity = intialOpacity;

        intialOpacity += 0.1;
    }, 50);
};

export const fadeOut = (element, callback = null) => {
    let intialOpacity = 1;

    const timerInterval = setInterval(() => {
        if (intialOpacity <= 0.1) {
            clearInterval(timerInterval);
            if (callback) callback();
            return;
        }

        element.style.opacity = intialOpacity;

        intialOpacity -= 0.1;
    }, 50);
};

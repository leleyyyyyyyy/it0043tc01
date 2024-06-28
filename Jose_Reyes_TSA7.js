function resetFlexbox() {
    const flexWrapper = document.getElementById('flex-wrapper');
    flexWrapper.style.flexDirection = 'row';
    flexWrapper.style.justifyContent = 'flex-start';
    flexWrapper.style.alignItems = 'flex-start';
    flexWrapper.style.gap = '10px';

    for (let i = 1; i <= 3; i++) {
        const item = document.getElementById(item${i});
        item.style.flexGrow = '0';
    }

    document.getElementById('spacing').value = 0;
    document.getElementById('grow1').value = 0;
    document.getElementById('grow2').value = 0;
    document.getElementById('grow3').value = 0;
}

function setGap() {
    const spacing = document.getElementById('spacing').value;
    const flexWrapper = document.getElementById('flex-wrapper');
    flexWrapper.style.gap = ${spacing}px;
}

function setDirection(option) {
    const flexWrapper = document.getElementById('flex-wrapper');
    if (option === 1) {
        flexWrapper.style.flexDirection = 'row';
    } else if (option === 2) {
        flexWrapper.style.flexDirection = 'column';
    }
}

function setJustifyContent(option) {
    const flexWrapper = document.getElementById('flex-wrapper');
    switch (option) {
        case 1:
            flexWrapper.style.justifyContent = 'flex-start';
            break;
        case 2:
            flexWrapper.style.justifyContent = 'center';
            break;
        case 3:
            flexWrapper.style.justifyContent = 'flex-end';
            break;
        case 4:
            flexWrapper.style.justifyContent = 'space-between';
            break;
        case 5:
            flexWrapper.style.justifyContent = 'space-around';
            break;
        case 6:
            flexWrapper.style.justifyContent = 'space-evenly';
            break;
    }
}

function setAlignItems(option) {
    const flexWrapper = document.getElementById('flex-wrapper');
    switch (option) {
        case 1:
            flexWrapper.style.alignItems = 'flex-start';
            break;
        case 2:
            flexWrapper.style.alignItems = 'center';
            break;
        case 3:
            flexWrapper.style.alignItems = 'flex-end';
            break;
    }
}

function setGrow(option) {
    if (option === 0) {
        for (let i = 1; i <= 3; i++) {
            const item = document.getElementById(item${i});
            item.style.flexGrow = '0';
            document.getElementById(grow${i}).value = 0; // Reset grow value to 0
        }
    } else if (option === 4) {
        for (let i = 1; i <= 3; i++) {
            const growValue = document.getElementById(grow${i}).value;
            const item = document.getElementById(item${i});
            item.style.flexGrow = growValue;
        }
    } else {
        const growValue = document.getElementById(grow${option}).value;
        const item = document.getElementById(item${option});
        item.style.flexGrow = growValue;
    }
}

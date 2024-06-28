function resetFlexbox() {
    const flexWrapper = document.getElementById('flex-wrapper');
    flexWrapper.style.flexDirection = 'row';
    flexWrapper.style.justifyContent = 'flex-start';
    flexWrapper.style.alignItems = 'flex-start';
    flexWrapper.style.gap = '10px';

    for (let i = 1; i <= 3; i++) {
        const item = document.getElementById(`item${i}`);
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
    flexWrapper.style.gap = `${spacing}px`;
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
    if (option === 1) {
        flexWrapper.style.justifyContent = 'flex-start';
    } else if (option === 2) {
        flexWrapper.style.justifyContent = 'center';
    } else if (option === 3) {
        flexWrapper.style.justifyContent = 'flex-end';
    } else if (option === 4) {
        flexWrapper.style.justifyContent = 'space-between';
    } else if (option === 5) {
        flexWrapper.style.justifyContent = 'space-around';
    } else if (option === 6) {
        flexWrapper.style.justifyContent = 'space-evenly';
    }
}

function setAlignItems(option) {
    const flexWrapper = document.getElementById('flex-wrapper');
    if (option === 1) {
        flexWrapper.style.alignItems = 'flex-start';
    } else if (option === 2) {
        flexWrapper.style.alignItems = 'center';
    } else if (option === 3) {
        flexWrapper.style.alignItems = 'flex-end';
    }
}

function setGrow(option) {
    const item1 = document.getElementById('item1');
    const item2 = document.getElementById('item2');
    const item3 = document.getElementById('item3');

    if (option === 0) {
        item1.style.flexGrow = '0';
        item2.style.flexGrow = '0';
        item3.style.flexGrow = '0';

        document.getElementById('grow1').value = 0;
        document.getElementById('grow2').value = 0;
        document.getElementById('grow3').value = 0;
    } else if (option === 1) {
        const growValue = document.getElementById('grow1').value;
        item1.style.flexGrow = growValue;
    } else if (option === 2) {
        const growValue = document.getElementById('grow2').value;
        item2.style.flexGrow = growValue;
    } else if (option === 3) {
        const growValue = document.getElementById('grow3').value;
        item3.style.flexGrow = growValue;
    } else if (option === 4) {
        const grow1 = document.getElementById('grow1').value;
        const grow2 = document.getElementById('grow2').value;
        const grow3 = document.getElementById('grow3').value;
        item1.style.flexGrow = grow1;
        item2.style.flexGrow = grow2;
        item3.style.flexGrow = grow3;
    }
}

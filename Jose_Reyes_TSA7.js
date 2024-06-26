function setGap(){
    let gapValue = document.getElementById("spacing").value;
    let flexContainer = document.getElementById("flex-wrapper");
    flexContainer.style.gap = ${gapValue}px;
    console.log(Gap: ${flexContainer.style.gap});
}

function setJustifyContent(option) {
    let flexContainer = document.getElementById("flex-wrapper");
    if (option === 1) {
        flexContainer.style.justifyContent = "start";
    } else if (option === 2){
        flexContainer.style.justifyContent = "center";
    } else if (option === 3){
        flexContainer.style.justifyContent = "end";
    } else if (option === 4){
        flexContainer.style.justifyContent = "space-between";
    } else if (option === 5){
        flexContainer.style.justifyContent = "space-around";
    } else if (option === 6){
        flexContainer.style.justifyContent = "space-evenly";
    }
    console.log(Justify-Content: ${flexContainer.style.justifyContent});
}

function setAlignItems(option) {
    let flexContainer = document.getElementById("flex-wrapper");
    if (option === 1){
        flexContainer.style.alignItems = "start";
    } else if (option === 2){
        flexContainer.style.alignItems = "center";
    } else if (option === 3){
        flexContainer.style.alignItems = "end";
    } else if (option === 4){
        flexContainer.style.alignItems = "stretch";
    }
    console.log(Align-Items: ${flexContainer.style.alignItems});
}

function setDirection(option){
    let flexContainer = document.getElementById("flex-wrapper");
    if (option === 1){
        flexContainer.style.flexDirection = "row";
    } else if (option === 2){
        flexContainer.style.flexDirection = "column";
    }
    console.log(Flex-Direction: ${flexContainer.style.flexDirection});
}

function setGrow(option){
    let growValue1 = document.getElementById("grow1").value;
    let growValue2 = document.getElementById("grow2").value;
    let growValue3 = document.getElementById("grow3").value;
    let itemBox1 = document.getElementById("item1");
    let itemBox2 = document.getElementById("item2");
    let itemBox3 = document.getElementById("item3");
    if (option === 1) {
        itemBox1.style.flexGrow = growValue1;
    } else if (option === 2) {
        itemBox2.style.flexGrow = growValue2;
    } else if (option === 3) {
        itemBox3.style.flexGrow = growValue3;
    } else if (option === 0) {
        itemBox1.style.flexGrow = '0';
        itemBox2.style.flexGrow = '0';
        itemBox3.style.flexGrow = '0';
    } else if (option === 4) {
        itemBox1.style.flexGrow = growValue1;
        itemBox2.style.flexGrow = growValue2;
        itemBox3.style.flexGrow = growValue3;
    }
    console
}
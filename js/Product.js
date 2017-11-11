class Product { //eslint-disable-line
    constructor(name, src, displayed, clicked) {
        this.name = name;
        this.src = src;
        this.displayed = displayed || 0;
        this.clicked = clicked || 0;
    }
    wasDisplayed() {
        this.displayed += 1;
    }
    wasClicked() {
        this.clicked += 1;
    }
    render() {
        const ele = document.createElement('img');
        ele.src = this.src;
        ele.name = this.name;
        return ele;
    }
    renderTable() {
        const tab = document.getElementById('tab');
        const headRow = document.createElement('tr');
        tab.appendChild(headRow);
        const headBlank = document.createElement('th');
        headRow.appendChild(headBlank);
        const tabDisplay = document.createElement('th');
        tabDisplay.textContent = 'Times Displayed';
        headRow.appendChild(tabDisplay);
        const tabClick = document.createElement('th');
        tabClick.textContent = 'Times Clicked';
        headRow.appendChild(tabClick);
        const tabPercent = document.createElement('th');
        tabPercent.textContent = 'Percentage Chosen';
        headRow.appendChild(tabPercent);
        for ( let i = 0; i < products.length; i++){
            const productRow = document.createElement('tr');
            const nameCell = document.createElement('th');
            nameCell.textContent = this.name;
            productRow.appendChild(nameCell);
            const dispCell = document.createElement('td');
            dispCell.textContent = this.displayed;
            productRow.appendChild(dispCell);
            const clickCell = document.createElement('td');
            clickCell.textContent = this.clicked;
            productRow.appendChild(clickCell);
            const percentCell = document.createElement('td');
            clickCell.textContent = (this.clicked / this.displayed) * 100;
            productRow.appendChild(percentCell);
            tab.appendChild(productRow);
        }
    }

}






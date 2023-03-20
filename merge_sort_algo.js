var x = 0;
var y = 0;
("use strict");
class Algorithm {
    constructor(time) {
        this.list = document.querySelectorAll(".cell");
        this.size = this.list.length;
        this.time = time;
        this.functionhelp = new Helper(this.time, this.list);
    }

    // MERGE SORT
    MergeSort = async () => {
        await this.MergeDivider(0, this.size - 1);
        for (let counter = 0; counter < this.size; ++counter) {
            this.list[counter].setAttribute("class", "cell done");
        }
    };

    MergeDivider = async (start, end) => {
        if (start < end) {
            let mid = start + Math.floor((end - start) / 2);
            await this.MergeDivider(start, mid);
            await this.MergeDivider(mid + 1, end);
            await this.Merge(start, mid, end);
        }
        x++;
        console.log(x);
    };

    Merge = async (start, mid, end) => {
        let newList = new Array();
        let frontcounter = start;
        let midcounter = mid + 1;

        while (frontcounter <= mid && midcounter <= end) {
            let fvalue = Number(this.list[frontcounter].getAttribute("value"));
            let svalue = Number(this.list[midcounter].getAttribute("value"));
            if (fvalue >= svalue) {
                newList.push(svalue);
                ++midcounter;
            } else {
                newList.push(fvalue);
                ++frontcounter;
            }
        }
        while (frontcounter <= mid) {
            newList.push(Number(this.list[frontcounter].getAttribute("value")));
            ++frontcounter;
        }
        while (midcounter <= end) {
            newList.push(Number(this.list[midcounter].getAttribute("value")));
            ++midcounter;
        }

        for (let c = start; c <= end; ++c) {
            this.list[c].setAttribute("class", "cell current");
        }
        for (
            let c = start, point = 0;
            c <= end && point < newList.length;
            ++c, ++point
        ) {
            await this.functionhelp.delay();
            this.list[c].setAttribute("value", newList[point]);
            this.list[c].style.height = `${4.5 * (1 / 16) * newList[point]}em`;
        }
        for (let c = start; c <= end; ++c) {
            this.list[c].setAttribute("class", "cell");
        }
    };
}

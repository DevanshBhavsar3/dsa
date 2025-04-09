export default class MinHeap {
    public length: number;
    private data: number[];
    
    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;

    }

    delete(): number {
        if(this.length === 0){
            return -1;
        }

        const out = this.data[0];
        this.length--;

        if(this.length === 0) {
            this.data = [];
            return out;
        }

        this.data[0] = this.data[this.length];
        this.heapifyDown(0);

        return out;
    }

    private heapifyDown(idx: number): void {
        const lIdx = this.leftChild(idx);
        const rIdx = this.rightChild(idx);
        
        if(idx >= this.length || lIdx >= this.length) {
            return
        }

        const lVal = this.data[lIdx];
        const rVal = this.data[rIdx];
        const v = this.data[idx];

        if(lVal > rVal && v > rVal) {
            this.data[idx] = rVal;
            this.data[rIdx] = v;

            this.heapifyDown(rIdx);
        } else if(lVal < rVal && v > lVal) {
            this.data[idx] = lVal;
            this.data[lIdx] = v;

            this.heapifyDown(lIdx);
        }
    }

    private heapifyUp(idx: number): void {
        if(this.length === 0){
            return;
        }

        const p = this.parent(idx);
        const parentValue = this.data[p];
        const value = this.data[idx];

        if(parentValue > value) {
            this.data[idx] = parentValue;
            this.data[p] = value;

            this.heapifyUp(p)
        }
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private leftChild(idx: number): number {
        return 2 * idx + 1;
    }

    private rightChild(idx: number): number {
        return 2 * idx + 2;
    }
}
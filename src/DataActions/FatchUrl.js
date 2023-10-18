class FetchData {
    constructor(url) {
        this.url = url;
        this.getValuables = [];
        this.getValues = [];
        this.v = '';
    }

    Branch(e) {
        let br = this.url.split('&');
        this.getValuables = br;
        return e = br;
    }

    getData() {
        let x = this.getValuables.map(item => {
            this.getValues.push(item.split('='))
        })

        return this.getValues;
    }

    printData(fatherIndex = 0,childrenIndex = 1,type = 'num') {
        let ret = '';
        if(type === 'str') {
            let s = this.getValues[fatherIndex][childrenIndex];

            if(s.split('%27')) {
                let j = s.split('%27');
                ret = j[1];
            } 
            if(s.split('%22')) {
                let j = s.split('%22');
                ret = j[1];
            } else {
                ret = s;
            }
            
        }else {
            ret = +this.getValues[fatherIndex][childrenIndex];
        }

        return ret;
    }

}


export default FetchData;
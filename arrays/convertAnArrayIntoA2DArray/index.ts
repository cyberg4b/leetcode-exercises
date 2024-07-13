function findMatrix(nums: number[]): number[][] {
    let matrix: number[][] = [[]];

    for(const num of nums) {
        for(let i = 0; i < matrix.length; i++) {
            let row = matrix[i];

            if(!row.includes(num)) {
                matrix[i].push(num);
                break;
            }
            
            if(i === matrix.length - 1) {
                matrix.push([num]);
                break;
            }
        }
    }

    return matrix;
};

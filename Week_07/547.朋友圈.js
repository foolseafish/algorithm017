/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 朋友圈
 */

// @lc code=start
/**
 * @param {number[][]} M
 * @return {number}
 */

var findCircleNum = function(M) {
    const unionSet = new UnionFind(M.length);
    for(let i = 0, len1 = M.length; i < len1 - 1; i++) {
        for(let j = i + 1, len2 = M[i].length; j < len2; j++) {
            M[i][j] && unionSet.union(i,j);
        }
    }
    return unionSet.count;
};

class UnionFind {
    parent = [];
    count = 0
    constructor(count) {
        this.count = count;
        for(let i = 0; i < count; i++) {
            this.parent[i] = i;
        }
    }
    
    find(node){
        while(node !== this.parent[node]) {
            //题目里面按顺序就不用赋值了
            node = this.parent[node];            
        }
        return node;
    }
    union(node1, node2){
        const parent1 = this.find(node1);
        const parent2 = this.find(node2);
        if(parent1 === parent2) return;
        this.parent[parent2] = parent1;
        this.count--;        
    }
}
// @lc code=end

